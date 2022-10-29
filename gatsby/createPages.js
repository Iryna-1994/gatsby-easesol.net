const path = require('path')
module.exports = exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const OurWorkTemplate = path.resolve(`src/templates/OurWork/index.js`)
  const result = await graphql(`
  {
  ourWork: allMdx(
        filter: {fileAbsolutePath: {regex: "/(our-work)/"}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            frontmatter {
              title
              color
            }
            slug
          }
        }
      }
    }
    `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  result.data.ourWork.edges.forEach((ourWork) => {
    const { node } = ourWork
    const { slug } = node

    createPage({
      path: `/${slug}`,
      component: OurWorkTemplate,
      context: {
        id: node.id
      },
    })
  })
}