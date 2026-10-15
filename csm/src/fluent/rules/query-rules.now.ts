import { BusinessRule } from '@servicenow/sdk/core'
import { restrictQueryToAccounts, restrictAssetQueryToAccounts, restrictModelQueryToAccounts } from '../../server/case-rules'

// SP-72 / SP-90: list- and report-level account restriction (the Deny-Unless ACLs cover direct record access).
BusinessRule({
    $id: Now.ID['qr-case-account'],
    name: 'CSM Query Rule: cases by account',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['query'],
    order: 50,
    script: restrictQueryToAccounts,
})

BusinessRule({
    $id: Now.ID['qr-task-account'],
    name: 'CSM Query Rule: case tasks by account',
    table: 'sn_customerservice_task',
    when: 'before',
    action: ['query'],
    order: 50,
    script: restrictQueryToAccounts,
})

// SP-90: assets and product models for agents.
BusinessRule({
    $id: Now.ID['qr-asset-account'],
    name: 'CSM Query Rule: assets by account',
    table: 'alm_asset',
    when: 'before',
    action: ['query'],
    order: 50,
    script: restrictAssetQueryToAccounts,
})

BusinessRule({
    $id: Now.ID['qr-model-account'],
    name: 'CSM Query Rule: product models by account',
    table: 'cmdb_model',
    when: 'before',
    action: ['query'],
    order: 50,
    script: restrictModelQueryToAccounts,
})

// SP-90: install base items (needs the Install Base plugin, see README).
BusinessRule({
    $id: Now.ID['qr-install-base-account'],
    name: 'CSM Query Rule: install base items by account',
    table: 'sn_install_base_item',
    when: 'before',
    action: ['query'],
    order: 50,
    script: restrictAssetQueryToAccounts,
})
