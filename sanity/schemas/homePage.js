export const homePage = {
  type: 'document',
  name: 'homepage',
  title: 'Homepage',
  fields: [
    {
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading'},
            {name: 'subheading', type: 'string', title: 'Subheading'},
            {name: 'description', type: 'array', title: 'Description', of: [{type: 'block'}]},
            {
              name: 'media',
              type: 'object',
              title: 'Media',
              fields: [
                {
                  name: 'loadSingleItem',
                  type: 'boolean',
                  title: 'Display a single item',
                  description:
                    'If checked, only first image/video can be added to this section from the list.',
                  initialValue: false,
                },
                {
                  name: 'useGridDisplay',
                  type: 'boolean',
                  title: 'Use grid display',
                  description: 'If checked, images/videos will be displayed in a grid layout.',
                  initialValue: false,
                },
                {
                  name: 'useCarouselDisplay',
                  type: 'boolean',
                  title: 'Use carousel display',
                  description: 'If checked, images/videos will be displayed in a carousel.',
                  initialValue: false,
                },
                {
                  name: 'items',
                  type: 'array',
                  title: 'Items',
                  of: [
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Image',
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: 'video',
                      type: 'object',
                      title: 'Video',
                      fields: [
                        {
                          type: 'file',
                          accept: 'video/*',
                          title: 'Video',
                          name: 'video',
                          description: 'Upload a video file.',
                        },
                        {
                          name: 'url',
                          type: 'url',
                          title: 'URL',
                          description: 'Optional: add a URL for the video.',
                        },
                        {
                          name: 'title',
                          type: 'string',
                          title: 'Title',
                          description: 'Optional: add a title for the video.',
                        },
                        {
                          name: 'description',
                          type: 'text',
                          title: 'Description',
                          description: 'Optional: add a description for the video.',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'richTextContents',
              type: 'array',
              title: 'Main Content',
              of: [{type: 'block'}],
            },
            {
              name: 'bulletPoints',
              type: 'array',
              title: 'Bullet Points',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Title'},
                    {
                      name: 'items',
                      type: 'array',
                      title: 'Items',
                      of: [{type: 'block'}],
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
