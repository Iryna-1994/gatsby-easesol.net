import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import IHeading from "../IHeading"
import ILine from "../ILine"
import './styles.css'

const TechStackContainer = ({ }) => {

  return (
    <section className="py-16 mt-10 mb-24 bg-primary-200 dark:bg-primary-600 mx-4 md:mx-5 rounded-xl">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <IHeading align="text-center">We are passionate about the technologies we choose</IHeading>
        </div>
        <ILine align="center" />
        <div className="flex justify-evenly gap-2 items-center space-y-2.5 pt-8 pb-4 mt-12" data-aos="fade-up">
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/amazon_aws-ar21.svg"
              className="black-stack-icon w-26 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-amazon.svg"
              className="white-stack-iconw-26 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/microsoft_azure-ar21.svg"
              className="black-stack-icon w-26 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Microsoft Azure Cloud services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-azure.svg"
              className="white-stack-iconw-26 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/google_cloud-ar21.svg"
              className="black-stack-icon w-26 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Google Cloud services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-cloud.svg"
              className="white-stack-iconw-26 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
        </div>
        <div className="flex justify-around flex-wrap md:flex-nowrap md:justify-evenly gap-4 items-center space-y-2.5 pt-4 pb-8" data-aos="fade-up">
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/kubernetes-stacked-color.svg"
              className="black-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Digital transformation using Kubernetes services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-kubernetes.svg"
              className="white-stack-iconw-20 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/docker-official.svg"
              className="black-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Digital transformation using Docker and Kubernetes services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-docker.svg"
              className="white-stack-iconw-20 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item w-26">
            <StaticImage
              src="../../images/techs-icons/Terraform_VerticalLogo_Color_RGB.svg"
              className="black-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Infrastructure as Code using Terraform services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-terraform.svg"
              className="white-stack-iconw-20 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/prometheus-stacked-color.svg"
              className="black-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Infrastructure and Application monitoring using Prometheus services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-prometheus.svg"
              className="white-stack-iconw-20 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
          <div className="techstack-icon-box group item">
            <StaticImage
              src="../../images/techs-icons/Grafana_logo.svg"
              className="black-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 block dark:hidden"
              placeholder="blurred"
              alt="Glance at Infrastructure and Application monitoring using Grafana services with Easesol"
            />
            <StaticImage
              src="../../images/techs-icons/light-color/white-grafana.svg"
              className="white-stack-icon w-20 pointer-events-none duration-200 group-hover:scale-125 hidden dark:block"
              placeholder="blurred"
              alt="AWS Cloud services with Easesol"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackContainer
