export const gallaryPage = {
  type: 'document',
  name: 'gallaryPage',
  title: 'Gallary Page',

  fieldset: [
    {
      name: 'gallaryComponent',
      title: 'Gallary Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'gallaryImagesRows',
      title: 'Gallary Images Rows',
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
      name: 'gallaryComponent',
      title: 'Gallary Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
      ],
    },
    {
      name: 'gallaryImagesRows',
      title: 'Gallary Images Rows',
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
              title: 'Images Row',
              type: 'array',
              of: [
                {
                  type: 'image',
                  fields: [
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
      ],
    },
  ],
}
