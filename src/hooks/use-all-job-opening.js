import { graphql, useStaticQuery } from "gatsby";
export const useAllJobOpening = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query ALL_JOB_OPENING_QUERY {
        allMdx(filter: {fileAbsolutePath: {regex: "/(job-opening)/"}}) {
          edges {
            node {
              id
              excerpt(pruneLength: 100)
              frontmatter {
                title
              }
              slug
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}