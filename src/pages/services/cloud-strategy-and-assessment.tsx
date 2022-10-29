import * as React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"
import OurProcess from "@/components/OurProcess"
import CallToActionMini from "@/components/CallToActionMini"
import IHeading from "@/components/IHeading"
import IParagraph from "@/components/IParagraph"
import { StaticImage } from "gatsby-plugin-image"

const CloudStrategyAndAssessmentPage = ({ data: { mdx: pageData } }: any) => {
  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter
  const AdoptionAndTransformationSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Adoption and Transformation Strategy</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            We build your adoption and transformation strategy using our
            accelerators driven by the data from your technology landscape. <br />
            <br /> Prioritise the migration of applications and develop a roadmap
            which aligns with the business strategy for a digital and data-driven
            organisation
          </IParagraph>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_Select_option_re_u4qn.svg"
          alt={title}
        ></StaticImage>
      </div>
    </div>
  )

  const AssessmentAndOptimization = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_server_status_5pbv.svg"
          alt={title}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Assessment and Optimization</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            We examine your cloud deployment to find areas of improvement and cost
            savings by optimizing reserved instances, unused instances, unused
            waste, and rightsizing to improve architecture and governance. <br />{" "}
            <br /> Our experts will scour your cloud invoices for the most
            impactful cost savings without operational downtime.
          </IParagraph>
        </div>
      </div>
    </div>
  )

  const ApplicationPerformanceSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Application Performance</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            To have confidence in the performance of your cloud application, you
            need more than infrastructure health metrics. <br /> With Easesol,
            understand the performance of your cloud app all the way to the down
            to business transaction and code level and ensure application
            performance pre and post-cloud migration.
          </IParagraph>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_completing_6bhr.svg"
          alt={title}
        ></StaticImage>
      </div>
    </div>
  )

  const ServiceDetail = () => {
    return (
      <div className="w-full">
        <div className="container mx-auto">
          <AdoptionAndTransformationSection></AdoptionAndTransformationSection>
          <AssessmentAndOptimization></AssessmentAndOptimization>
          <ApplicationPerformanceSection></ApplicationPerformanceSection>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Seo title={title + ` | Services`} />
      <div data-aos="fade-up">
        <PageHeading title={title} description={heading}></PageHeading>
      </div>
      <div data-aos="fade-up">
        <PageIntro>{excerpt}</PageIntro>
      </div>
      <ServiceDetail></ServiceDetail>
      <OurProcess></OurProcess>
      <CallToActionMini
        title="Hire Us"
        description="Want us to work for you?"
        redirectTo="/hire-us"
      ></CallToActionMini>
    </Layout>
  )
}

export default CloudStrategyAndAssessmentPage

export const query = graphql`
  query CloudStrategyAndAssessmentPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/cloud-strategy-and-assessment)/" }
    ) {
      excerpt
      frontmatter {
        title
        iconName
        heading
      }
    }
  }
`
