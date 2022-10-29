import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import IHeading from "@/components/IHeading"
import PageIntro from "@/components/PageIntro"
import IParagraph from "../../components/IParagraph"
import OurWorkSlider from "../../components/OurWorkSlider"
import OurWorkRelatedCases from "../../components/OurWorkRelatedCases"
import CallToAction from "../../components/CallToAction"
import ISection from "../../components/ISection"
import ISubtitleAndDesc from "../../components/ISubtitleAndDesc"
import Testimonial from "../../components/Testimonial"
import TechStack from "../../components/TechStack"
import OurProcess from "@/components/OurProcess"
import "./styles.css"

const shortcodes = { a: Link, p: IParagraph, ISection, ISubtitleAndDesc } // Provide common components here
const OurWork = ({
  data: {
    mdx: {
      frontmatter: {
        embeddedImagesLocal,
        title,
        pageIntro,
        index,
        color,
        review,
        name,
        type,
        position,
        reviewLink,
        reviewLinkText,
      },
      body
    },
    allMdx: {
      nodes: relatedWorks
    }
  }
}) => {
  return (
    <Layout>
      <Seo title={title}></Seo>
      <section className="w-full">
        <div className="container max-w-screen-xl mx-auto">
          <div className="w-full md:w-4/5 py-8 mx-auto text-center md:py-10" data-aos="fade-up">
            <IHeading size="two">{title}</IHeading>
          </div>
        </div>
      </section>
      <div data-aos="fade-up">
        <PageIntro>
          {pageIntro}
        </PageIntro>
      </div>

      <section className="w-full our-work-detail-page mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 case-study-box lg:grid-cols-2 gap-y-16 md:gap-y-12 lg:gap-y-0 gap-x-16">
            <MDXProvider components={shortcodes}>
              <MDXRenderer localImages={embeddedImagesLocal}>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </section>

      <section className="mt-10"></section>
      <TechStack caseStack={index === 1 ? '1' : index === 2 ? '2' : index === 3 ? '3' : ''} />
      <Testimonial
        review={review}
        name={name}
        type={type}
        position={position}
        reviewLink={reviewLink}
        reviewLinkText={reviewLinkText}
      />
      <OurWorkRelatedCases relatedWorkAr={relatedWorks} />
    </Layout>
  )
}

export default OurWork

export const query = graphql`
query OUR_WORK_BY_ID_QUERY($id: String) {
  mdx(fileAbsolutePath: {regex: "/(our-work)/"}, id: {eq: $id}) {
    id
    excerpt(pruneLength: 200)
    frontmatter {
      title
      pageIntro
      index
      color
      review
      name
      type
      position
      reviewLink
      reviewLinkText
      embeddedImagesLocal {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    slug
    body
  }
  allMdx(
    filter: {id: {ne: $id}, fileAbsolutePath: {regex: "/(our-work)/"}}
    limit: 3
  ) {
    nodes {
      slug
      id
      frontmatter {
        color
        embeddedImagesLocal {
          publicURL
        }
        title
        pageIntro
      }
    }
  }
}

`