export const socials = {
  name: 'socials',
  title: 'Social Media Profiles',
  type: 'document',

  fieldsets: [
    {
      name: 'socials',
      title: 'Social Media Profiles',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      name: 'name',
      title: 'Data Name',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Social Media Profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'profileLink',
              type: 'url',
              title: 'Profile Link',
            },
          ],
        },
      ],
    },
  ],
}
