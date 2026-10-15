import { Record } from '@servicenow/sdk/core'

// SP-88: default Veridos branding used by the csmgnd portal when an account has no branding of its own.
// ASSUMPTION: colours are placeholders; set the logo property to the Veridos logo URL / attachment path after install.
export const propDefaultLogo = Record({
    $id: Now.ID['prop-portal-default-logo'],
    table: 'sys_properties',
    data: {
        name: 'x_1863667_csm.portal.default_logo',
        value: '',
        type: 'string',
        description: 'Default Veridos logo shown on the portal when the account has no logo',
    },
})

export const propDefaultBanner = Record({
    $id: Now.ID['prop-portal-default-banner'],
    table: 'sys_properties',
    data: {
        name: 'x_1863667_csm.portal.default_banner_color',
        value: '#003b6f',
        type: 'string',
        description: 'Default Veridos header colour',
    },
})

export const propDefaultFont = Record({
    $id: Now.ID['prop-portal-default-font'],
    table: 'sys_properties',
    data: {
        name: 'x_1863667_csm.portal.default_font_color',
        value: '#ffffff',
        type: 'string',
        description: 'Default Veridos header font colour',
    },
})

export const propMailbox = Record({
    $id: Now.ID['prop-support-mailbox'],
    table: 'sys_properties',
    data: {
        name: 'x_1863667_csm.support_mailbox',
        value: '',
        type: 'string',
        description: 'SP-69: Veridos support mailbox address handled by the inbound email action',
    },
})
