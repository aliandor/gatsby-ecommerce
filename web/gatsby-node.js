const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Stickers = await graphql(`
    {
      allSanitySticker {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  Stickers.data.allSanitySticker.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/sticker.js`),
      context: {
        slug: node.slug.current,
      },
    })
  })
}
