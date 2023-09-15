export const sponsorPage = {
  type: 'document',
  name: 'sponsorPage',
  title: 'Sponsor Page',

  fieldset: [
    {
      name: 'whyToSponsorComponent',
      title: 'Why To Sponsor Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'sponsorsLogosComponents',
      title: "Sponsor's Logos Component",
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
      name: 'whyToSponsorComponent',
      title: 'Why To Sponsor Component',
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
      name: 'sponsorLogosTitle',
      title: "Sponsor's Logos Title",
      type: 'string',
    },
    {
      name: 'sponsorsLogosComponents',
      title: "Sponsor's Logos Component",
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
              name: 'sponsorLogoLink',
              title: 'Sponsor Logo Link',
              type: 'url',
            },
            {
              name: 'sponsorLogo',
              title: 'Sponsor Logo',
              type: 'image',
            },
            {
              name: 'sponsorLink',
              title: 'Sponsor Link',
              type: 'url',
            },
            {
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
