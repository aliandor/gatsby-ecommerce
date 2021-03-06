module.exports = {
  siteMetadata: {
    title: `Web Dev Stickers`,
    description: `A sticker E-Commerce site built with gatsby, snipcart and sanity.io`,
    author: `Alfonso Galang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: `ZmZlN2M5YzMtOWMyMy00ODBiLWFmZjItZmRiYWQ5OTY2Mjc0NjM3MTYwMDc5MTIxODYxMTA0`,
        autopop: false,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "f7g7zioq",
        dataset: "production",
        // token: process.env.SANITY_READ_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
