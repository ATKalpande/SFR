export const contactPage = {
  type: 'document',
  name: 'contactPage',
  title: 'Contact Page',

  fieldset: [
    {
      name: 'contactUsComponent',
      title: 'Contact Us Component',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'locationComponent',
      title: 'Location Component',
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
      name: 'locationComponent',
      title: 'Location Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'locationAddress',
          title: 'Location Address For Map',
          type: 'string',
        },
      ],
    },
    {
      name: 'contactUsComponent',
      title: 'Contact Us Component',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'collegeName',
          title: 'College Name',
          type: 'string',
        },
        {
          name: 'villegeName',
          title: 'Villege Name',
          type: 'string',
        },
        {
          name: 'districtName',
          title: 'District Name',
          type: 'string',
        },
        {
          name: 'stateName',
          title: 'State Name',
          type: 'string',
        },
        {
          name: 'countryName',
          title: 'Country Name',
          type: 'string',
        },
        {
          name: 'pinCode',
          title: 'Pin Code',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        },
      ],
    },
  ],
}
