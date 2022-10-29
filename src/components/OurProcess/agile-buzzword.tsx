import * as React from "react"
import ILine from "@/components/ILine"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

const AgileBuzzword = () => {

  const data = [
    {
      title: 'Fast delivery',
      content: 'Our goal is to release the Minimum Viable Product as soon as possible. There`s no better way to validate an idea than to put it the customer`s hands.'
    },
    {
      title: 'Flexible planning',
      content: 'We account for the fact we can`t predict every scenario. The more we get to know the problem, the better we adapt the time and resources necessary.'
    },
    {
      title: 'Frequent iterations',
      content: 'Instead of working towards one big, feature-packed release, we identify priorities and focus on delivering value in smaller increments.'
    },
    {
      title: 'Collaborative',
      content: 'We want the product to be successful as much as our clients. Insights, expertise and feedback are welcomed and continually exchanged between teams.'
    },
    {
      title: 'User-focused',
      content: 'We make our clients customers a part of the process. Their input is critical to ensure we stay on the right track. Technology should serve people, not the other way around.'
    },
    {
      title: 'Transparent',
      content: 'Being upfront about costs makes a great relationship. Working in Agile, we strive to minimize budget risks, ultimately preventing future hidden expenditures.'
    }
  ]

  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="mb-2" data-aos="fade-up">
          <IHeading size="subTitle">Agile is more than a buzzword</IHeading>
        </div>
        <div data-aos="fade-up">
          <IParagraph>
            We use Agile principles like Scrum or SAFe to drive efficient communication with the entire production team and ensure cohesiveness during all phases of the digital journey.
          </IParagraph>
        </div>
        <ILine align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 mt-24">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="grid-item" data-aos="fade-up" key={index}>
                  <h3 className="text-lg font-bold mb-3 dark:text-primary-100">
                    {item.title}
                  </h3>
                  <p className="w-64 mb-5 dark:text-primary-300">
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

export default AgileBuzzword
