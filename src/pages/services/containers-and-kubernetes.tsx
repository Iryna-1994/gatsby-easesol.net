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

const ContainerAndKubernetesPage = ({ data: { mdx: pageData } }: any) => {
  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter
  const InterrogationSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">
            Interrogate application, and business needs
          </IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Collected data will be used to interrogate the current application,
            and understand the current business needs. These will include an
            assessment of containerization within the application itself,
            assessing the current capacity of hardware hosted in production, and
            future direction for scaling both hardware and software Kubernetes
            capabilities.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Collected data will be used to interrogate the current
                  application
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Assess the current capacity of hardware hosted in production
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Future direction for scaling both hardware and software
                  capabilities
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_searching_p5ux.svg"
          alt={title}
        ></StaticImage>
      </div>
    </div>
  )
  const BuildContainerSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_Ride_till_I_can_no_more_44wq.svg"
          alt={title}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Load your application into containers</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Containers allow you to package and deploy your web application
            quickly anywhere. A container is a portable model that packages up all
            the resources that your applications needs to run: code, runtime,
            system tools and libraries, system packages and so on.{" "}
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Containers allow you to package and deploy your application
                  quickly anywhere
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Containers offer a secure and reliable way of deploying
                  applications
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  They are increasingly being used in the tech industry today
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
  const InfrastructureProvisionSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Provision your containers infrastructure</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Whether you are creating a greenfield cluster or migrating from an
            existing one. We'll eliminate the guesswork and work with you to plan
            your infrastructure. Provision your infrastructure for Kubernetes on
            your favorite clouds such as AWS, Google Cloud, and Azure. Our
            provisioning solution conforms to the standards established by
            Kubernetes, Docker, and Openshift.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  We'll eliminate the guesswork and work with you to plan your
                  infrastructure
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Provision your infrastructure for Kubernetes on your favorite
                  clouds such as AWS, Google Cloud, and Azure
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  And our provisioning solution conforms to the standards
                  established by Kubernetes, Docker.
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_under_construction_46pa.svg"
          alt={title}
        />
      </div>
    </div>
  )
  const DeployContainerSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_Container_ship_ok1c.svg"
          alt={title}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Ship your containers to the world</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Deploy your containerized applications to Kubernetes in seconds.
            Easesol ensures that your containers are running exactly where you
            want them to be. Automated deployment and management system for
            containers to enable GitOps and enforce CI/CD processes.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Builds on the latest container technology so you can focus
                  more on building your app and less on building infrastructure
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Deploy new applications based on microservices or optimize
                  existing ones
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  And enables GitOps and enforce CI/CD processes
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
  const ObservabilitySection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Observe and Monitor</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Whether you're deploying new applications based on microservices or
            optimizing existing ones, observing and monitoring the end-to-end
            journey of your application is key to taking action proactively by fix
            any performance leaks. With observe and monitor you are able to
            proactively mitigate performance issues in microservice-based,
            cloud-native applications. observe allows you to monitor metrics in an
            application deployed to Kubernetes.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Mitigate performance issues in microservice based, cloud
                  native applications
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <div>
                <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-primary-500 bg-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <IParagraph>
                  Monitor an application deployed to Kubernetes
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_monitor_iqpq.svg"
          alt={title}
        />
      </div>
    </div>
  )
  const ServiceDetail = () => {
    return (
      <div className="w-full">
        <div className="container mx-auto">
          <InterrogationSection></InterrogationSection>
          <BuildContainerSection></BuildContainerSection>
          <InfrastructureProvisionSection></InfrastructureProvisionSection>
          <DeployContainerSection></DeployContainerSection>
          <ObservabilitySection></ObservabilitySection>
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

export default ContainerAndKubernetesPage

export const query = graphql`
  query ContainerAndKubernetesPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/containers-and-kubernetes)/" }
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
