import React from "react"
import { Link } from "gatsby"
import IHeading from "../IHeading"
import Typed from "react-typed"
import './styles.css'
import { StaticImage } from "gatsby-plugin-image"

const HeroSection = ({ }) => {

  const textLines = [`cloud consulting`, `cloud solution`, `cloud development`]
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="py-8 text-center md:py-10" data-aos="fade-up">
          <IHeading size="one">
            We're an independent<br></br>
            <Typed
              strings={textLines}
              startDelay={300}
              typeSpeed={50}
              backSpeed={100}
              backDelay={6000}
              loop={true}
              className="bg-gradient-to-br from-pink-600 to-red-600 bg-clip-text"
            >
              <Link
                to="/about"
                className="px-1 text-transparent hover:underline "
              ></Link>
            </Typed>
            <br></br>
            agency.
          </IHeading>
          <div className="flex flex-col mt-12 text-xl leading-relaxed justify-left">
            <p className="dark:text-primary-300">
              <Link
                className="mt-2 hover:underline text-secondary-600 dark:text-secondary-300"
                to="/about"
              >
                50 of us in 5 locations;
              </Link>
              &nbsp;cloud solutions for businesses, and cloud enablers for
              startups.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-6 md:gap-y-0 py-8 md:py-10 fade-in fade-in-second md:flex-row md:gap-x-5 lg:gap-x-16 sm:gap-y-16" data-aos="fade-up">
          <Link to="/services/containers-and-kubernetes">
            <div className="flex flex-nowrap items-center max-w-md p-6 text-xl tracking-wide transition-all border rounded-sm cursor-pointer md:flex group hover:border-secondary-600 dark:hover:border-secondary-300 font-display hover:-translate-y-2 hover:shadow-lg">
              <span>
                <p className="dark:text-primary-300">
                  Want to{" "}
                  <strong className="group-hover:text-secondary-600 dark:group-hover:text-secondary-300">
                    containerize
                  </strong>{" "}
                  your application?
                </p>
              </span>{" "}
              <span className="text-6xl pr-1.5 mt-3">📱</span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="40px"
                width="40px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/services/your-startup-partner">
            <div className="flex flex-nowrap items-center max-w-md p-6 text-xl tracking-wide transition-all border rounded-sm cursor-pointer md:flex group hover:border-secondary-600 dark:hover:border-secondary-300 font-display hover:-translate-y-2 hover:shadow-lg">
              <span>
                <p className="dark:text-primary-300">
                  Need a partner to help launch your{" "}
                  <strong className="group-hover:text-secondary-600 dark:group-hover:text-secondary-300">
                    startup
                  </strong>
                  ?
                </p>
              </span>{" "}
              <span className="text-6xl pr-1.5 mt-3"> 🚀</span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="40px"
                width="40px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="absolute flex justify-center items-center top-16 left-10 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-bounce">
          <StaticImage
            src="../../images/home/amazon-icon.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="Amazon"
          />
        </div>
        <div className="absolute flex justify-center items-center top-5 -right-5 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-pulse">
          <StaticImage
            src="../../images/home/azure.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="azure"
          />
        </div>
        <div className="absolute flex justify-center items-center top-48 left-28 2xl:left-48 w-20 h-20 bg-white dark:bg-primary-500 p-2 rounded-md shadow-xl animate-bounce">
          <StaticImage
            src="../../images/home/docker.svg"
            className="w-full pointer-events-none mt-5"
            placeholder="blurred"
            alt="docker"
          />
        </div>
        <div className="absolute flex justify-center items-center top-96 left-0 xl:left-28 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-pulse">
          <StaticImage
            src="../../images/home/google-cloud.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="google-cloud"
          />
        </div>
        <div className="absolute flex justify-center items-center top-96 2xl:top-3/4 -right-8 2xl:right-8 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-bounce">
          <StaticImage
            src="../../images/home/grafana.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="grafana"
          />
        </div>
        <div className="absolute flex justify-center items-center top-64 2xl:top-80 right-8 xl:right-48 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-pulse">
          <StaticImage
            src="../../images/home/kubernets.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="kubernets"
          />
        </div>
        <div className="absolute flex justify-center items-center top-40 2xl:top-40 right-20 2xl:right-28 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-bounce">
          <StaticImage
            src="../../images/home/prometheus.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="prometheus"
          />
        </div>
        <div className="absolute flex justify-center items-center top-56 2xl:top-3/4 -left-8 w-20 h-20 bg-white dark:bg-primary-500 p-4 rounded-md shadow-xl animate-pulse">
          <StaticImage
            src="../../images/home/terraform-enterprise.svg"
            className="w-full pointer-events-none"
            placeholder="blurred"
            alt="terraform"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
