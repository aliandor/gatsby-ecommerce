const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const Stickers = graphql(`
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
  `).then(result => {
    result.errors
      ? Promise.reject(result.errors)
      : result.data.allSanitySticker.edges.forEach(({ node }) => {
          createPage({
            path: node.slug.current,
            component: path.resolve(`./src/templates/sticker.js`),
            context: {
              slug: node.slug.current,
            },
          })
        })
  })
  return Promise.all([Stickers])
}
