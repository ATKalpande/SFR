export const homePage = {
  type: 'document',
  name: 'homepage',
  title: 'Homepage',

  fields: [
    {
      name: 'heroComponent',
      title: 'Hero Component',
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
      name: 'imageSliderComponent',
      title: 'Image Slider Component',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
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
      name: 'achievementsComponent',
      title: 'Achievements Component',
      type: 'object',
      fields: [
        {
          name: 'achievements',
          title: 'Achievements',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}
