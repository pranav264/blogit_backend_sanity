import { defineType, defineField } from 'sanity';

export const textEditor = defineType({
    title: "Text Editor",
    name: "textEditor",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "editor",
            type: "array",
            of: [
                {type: "block"},
            ],
        })
    ]
})