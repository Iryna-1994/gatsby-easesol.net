import * as React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import OurWorkBox from "@/components/OurWorkBox"
import OurProcess from "@/components/OurProcess"
import CallToActionMini from "@/components/CallToActionMini"

import { useAllOurWork } from "@/hooks/use-our-work"

const OurWorkPage = () => {
  const { allWorks } = useAllOurWork()
  return (
    <Layout>
      <Seo title="Our Work" />
      <div data-aos="fade-up">
        <PageHeading
          title="Our Work"
          description="We are global provider of cloud computing services for all industries, allowing small and startup businesses to innovate while retaining control. Here are some examples of our work."
        />
      </div>
      <section className="mt-10 body-font mb-28">
        <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 lg:gap-6">
          {allWorks.map((work: any) => {
            const { node } = work
            const { frontmatter, slug } = node
            const { title, color, embeddedImagesLocal } = frontmatter
            const { publicURL } = embeddedImagesLocal[0]
            return (
              <OurWorkBox
                slug={slug}
                title={title}
                imageSrc={publicURL}
                color={color}
              />
            )
          })}
        </div>
      </section>
      <section className="mt-10 body-font"></section>
      <OurProcess />
      <CallToActionMini
        title="What we do?"
        description="Take the first step by transforming your digital foothold using our Containers with Kubernetes service!"
      />
    </Layout>
  )
}

export default OurWorkPage
