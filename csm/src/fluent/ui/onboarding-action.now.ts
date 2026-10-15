import { UiAction } from '@servicenow/sdk/core'
import { onboardProject } from '../../server/onboarding'

// SP-87: self-service project onboarding from the account form.
export const onboardAction = UiAction({
    $id: Now.ID['ua-onboard-project'],
    name: 'Onboard project',
    table: 'customer_account',
    actionName: 'x_1863667_csm_onboard_project',
    active: true,
    form: { showButton: true },
    roles: ['x_1863667_csm.admin'],
    hint: 'Create the standard L2 group, agent role and routing rule for this account',
    script: onboardProject,
})
