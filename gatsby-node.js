const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const newsTemplate = path.resolve("./src/templates/newsTemplate.js")

  const response = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/aktuellt/${edge.node.slug}`,
      component: newsTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
