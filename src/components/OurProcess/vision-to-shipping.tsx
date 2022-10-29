import * as React from "react"
import ILine from "@/components/ILine"
import DiscoverDefineImg from "../../images/our-process/Discover-define.svg"
import DesignBuildImg from "../../images/our-process/Design-build.svg"
import LaunchScaleImg from "../../images/our-process/Launch-scale.svg"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

const VisionToShipping = () => {

  const data = [
    {
      imgSrc: DiscoverDefineImg,
      title: 'Discover & define',
      content: 'Together we dive right into the problem with the goal of uncovering ideas and opportunities. No vision is too big for a simple prototype. Validated ideas ensure we`re on the right path.'
    },
    {
      imgSrc: DesignBuildImg,
      title: 'Design & build',
      content: 'Delightful user experiences meet precise engineering. By continously optimizing and improving the product on real users` feedback, we craft technology that`s rock-solid and simple to use.'
    },
    {
      imgSrc: LaunchScaleImg,
      title: 'Launch & scale',
      content: 'Achieving a product-market-fit is about making the right decisions. Data-driven approach helps us draw insights, refine the product, and utilize the right distribution and promotion strategy.'
    },
  ]

  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="mb-2" data-aos="fade-up">
          <IHeading size="subTitle">From vision to shipping</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Rooted in mutual understanding and continuous feedback, we encourage open communication and collaboration between clients and production teams.
          </IParagraph>
        </div>
        <ILine align="left" />
        <div className="flex justify-between gap-x-5 gap-y-16 flex-wrap lg:flex-nowrap mt-24">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start w-full md:w-auto" key={index}>
                  <img src={item.imgSrc} data-aos="fade-up" />
                  <h3 className="text-3xl md:text-4xl text-primary-700 mt-7 mb-5 dark:text-primary-100" data-aos="fade-up">
                    {item.title}
                  </h3>
                  <p className="w-72 md:w-64 mb-5 text-center md:text-left dark:text-primary-300" data-aos="fade-up">
                    {item.content}
                  </p>
                  <ILine align="left" />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default VisionToShipping
