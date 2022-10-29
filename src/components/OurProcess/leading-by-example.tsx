import * as React from "react"
import ILine from "@/components/ILine"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

const LeadingByExample = () => {

  return (
    <section className="mt-10 md:mt-20">
      <div className="container mx-auto">
        <div className="mb-2" data-aos="fade-up">
          <IHeading size="subTitle">Leading by example</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            We walk our clients through the entire process of creating impactful digital experiences.
            This kind of tight-knit collaboration results in products that grow their business and excite their customers.
          </IParagraph>
        </div>
        <ILine align="left" />
        <div className="flex flex-col md:flex-row justify-center mt-20" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-x-3.5 mt-10 z-10 mb-5 md:mb-0">
            <div className="w-64 md:w-56 mx-auto md:mx-0 lg:w-64 xl:max-w-xs text-right">
              <p className="text-lg font-semibold text-center md:text-right dark:text-primary-100">Clients</p>
              <p className="text-center md:text-right dark:text-primary-300">
                Our client`s depth of industry know-how, customer knowledge, and business vision are indispensable for building the right thing.
              </p>
            </div>
            <span className="w-20 h-px bg-primary-700 dark:bg-primary-300 mt-12 md:mt-3.5 rotate-90 md:rotate-0"></span>
          </div>
          <div className="circle-box flex items-center md:items-start flex-col md:flex-row mx-0 md:-mx-16">
            <div className="w-40 h-40 rounded-full bg-gray-300 mr-0 md:-mr-16"></div>
            <div className="w-40 h-40 rounded-full bg-red-400 -mt-10 md:mt-20 opacity-40"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-x-3.5 mt-5 md:mt-28 z-10">
            <span className="w-20 h-px bg-primary-700 dark:bg-primary-300 mt-0 md:mt-3.5 rotate-90 md:rotate-0 mb-10 md:mb-0"></span>
            <div className="w-64 md:w-56 mx-auto md:mx-0 lg:w-64 xl:max-w-xs text-left">
              <p className="text-lg font-semibold text-center md:text-left dark:text-primary-100">Easesol</p>
              <p className="text-center md:text-left dark:text-primary-300">
                We bring a diverse range of skills for building technology.
                Our guidance, experience, and flawless focus are ingrained in every product we`ve built so far.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadingByExample
