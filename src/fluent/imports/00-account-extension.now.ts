import { Table, StringColumn } from '@servicenow/sdk/core'

// SP-19: customer_account has no classification field, so add one in this scope.
export const customer_account = Table({
    augments: 'customer_account',
    schema: {
        x_1863667_csm_classification: StringColumn({ label: 'Classification', maxLength: 80 }),
    },
})
