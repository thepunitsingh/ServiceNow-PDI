import { Role } from '@servicenow/sdk/core'

// SP-71: application roles. License mapping (documented in README):
//   admin / l2_agent / l3_1_agent / l3_2_specialist -> CSM fulfiller (sn_customerservice_agent)
//   case_viewer                                      -> CSM read-only / customer light (case_viewer)
//   customer_contact                                 -> customer light user (sn_customerservice.customer)
// account_scoped is the marker role: holders only see data of their authorised accounts (SP-72, SP-90).

export const accountScoped = Role({
    name: 'x_1863667_csm.account_scoped',
    description: 'Marker role: users with this role only see records of their authorised accounts',
})

export const adminRole = Role({
    name: 'x_1863667_csm.admin',
    description: 'Veridos CSM administrator',
    containsRoles: ['sn_customerservice_manager', 'sn_customerservice.case_admin'],
})

export const l2Agent = Role({
    name: 'x_1863667_csm.l2_agent',
    description: 'L2 support agent',
    containsRoles: ['sn_customerservice_agent', accountScoped],
})

export const l31Agent = Role({
    name: 'x_1863667_csm.l3_1_agent',
    description: 'L3.1 agent - Global Veridos Service & Maintenance',
    containsRoles: ['sn_customerservice_agent', accountScoped],
})

export const l32Specialist = Role({
    name: 'x_1863667_csm.l3_2_specialist',
    description: 'L3.2 specialist - Supplier / OEM / SID / R&D',
    containsRoles: ['sn_customerservice_agent', accountScoped],
})

export const caseViewer = Role({
    name: 'x_1863667_csm.case_viewer',
    description: 'Read-only access to cases of the authorised accounts',
    containsRoles: ['sn_customerservice.case_viewer', accountScoped],
})

export const customerContact = Role({
    name: 'x_1863667_csm.customer_contact',
    description: 'Customer contact (portal user)',
    containsRoles: ['sn_customerservice.customer', accountScoped],
})
