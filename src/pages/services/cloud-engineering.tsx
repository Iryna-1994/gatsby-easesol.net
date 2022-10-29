import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"
import IHeading from "@/components/IHeading"
import IParagraph from "@/components/IParagraph"
import { StaticImage } from "gatsby-plugin-image"
import OurProcess from "@/components/OurProcess"
import CallToActionMini from "@/components/CallToActionMini"

const CloudEngineeringPage = ({ data: { mdx: pageData } }: any) => {
  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter
  const CloudInfraProvisionSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Cloud Infrastructure Provision</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            With Easesol, leverage cloud security best practices at the
            infrastructure Level. The entire hardware infrastructure is
            controlled, secured and hardened. Our expert architects are
            responsible for designing, maintaining and troubleshooting the
            client's infrastructure, cloud services, network, and infrastructure
            security. We propose a smart provisioning approach of infrastructure
            based on security and DevOps best practices.
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
                  Our expert architects will supervise your entire cloud
                  computing ecosystem.
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
                  From designing to maintaining the clients infrastructure, we
                  follow the security best practices throughout the project.
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
                  Scale as you grow with a subscription-based, pay-as-you-go
                  business model.
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          alt={title}
          src="../../images/vectors/undraw_Maintenance_re_59vn.svg"
        />
      </div>
    </div>
  )
  const CloudAutomationSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          src="../../images/vectors/undraw_Thought_process_re_om58.svg"
          alt={title}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="align-middle">
          <div data-aos="fade-up">
            <IHeading size="two">Cloud Automation</IHeading>
          </div>
          <div data-aos="fade-up">
            <IParagraph>
              At Easesol, we automate your entire cloud infrastructure through our
              end-to-end cloud automation capabilities, leading you to harness the
              full business value of automation. Enhance your cloud capabilities
              with effective resource utilization.
            </IParagraph>
          </div>
          <ul className="mt-6 list-none" data-aos="fade-up">
            <li className="py-1 ">
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
                    Improved resource utilization, IT operations, and workload
                    distribution.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    Eliminate manual effort to manage cloud computing workloads
                    and services.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    Our architects and engineers automate those frequent,
                    time-taking, and error-prone tasks that can help you save
                    time and money.
                  </IParagraph>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  const ApplicationDevelopmentSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading size="two">Application Development</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            CEasesol caters the broad spectrum of cloud development capabilities,
            assisting our clients create a holistic strategy, migrate their
            applications and workloads to a virtualized environment.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1 ">
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
                  At Easesol, we got the best Cloud app development teams using
                  DevOps practices and tools.
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1 ">
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
                  Stay rest assured that your data will be protected by the
                  service providers.
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1 ">
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
                  Cloud-based application development can be deployed as a
                  gradual process meaning lower costs for your business.
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          alt={title}
          src="../../images/vectors/undraw_Development_re_g5hq.svg"
        ></StaticImage>
      </div>
    </div>
  )

  const MigrationSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          alt={title}
          src="../../images/vectors/undraw_connected_world_wuay.svg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="align-middle">
          <div data-aos="fade-up">
            <IHeading>Migration with Easesol</IHeading>
          </div>
          <div data-aos="fade-up">
            <IParagraph>
              Our cloud migration services help customers reduce physical resource
              requirements, expenditures and increase productivity for your
              organization. With proven methodologies and approaches, our services
              will help you with hassle-free transformation from on premise to
              cloud migration and build suitable solutions for your business.
            </IParagraph>
          </div>
          <ul className="mt-6 list-none" data-aos="fade-up">
            <li className="py-1 ">
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
                    Initiate Cloud adoption in the most efficient way to reduce
                    downtime and improve economy of scale.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    Leverage an in-depth analysis and review of the company’s
                    objective, requirement focused assessment.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    Get a roadmap to support, rebuild and re-architect
                    applications.
                  </IParagraph>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  const DevOpsSection = () => (
    <div className="flex flex-col lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IHeading>
            DevOps and Continuous Engineering with ease at Easesol
          </IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            At Easesol, we provide agile DevOps and Continuous Engineering
            services that shorten development cycles, increase deployment
            frequencies, and deliver robust releases. This improves your
            application’s time to market, visibility, and growth.
          </IParagraph>
        </div>
        <ul className="mt-6 list-none" data-aos="fade-up">
          <li className="py-1 ">
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
                  Minimize the development cycles and increase deployment
                  frequencies.
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1 ">
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
                  Leverage maximum time to grow your application.
                </IParagraph>
              </div>
            </div>
          </li>
          <li className="py-1 ">
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
                  Automate your software delivery processes and stay
                  competitive.
                </IParagraph>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          alt={title}
          src="../../images/vectors/undraw_Collaborators_re_hont.svg"
        />
      </div>
    </div>
  )
  const HighAvailableSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-10">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage
          alt={title}
          src="../../images/vectors/undraw_server_cluster_jwwq.svg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="align-middle">
          <div data-aos="fade-up">
            <IHeading size="two">
              Your Application Remains Highly Available
            </IHeading>
          </div>
          <div data-aos="fade-up">
            <IParagraph>
              It’s inevitable that at some point downtime will happen, therefore
              to reduce the risk of unavailability, Easesol Application High
              Availability (HA) service gears your business and keeps systems up
              99.9999% of the time so that failure simply isn’t an option. By
              following Site Reliability Engineering (SRE) best practices, we
              bridge the gap between development and operations teams.
            </IParagraph>
          </div>
          <ul className="mt-6 list-none" data-aos="fade-up">
            <li className="py-1 ">
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
                    Our HA Service ensures that your website, application or
                    server continues to function through different demand loads
                    and failures.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    Our service complements both DevOps and ITIL methodologies
                    to ensure shared visibility, communication and collaboration
                    among teams.
                  </IParagraph>
                </div>
              </div>
            </li>
            <li className="py-1 ">
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
                    We eliminate toil by measuring it and creating automation to
                    avoid manual, repetitive tasks so resources can focus on
                    high-value work.
                  </IParagraph>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  const ServiceDetail = () => (
    <section className="w-full">
      <div className="container mx-auto">
        <CloudInfraProvisionSection></CloudInfraProvisionSection>
        <CloudAutomationSection></CloudAutomationSection>
        <ApplicationDevelopmentSection></ApplicationDevelopmentSection>
        <MigrationSection></MigrationSection>
        <DevOpsSection></DevOpsSection>
        <HighAvailableSection></HighAvailableSection>
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

export default CloudEngineeringPage

export const query = graphql`
  query CloudEngineeringPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/cloud-engineering)/" }
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
