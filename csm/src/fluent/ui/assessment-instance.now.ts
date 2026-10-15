import { List, default_view } from '@servicenow/sdk/core'

// SP-49: show the contact's filled-in survey answers on the Assessment Instance form (read-only related list
// of asmt_assessment_instance_question, filtered by the implicit "instance" reference to the viewed instance).
// Answers come from the survey record itself, so the response stays the system of record.
List({
    table: 'asmt_assessment_instance_question',
    view: default_view,
    parent: 'asmt_assessment_instance',
    columns: [
        { element: 'metric' },
        { element: 'string_value' },
        { element: 'value' },
    ],
})
