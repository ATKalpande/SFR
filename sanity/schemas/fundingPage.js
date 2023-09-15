export const fundingPage = {
  type: 'document',
  name: 'fundingPage',
  title: 'Funding Page',
  fieldset: [
    {
      name: 'aboutComponent',
      title: 'About Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'supportHierarchy',
      title: 'Support Hierarchy',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'budgetAnalysisComponent',
      title: 'Budget Analysis Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },

    {
      name: 'fundingFormComponent',
      title: 'Funding Form Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'string',
    },
    {
      name: 'aboutComponent',
      title: 'About Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
    {
      name: 'supportHierarchy',
      title: 'Support Hierarchy',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'supportLevels',
          title: 'Support Levels',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'budgetAnalysisComponent',
      title: 'Budget Analysis Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'budgetImages',
          title: 'Budget Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                },
                {
                  name: 'altText',
                  title: 'Alt Text',
                  type: 'string',
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'fundingFormComponent',
      title: 'Funding Form Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'gglFormUrl',
          title: 'Google Form URL',
          type: 'url',
        },
      ],
    },
  ],
}
