import { graphql, useStaticQuery } from "gatsby"
export const useAllOurWork = () => {
  const {
    primeWorks: { edges: primeWorks },
    allWorks: { edges: allWorks },
  } = useStaticQuery(
    graphql`
      {
        primeWorks: allMdx(
          filter: {
            fileAbsolutePath: { regex: "/(our-work)/" }
            frontmatter: { prime: { eq: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 3
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 200)
              frontmatter {
                title
                color
                pageIntro
                embeddedImagesLocal {
                  publicURL
                }
              }
              slug
            }
          }
        }
        allWorks: allMdx(
          filter: { fileAbsolutePath: { regex: "/(our-work)/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 200)
              frontmatter {
                title
                color
                pageIntro
                embeddedImagesLocal {
                  publicURL
                }
              }
              slug
            }
          }
        }
      }
    `
  )
  return { primeWorks, allWorks }
}
