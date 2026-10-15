import { ServicePortal, SPWidget } from '@servicenow/sdk/core'
import { caseSearchSource } from './case-lists.now'

// SP-50: new portal 'csmgnd', cloned from the OOB CSM portal (/csm) by pointing at the same OOB theme, pages and KB.
// SP-51 / SP-52: account-based logo and banner colour with default fallback via the "CSM Account Branding" widget.
export const csmgndPortal = ServicePortal({
    $id: Now.ID['portal-csmgnd'],
    title: 'Customer Support',
    urlSuffix: 'csmgnd',
    theme: '60bed96c93131210aa38860754891827',
    homePage: 'eb84cfd7cb13020000f8d856634c9c4b',
    loginPage: 'a0e3b3acc3521200b0449f2974d3ae14',
    notFoundPage: '3c2c9063cb11020000f8d856634c9c1f',
    knowledgeBase: '05ff44289f011200550bf7b6077fcfa3',
    logo: 'edb19c2aff731610d40affffffffffce',
    // SP-83: cases (own source) + OOB Knowledge Bases source
    searchSources: [
        { searchSource: caseSearchSource, order: 100 },
        { searchSource: 'c6170ae86721220023c82e08f585efe6', order: 200 },
    ],
})

export const accountBrandingWidget = SPWidget({
    $id: Now.ID['widget-account-branding'],
    name: 'CSM Account Branding',
    id: 'x_1863667_csm_account_branding',
    description: 'Applies the signed-in contact\'s account logo and banner colour; falls back to the default Veridos logo and colour',
    htmlTemplate: `<div class="csm-account-branding" ng-if="data.logo"><img ng-src="{{data.logo}}" alt="{{data.accountName}}" style="max-height:48px"></div>`,
    serverScript: `(function () {
    var defaults = {
        logo: gs.getProperty('x_1863667_csm.portal.default_logo', ''),
        color: gs.getProperty('x_1863667_csm.portal.default_banner_color', '#003b6f'),
        font: gs.getProperty('x_1863667_csm.portal.default_font_color', '#ffffff')
    };
    data.logo = defaults.logo;
    data.color = defaults.color;
    data.font = defaults.font;
    var contact = new GlideRecord('customer_contact');
    contact.addQuery('user', gs.getUserID());
    contact.setLimit(1);
    contact.query();
    if (contact.next() && contact.account) {
        var acct = contact.account.getRefRecord();
        data.accountName = acct.getValue('name');
        if (acct.getValue('x_1863667_csm_portal_logo')) data.logo = acct.getValue('x_1863667_csm_portal_logo');
        if (acct.getValue('x_1863667_csm_banner_color')) data.color = acct.getValue('x_1863667_csm_banner_color');
    }
})();`,
    clientScript: `function ($scope) {
    var c = this;
    var style = document.getElementById('csm-account-branding-style') || document.createElement('style');
    style.id = 'csm-account-branding-style';
    style.textContent = '.navbar-inverse, .navbar-default, .hero-banner, .sp-header { background-color: ' + $scope.data.color + ' !important; color: ' + $scope.data.font + ' !important; }';
    document.head.appendChild(style);
}`,
    category: 'custom',
    public: false,
})
