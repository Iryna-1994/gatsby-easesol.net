import * as React from "react"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import AboutUsContainer from "@/components/AboutUsContainer"
import ILine from "@/components/ILine"
import CallToActionMini from "@/components/CallToActionMini"

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <div data-aos="fade-up">
      <PageHeading
        title="About Us"
        description="Easesol aims to transform how businesses use the cloud by simplifying the technology and providing an easy path to move into the cloud."
      />
    </div>
    <div className="-mt-10">
      <ILine align="center" />
    </div>

    <section className="w-full my-20">
      <div className="container mx-auto">
        <AboutUsContainer />
      </div>
    </section>
    <CallToActionMini
      title="What we do?"
      description="Take the first step by transforming your digital foothold using our Containers with Kubernetes service!"
    />
  </Layout>
)

export default AboutPage
