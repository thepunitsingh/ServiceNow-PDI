import { BusinessRule } from '@servicenow/sdk/core'
import { restrictQueryToAccounts } from '../../server/case-rules'

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
