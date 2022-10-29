import * as React from "react"
import { Link } from "gatsby"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import OurProcess from "@/components/OurProcess"
import PageIntro from "@/components/PageIntro"
import PageHeading from "@/components/PageHeading"
import ISection from "@/components/ISection"
import Icons, { IArrowRight } from "@/components/Icons"
import { useService } from "@/hooks/use-services"
import IParagraph from "@/components/IParagraph"
import IHeading from "@/components/IHeading"
import CallToActionMini from "@/components/CallToActionMini"
import './styles.css'

const ServicePrimeSection = () => {

  const { allPrimeServices } = useService()

  return (
    <section className="w-full body-font">
      <div className="container flex flex-wrap mx-auto">
        <div className="flex flex-wrap -m-4" data-aos="fade-up">
          {allPrimeServices.map((service: any, index: number) => {
            const { frontmatter, slug, excerpt } = service
            const { title, iconName } = frontmatter
            const icon = Icons[iconName]
            return (
              <>
                <Link to={`/` + slug} className="relative group p-4 lg:w-1/2 md:w-full" data-index={index}>
                  <div className="flex flex-col content-center p-4 md:p-8 border-2 border-gray-200 border-opacity-50 rounded-0 sm:flex-row h-full duration-200 hover:shadow-xl hover:-translate-y-6">
                    <div className="inline-flex mx-auto items-center justify-center flex-shrink-0 w-16 h-16 mb-4 rounded-full sm:mr-8 sm:mb-0 bg-primary-700 text-primary-200 border-4 border-primary-100 shadow-lg">
                      {icon &&
                        React.createElement(icon, {
                          className: "w-10 h-10",
                        })}
                    </div>
                    <div className="flex-grow">
                      <IHeading size="three" align="text-center md:text-left">{title}</IHeading>
                      <IParagraph>{excerpt}</IParagraph>
                      <Link
                        className="inline-flex items-center mt-3 text-secondary-600 dark:text-secondary-300"
                        to={`/` + slug}
                      >
                        Learn More
                        <IArrowRight className="w-4 h-4 ml-2 dark:text-secondary-300" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const ServiceList = () => {

  const { allServices } = useService()

  return (
    <ISection
      title="Our Services"
      description="At Easesol, we help you with your cloud transformation by implementing cloud solutions that best suit your needs. Our aim is to help businesses set up and manage their cloud without the complexity and cost of hiring their own internal IT engineer staff."
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 pt-5 pb-10">
        {allServices.map((service: any, index: number) => {
          const { frontmatter, slug, excerpt } = service
          const { title, iconName, color } = frontmatter
          const icon = Icons[iconName]
          return (
            <div className={`group flex flex-col-reverse md:${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-x-8 gap-y-0 items-center`} data-aos="fade-up">
              <div className="flex-grow mt-3 md:mt-6 text-center sm:text-left sm:mt-0">
                <IHeading size="three" align={`${index % 2 === 1 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>{title}</IHeading>
                <IParagraph align={`${index % 2 === 1 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>{excerpt}</IParagraph>
                <div className={`${index % 2 === 1 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                  <Link
                    className={`inline-flex items-center mt-3 text-secondary-500 dark:text-secondary-300`}
                    to={`/` + slug}
                  >
                    Learn More
                    <IArrowRight className="w-4 h-4 ml-2 duration-200 group-hover:ml-3 group-hover:duration-200" />
                  </Link>
                </div>
              </div>
              <div className={`inline-flex items-center justify-center flex-shrink-0 w-20 md:w-32 h-20 md:h-32 rounded-2xl bg-${color}-500 text-primary-100`}>
                {
                  icon && React.createElement(icon, { className: "w-10 h-10 sm:w-16 sm:h-16 duration-200 group-hover:scale-125", })
                }
              </div>
            </div>
          )
        })}
      </div>
    </ISection>
  )
}

const ServiceIndexPage = () => {

  return (
    <Layout>
      <Seo title="Services" />
      <div data-aos="fade-up">
        <PageHeading
          title="What we do"
          description="We create digital products that solve real-life problems."
        ></PageHeading>
      </div>
      <div data-aos="fade-up">
        <PageIntro>
          Whether you are an IT expert in need of a partner, a corporate
          stakeholder looking to innovate, or an entrepreneur with the next big
          idea, you have come to the right place.
        </PageIntro>
      </div>
      <ServicePrimeSection></ServicePrimeSection>
      <ServiceList></ServiceList>
      <OurProcess></OurProcess>
      <CallToActionMini
        redirectTo="/our-work"
        title="Work"
        description="Let's create great things together"
      ></CallToActionMini>
    </Layout>
  )
}

export default ServiceIndexPage
