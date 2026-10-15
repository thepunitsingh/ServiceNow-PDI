import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

// SP-19: customer_account has no classification field, so add one in this scope.
// SP-35/36/37/51/52: customer code identifies the LVA / GEO programmes (SLA schedules, routing, portal branding);
// portal logo (attachment sys_id of an image) and banner colour drive account-based portal branding.
export const customer_account = Table({
    augments: 'customer_account',
    schema: {
        x_1863667_csm_classification: StringColumn({ label: 'Classification', maxLength: 80 }),
        x_1863667_csm_customer_code: ChoiceColumn({
            label: 'Customer code',
            choices: { lva: 'LVA', geo: 'GEO', other: 'Other' },
            default: 'other',
        }),
        x_1863667_csm_portal_logo: StringColumn({ label: 'Portal logo (image URL / attachment)', maxLength: 255 }),
        x_1863667_csm_banner_color: StringColumn({ label: 'Portal banner colour (hex)', maxLength: 9 }),
    },
})
