import * as React from "react"
import ILine from "@/components/ILine"
import StrategyIcon from "../../images/our-process/Strategy.svg"
import DesignIcon from "../../images/our-process/Design.svg"
import EngineeringIcon from "../../images/our-process/Engineering.svg"
import GrowthIcon from "../../images/our-process/Growth.svg"
import IParagraph from "../IParagraph"
import IHeading from "../IHeading"

const AreasOfExpertise = () => {

  const data = [
    {
      imgSrc: StrategyIcon,
      content: 'Strategy'
    },
    {
      imgSrc: DesignIcon,
      content: 'Design'
    },
    {
      imgSrc: EngineeringIcon,
      content: 'Engineering'
    },
    {
      imgSrc: GrowthIcon,
      content: 'Growth'
    },
  ]

  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="mb-2" data-aos="fade-up">
          <IHeading size="subTitle">Areas of expertise</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            Building a product from the ground up or enhancing an existing system?
            These are the areas of expertise in which our teams deliver.
          </IParagraph>
        </div>
        <ILine align="left" />
        <div className="flex justify-between flex-col md:flex-row gap-y-5 gap-x-5 mt-14" data-aos="fade-up">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col justify-center items-center gap-y-4 w-full md:w-56 h-56 bg-gray-300 dark:bg-primary-900 rounded-lg md:rounded-full" key={index}>
                  <img src={item.imgSrc} />
                  <span className="text-2xl font-extrabold text-primary-700 dark:text-primary-300">
                    {item.content}
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default AreasOfExpertise
