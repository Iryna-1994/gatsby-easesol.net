import * as React from "react"
import { Link } from "gatsby"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <div data-aos="fade-up">
      <PageHeading
        title="Contact Us"
        description="How can we help?"
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
    <section className="w-full my-36">
      <div className="container flex flex-wrap mx-auto my-16">
        <div className="flex flex-wrap -m-4" data-aos="fade-up">
          <div className="p-4 lg:w-1/2 md:w-full">
            <Link
              to="/careers"
              className="flex flex-col p-8 bg-yellow-500 border-2 border-yellow-500 border-opacity-50 rounded-sm shadow sm:flex-row"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 text-yellow-500 bg-yellow-100 rounded-full sm:mr-8 sm:mb-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow text-white">
                <h2 className="mb-3 text-xl font-medium title-font">Join us</h2>
                <p className="text-base leading-relaxed">
                  We are always eager to meet fresh talent, so check out our
                  open positions.
                </p>
              </div>
            </Link>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <Link
              to="/hire-us"
              className="flex flex-col p-8 bg-yellow-500 border-2 border-yellow-500 border-opacity-50 rounded-sm shadow sm:flex-row"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 text-yellow-500 bg-yellow-100 rounded-full sm:mr-8 sm:mb-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow text-white">
                <h2 className="mb-3 text-xl font-medium title-font">Hire Us</h2>
                <p className="text-base leading-relaxed">
                  Easesol aims to transform how businesses use the cloud by
                  simplifying the technology.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto my-16" data-aos="fade-up">
        <span className="text-3xl font-semibold leading-relaxed md:text-4xl lg:text-5xl text-secondary-600">
          OR
        </span>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto my-16" data-aos="fade-up">
        <div className="text-2xl text-primary-700 dark:text-primary-300 font-semibold leading-relaxed flex-inline md:text-3xl lg:text-4xl">
          For everything else&nbsp;
          <Link
            className="font-bold flex-inline text-secondary-600"
            to="mailto: hello@easesol.net"
          >
            hello@easesol.net
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
