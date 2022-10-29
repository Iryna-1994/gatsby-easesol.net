import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"
import HireUsForm from "@/components/HireUsForm"
import HireUsSlider from "@/components/HireUsSlider"

const HireUsPage = () => {

  return (
    <Layout>
      <Seo title="Hire Us" />
      <div data-aos="fade-up">
        <PageHeading
          title="Hire Us"
          description="Let`s get started, shall we? We need some info about you and your project."
        />
      </div>
      <div data-aos="fade-up">
        <PageIntro>
          <span>
            Easesol aims to transform how businesses use the cloud by simplifying
            the technology and providing an easy path to move into the cloud.
          </span>
        </PageIntro>
      </div>
      <section className="w-full hire-form-section mb-24">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse justify-center items-center xl:flex-row gap-x-5 gap-y-16">
            <div className="w-full xl:w-2/5 2xl:w-1/3 py-10 max-w-xl mx-auto" data-aos="fade-up">
              <HireUsForm></HireUsForm>
            </div>
            <div className="flex items-center justify-center relative w-full xl:w-3/5 2xl:w-2/3 overflow-hidden" data-aos="fade-up">
              <HireUsSlider />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HireUsPage
