import * as React from "react"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"

import LeadingByExample from "@/components/OurProcess/leading-by-example"
import VisionToShipping from "@/components/OurProcess/vision-to-shipping"
import AgileBuzzword from "@/components/OurProcess/agile-buzzword"
import AreasOfExpertise from "@/components/OurProcess/areas-of-expertise"
import WorkFlow from "@/components/OurProcess/work-flow"
import CallToActionMini from "@/components/CallToActionMini"

const OurProcessPage = () => {
  return (
    <Layout>
      <Seo title="Our Process" />
      <div data-aos="fade-up">
        <PageHeading
          title="Our Process"
          description="How we define, build, and scale industry-shaping products and services."
        />
      </div>
      <LeadingByExample />
      <VisionToShipping />
      <AgileBuzzword />
      <AreasOfExpertise />
      <WorkFlow />
      <CallToActionMini
        redirectTo="/hire-us"
        title="Hire Us"
        description="Want us to work for you?"
      ></CallToActionMini>
    </Layout>
  )
}

export default OurProcessPage
