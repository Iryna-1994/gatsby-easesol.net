import React from "react"
import { Link } from "gatsby"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"
import { graphql, useStaticQuery } from "gatsby"
import Icons from "@/components/Icons"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ILine from "../ILine"

const Col3ServicesContainer = ({ }) => {

  const {
    allHomeServices: { nodes: allHomeServices },
  } = useStaticQuery(graphql`
    {
      allHomeServices: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/(services)/" }
          frontmatter: { isServiceHome: { eq: true } }
        }
        limit: 3
        sort: { fields: frontmatter___title, order: DESC }
      ) {
        nodes {
          slug
          excerpt
          frontmatter {
            title
            iconName
          }
        }
      }
    }
  `)
  return (
    <section className="py-16 my-5 mx-4 md:mx-5 bg-yellow-100 dark:bg-sky-900 rounded-xl">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <IHeading align="text-center">What can we do for you?</IHeading>
          <IParagraph align="text-center">
            At Easesol, we help you with your cloud transformation by
            implementing cloud solutions that best suit your needs. Our aim is
            to help businesses set up and manage their cloud without the
            complexity and cost of hiring their own internal IT engineer staff.
          </IParagraph>
          <ILine />
        </div>
        <div className="flex flex-wrap mt-12">
          {allHomeServices.map((service: any, index: number) => {
            const { frontmatter, slug, excerpt } = service
            const { title, iconName } = frontmatter
            const icon = Icons[iconName]
            return (
              <>
                <div
                  className="flex flex-col items-center p-4 text-center md:w-1/3"
                  data-index={index}
                >
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full bg-secondary-100 text-secondary-500" data-aos="fade-up">
                    {React.createElement(icon, { className: "w-10 h-10" })}
                  </div>
                  <div className="flex-grow">
                    <div className="mb-3" data-aos="fade-up">
                      <IHeading size="three">{title}</IHeading>
                    </div>
                    <div data-aos="fade-up">
                      <IParagraph size="md">{excerpt}</IParagraph>
                    </div>
                    <Link
                      to={slug}
                      className="group inline-flex items-center justify-center mx-auto mt-3 text-lg text-red-600 dark:text-red-300 gap-x-2"
                      data-aos="fade-up"
                    >
                      <p className="duration-300 group-hover:mr-3">Learn More</p>
                      <ArrowForwardIcon className="text-red-600 dark:text-red-300" />
                    </Link>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Col3ServicesContainer
