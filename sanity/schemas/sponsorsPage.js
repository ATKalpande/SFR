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
      name: 'sponsorsLogosRow',
      title: "Sponsor's Logos Row",
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
              name: 'imagesRow',
              title: 'Sponsor Images Row',
              type: 'array',
              of: [
                {
                  type: 'image',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      options: {
                        isHighlighted: true,
                      },
                    },
                    {
                      name: 'alt',
                      title: 'Alt text',
                      type: 'string',
                    },
                    {
                      name: 'sponsorLogoLink',
                      title: 'Sponsor Logo Link',
                      description:
                        'If image is not available please provide a link to the sponsor logo',
                      type: 'url',
                    },
                    {
                      name: 'sponsorWebsiteLink',
                      title: 'Sponsor Website Link',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
