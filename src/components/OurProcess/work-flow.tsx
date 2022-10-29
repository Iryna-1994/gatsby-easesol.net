import * as React from "react"
import IHeading from "../IHeading"
import ILine from "../ILine"
import IParagraph from "../IParagraph"

const WorkFlow = () => {

  const data = [
    {
      title: 'Assess the Requirements and Needs',
      content: 'We start by talking to you about your business goals. We`ll go over what you`re trying to achieve, what kind of users you have, what their pain points are, and how we can help them.'
    },
    {
      title: 'Build the Infrastructure or Application',
      content: 'Next, we`ll build out your infrastructure or application based on our assessment of your requirements. This part of the process will be done with a development team who has extensive experience building applications and infrastructures for companies just like yours.'
    },
    {
      title: 'Ship to the World',
      content: 'Finally, once everything is built out, we`ll deploy it in the cloud and get it ready for use! Our goal is always to be able to show o  our work right away so that you can see how awesome it is.'
    },
    {
      title: 'Observe the Application and Infrastructure',
      content: 'After it`s been deployed, we will observe how well our application performs in production and make sure that it meets our clients needs.'
    },
    {
      title: 'Cloud Support',
      content: 'If there are any issues with the application or infrastructure, we have a cloud support team that can help us solve them quickly.'
    },
  ]

  return (
    <section className="w-full mt-24">
      <div className="container mx-auto work-flow-container">
        <div className="mb-2" data-aos="fade-up">
          <IHeading size="subTitle">Our Process</IHeading>
        </div>
        <div className="w-full lg:max-w-4xl" data-aos="fade-up">
          <IParagraph>
            We understand that you have a lot of options when it comes to building your application or infrastructure, and
            we want to make sure that you know exactly what you're getting into. That's why we've created this page: to give
            you a rundown of our process, from start to  nish.
          </IParagraph>
        </div>
        <ILine align="left" />
        <div className="work-flow-box w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16 md:gap-10 mx-auto py-16">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="group work-flow-item relative p-16 rounded-xl shadow-xl text-white flex flex-col justify-center items-center text-center text-3xl" data-aos="fade-up">
                  {item.title}
                  <div className="absolute flex items-center top-0 left-0 right-0 bottom-0 text-center py-6 px-4 rounded-xl bg-primary-50 dark:bg-primary-200 text-primary-500 dark:text-primary-600 text-base lg:text-lg duration-300 opacity-0 group-hover:opacity-100 shadow-2xl">
                    {item.content}
                  </div>
                  <div className="absolute w-14 h-14 flex justify-center items-center text-center text-3xl bg-primary-700 border-white border-4 rounded-full -top-8 md:-top-5 right-0 md:right-auto mx-auto left-0 md:-left-5">{index + 1}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default WorkFlow
