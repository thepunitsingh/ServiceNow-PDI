import { SPWidget, Record } from '@servicenow/sdk/core'

// SP-81: portal case lists - All Cases, Action Needed, My Cases. Account segregation is not re-implemented here: the
// queries run as the logged-in user, so the CSM query rules and ACLs (SP-72) decide what is visible.
export const caseListsWidget = SPWidget({
    $id: Now.ID['widget-case-lists'],
    name: 'CSM Case Lists',
    id: 'x_1863667_csm_case_lists',
    description: 'All Cases / Action Needed / My Cases with action-required highlighting',
    category: 'custom',
    htmlTemplate: `<div class="panel panel-default">
  <div class="panel-heading">
    <ul class="nav nav-pills">
      <li ng-repeat="t in data.tabs" ng-class="{active: c.tab === t.id}"><a href ng-click="c.tab = t.id">{{t.label}} <span class="badge">{{t.count}}</span></a></li>
    </ul>
  </div>
  <table class="table table-hover">
    <thead><tr><th>Number</th><th>Short description</th><th>State</th><th>Updated</th></tr></thead>
    <tbody>
      <tr ng-repeat="r in data.rows[c.tab]" ng-class="{warning: r.actionNeeded}">
        <td><a ng-href="?id=ticket&table=sn_customerservice_case&sys_id={{r.sys_id}}">{{r.number}}</a></td>
        <td>{{r.short_description}}</td>
        <td><span ng-if="r.actionNeeded" class="fa fa-exclamation-circle text-warning"></span> {{r.state}}</td>
        <td>{{r.updated}}</td>
      </tr>
      <tr ng-if="!data.rows[c.tab].length"><td colspan="4" class="text-muted">No cases</td></tr>
    </tbody>
  </table>
</div>`,
    serverScript: `(function () {
    var lists = {
        all: '',
        action: 'stateIN6,18',
        mine: 'opened_by=' + gs.getUserID()
    };
    data.tabs = [
        { id: 'all', label: 'All Cases' },
        { id: 'action', label: 'Action Needed' },
        { id: 'mine', label: 'My Cases' }
    ];
    data.rows = {};
    data.tabs.forEach(function (t) {
        var gr = new GlideRecord('sn_customerservice_case');
        if (lists[t.id]) gr.addEncodedQuery(lists[t.id]);
        gr.orderByDesc('sys_updated_on');
        gr.setLimit(50);
        gr.query();
        var rows = [];
        while (gr.next()) {
            if (!gr.canRead()) continue;
            rows.push({
                sys_id: gr.getUniqueValue(),
                number: gr.getValue('number'),
                short_description: gr.getValue('short_description'),
                state: gr.getDisplayValue('state'),
                updated: gr.getDisplayValue('sys_updated_on'),
                actionNeeded: gr.getValue('state') === '6' || gr.getValue('state') === '18'
            });
        }
        data.rows[t.id] = rows;
        t.count = rows.length;
    });
})();`,
    clientScript: `function () {
    var c = this;
    c.tab = 'all';
}`,
})

// SP-83: portal search over cases (Knowledge uses the OOB Knowledge Bases source). Both run as the signed-in user, so
// case visibility follows the account ACLs / query rules and knowledge follows its user criteria.
export const caseSearchSource = Record({
    $id: Now.ID['search-source-case'],
    table: 'sp_search_source',
    data: {
        name: 'Veridos Cases',
        id: 'csm_case',
        order: 100,
        is_scripted_source: true,
        enable_typeahead: true,
        typeahead_glyph: 'briefcase',
        pagination_supported: false,
        data_fetch_script: `var count = count || 30;
(function (query, queryLocation, count, facets) {
    var results = [];
    var gr = new GlideRecord('sn_customerservice_case');
    var q = String(query || '').trim();
    gr.addQuery('numberSTARTSWITH' + q.toUpperCase() + '^ORshort_descriptionLIKE' + q + '^ORdescriptionLIKE' + q + '^ORproduct.nameLIKE' + q + '^ORproduct.model_numberLIKE' + q);
    gr.orderByDesc('sys_updated_on');
    gr.chooseWindow(queryLocation || 0, (queryLocation || 0) + count);
    gr.query();
    while (gr.next()) {
        if (!gr.canRead()) continue;
        results.push({
            sys_id: gr.getUniqueValue(),
            number: gr.getValue('number'),
            short_description: gr.getValue('short_description'),
            text: String(gr.getValue('description') || '').substring(0, 200),
            label: gr.getValue('number') + ' ' + gr.getValue('short_description'),
            primary: gr.getValue('short_description'),
            table: 'sn_customerservice_case',
            type: 'csm_case',
            link: '?id=ticket&table=sn_customerservice_case&sys_id=' + gr.getUniqueValue()
        });
    }
    return results;
})(query, queryLocation, count, facets);`,
        search_page_template: `<div><a href="{{item.link}}" class="h4 text-primary m-b-sm block"><i class="fa fa-briefcase m-r-sm"></i>{{item.number}} - {{item.short_description}}</a><p>{{item.text}}</p></div>`,
    },
})
