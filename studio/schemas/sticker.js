export default {
  name: "sticker",
  title: "Sticker",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "info",
      title: "Info",
      type: "string"
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
};
