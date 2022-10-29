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
import img1 from "../../images/vectors/undraw_Maintenance_re_59vn.svg"
import img2 from "../../images/vectors/undraw_Thought_process_re_om58.svg"
import img3 from "../../images/vectors/undraw_Development_re_g5hq.svg"
import img4 from "../../images/vectors/undraw_connected_world_wuay.svg"
import img5 from "../../images/vectors/undraw_Collaborators_re_hont.svg"
import img6 from "../../images/vectors/undraw_server_cluster_jwwq.svg"

const MonitorAndObservabilityPage = ({ data: { mdx: pageData } }: any) => {
  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter

  const data = [
    {
      title: 'Resource Provisioning',
      content: 'IAC - Terraform, using OPA (Open Policy Agent), enforce policies on Cloud resources and integrate OPA with terraform.',
      imgSrc: img1
    },
    {
      title: 'Application Performance',
      content: 'Measuring application performance gives you code execution visibility and code exception diagnostics.',
      imgSrc: img2
    },
    {
      title: 'Logging and Analytics',
      content: 'The root cause analysis for issues and easy to diagnose the problems and review logs.',
      imgSrc: img3
    },
    {
      title: 'Metrics Collection',
      content: 'Cloud services metrics for better reports. Monitor RAM, DISK, Network and other resources. Customer Prometheus exporter to support other requirements.',
      imgSrc: img4
    },
    {
      title: 'Dashbaord and Alerts',
      content: 'Grafana dashboards for clear visibility, and alerting for the support team.',
      imgSrc: img5
    },
    {
      title: 'For Compliance and Status',
      content: 'Policy Check automation with PacBot and StatusPage reporting and dashboard.',
      imgSrc: img6
    },
  ]

  const ServiceDetail = () => (
    <section className="w-full py-10 lg:pt-20 pb-0 lg:pb-20">
      <div className="container pb-8 mx-auto">
        {
          data.map((item: any, index: number) => {
            return (
              <>
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10`} key={index}>
                  <div className="w-full lg:w-1/2">
                    <div data-aos="fade-up">
                      <IHeading size="two">
                        {item.title}
                      </IHeading>
                    </div>
                    <div data-aos="fade-up">
                      <IParagraph>
                        {item.content}
                      </IParagraph>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                    />
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </section>
  )
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

export default MonitorAndObservabilityPage

export const query = graphql`
  query MonitorAndObservabilityPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/monitoring-and-observability)/" }
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
