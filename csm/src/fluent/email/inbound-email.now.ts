import { InboundEmailAction, EmailNotification, Record } from '@servicenow/sdk/core'

// SP-69: the Veridos support mailbox is rerouted to this instance. Only mail addressed to the mailbox configured in
// system property x_1863667_csm.support_mailbox is handled (single support mailbox model), so other mail is untouched.
// Cutover plan: see README ("Mailbox cutover").
// SP-78: threading + duplicate prevention. A mail belongs to an existing case when (1) the subject carries a case number,
// (2) In-Reply-To / References matches a message stored on a case, or (3) the same sender sent the same subject to the
// mailbox within the last 10 minutes. Matching mails are added as customer comments; only unmatched mails create cases.

export const inboundCreateCase = InboundEmailAction({
    $id: Now.ID['iea-create-case'],
    name: 'Veridos mailbox: create or update case',
    description: 'SP-69 / SP-78: create a case from a new email, or attach the email to the thread\'s existing case',
    table: 'sn_customerservice_case',
    type: 'new',
    action: 'record_action',
    active: true,
    order: 100,
    eventName: 'email.read',
    stopProcessing: true,
    conditionScript: `(function () {
    var mailbox = (gs.getProperty('x_1863667_csm.support_mailbox', '') + '').toLowerCase();
    if (!mailbox) return false;
    return ((email.recipients || '') + '').toLowerCase().indexOf(mailbox) > -1;
})()`,
    script: `(function runAction(current, event, email, logger, classifier) {
    function findExisting() {
        var subject = (email.subject || '') + '';
        var m = subject.match(/CS\\d{7,}/i);
        if (m) {
            var byNumber = new GlideRecord('sn_customerservice_case');
            byNumber.addQuery('number', m[0].toUpperCase());
            byNumber.setLimit(1);
            byNumber.query();
            if (byNumber.next()) return byNumber;
        }
        var refs = ((email.headers && (email.headers['in-reply-to'] || email.headers['references'])) || '') + '';
        if (refs) {
            var ids = refs.split(/\\s+/);
            for (var i = 0; i < ids.length; i++) {
                if (!ids[i]) continue;
                var mail = new GlideRecord('sys_email');
                mail.addQuery('target_table', 'sn_customerservice_case');
                mail.addQuery('headers', 'CONTAINS', ids[i].replace(/[<>]/g, ''));
                mail.setLimit(1);
                mail.query();
                if (mail.next()) {
                    var byRef = new GlideRecord('sn_customerservice_case');
                    if (byRef.get(mail.getValue('instance'))) return byRef;
                }
            }
        }
        var window = new GlideDateTime();
        window.addSeconds(-600);
        var dup = new GlideRecord('sn_customerservice_case');
        dup.addQuery('sys_created_on', '>=', window);
        dup.addQuery('short_description', subject.substring(0, 160));
        dup.addQuery('x_1863667_csm_channel', 'email');
        dup.addQuery('contact.email', email.origemail);
        dup.setLimit(1);
        dup.query();
        return dup.next() ? dup : null;
    }

    var existing = findExisting();
    if (existing) {
        existing.comments = 'Received from ' + email.origemail + ':\\n\\n' + email.body_text;
        existing.update();
        current.setAbortAction(true);
        return;
    }

    current.short_description = ((email.subject || '(no subject)') + '').substring(0, 160);
    current.description = email.body_text;
    current.contact_type = 'email';
    current.x_1863667_csm_channel = 'email';
    var contact = new GlideRecord('customer_contact');
    contact.addQuery('email', email.origemail);
    contact.setLimit(1);
    contact.query();
    if (contact.next()) {
        current.contact = contact.getUniqueValue();
        current.account = contact.getValue('account');
    }
    current.insert();
})(current, event, email, logger, classifier);`,
})

// SP-74: customer notification on out-of-scope cancellation (event queued by the Cancellation business rule).
export const cancelEvent = Record({
    $id: Now.ID['evt-case-cancelled'],
    table: 'sysevent_register',
    data: {
        event_name: 'x_1863667_csm.case.cancelled',
        table: 'sn_customerservice_case',
        description: 'Fired when a case is cancelled as out of scope; parm1 = cancellation reason',
        fired_by: 'CSM Case: cancellation reason',
    },
})

export const cancelNotification = EmailNotification({
    $id: Now.ID['notif-case-cancelled'],
    table: 'sn_customerservice_case',
    name: 'Veridos Case cancelled (out of scope)',
    description: 'SP-74: tells the customer that the case was cancelled and why',
    active: true,
    triggerConditions: {
        generationType: 'event',
        eventName: 'x_1863667_csm.case.cancelled',
    },
    recipientDetails: {
        recipientFields: ['contact'],
    },
    emailContent: {
        subject: 'Case ${number} has been cancelled',
        messageHtml:
            '<p>Your case <b>${number}</b> (${short_description}) has been cancelled because it is outside the scope of the service.</p><p>Reason: ${event.parm1}</p>',
    },
})
