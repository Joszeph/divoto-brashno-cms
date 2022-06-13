export default {
    name: 'pogachi',
    title: 'Погачи',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: "Име на продукта",
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: "Не се попълва нищо в полето, а се избира се GENERATE.",
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }
  