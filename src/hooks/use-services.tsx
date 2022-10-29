import { graphql, useStaticQuery } from "gatsby"
export const useService = () => {
  const {
    primeServices: { nodes: allPrimeServices },
    allServices: { nodes: allServices },
  } = useStaticQuery(
    graphql`
      {
        primeServices: allMdx(
          filter: {
            fileAbsolutePath: { regex: "/(services)/" }
            frontmatter: { isServicePrime: { eq: true } }
          }
          limit: 2
        ) {
          nodes {
            slug
            excerpt(pruneLength: 110)
            frontmatter {
              title
              iconName
              color
            }
          }
        }
        allServices: allMdx(
          filter: {
            fileAbsolutePath: { regex: "/(services)/" }
            frontmatter: { isServicePrime: { ne: true } }
          }
        ) {
          nodes {
            slug
            excerpt(pruneLength: 200)
            frontmatter {
              title
              iconName
              color
            }
          }
        }
      }
    `
  )
  return { allPrimeServices, allServices }
}
