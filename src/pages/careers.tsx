import * as React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import JobList from "@/components/JobList"
import CallToActionMini from "@/components/CallToActionMini"
import ISection from "@/components/ISection"
import IHeading from "@/components/IHeading"
import IParagraph from "@/components/IParagraph"

const CareersPage = () => {

  const data = [
    {
      title: 'Enjoy your work',
      content: 'Do what moves you. Everybody loves to be part of something special. And work is easier when it`s fun.'
    },
    {
      title: 'Collaborate',
      content: 'There`s no such thing as someone`s else`s job. The best work is done together.'
    },
    {
      title: 'Get to the point',
      content: 'Honesty is the key. Speak your mind. It`s better to be honest than sugarcoat it.'
    },
    {
      title: 'Be a good person',
      content: 'You like people. They like you, too. In the end, that`s all that matters.'
    },
  ]

  return (
    <Layout>
      <Seo title="Careers" />
      <div data-aos="fade-up">
        <PageHeading
          title="Careers"
          description="Come and join a team of highly skilled professionals who appreciate cloud, quality code and a friendly work atmosphere."
        />
      </div>

      <section className="w-full my-16">
        <div className="container mx-auto">
          <div className="flex flex-col justify-left">
            <div data-aos="fade-up">
              <IHeading>Who are we?</IHeading>
            </div>
            <div className="xl:w-2/4 lg:w-3/4" data-aos="fade-up">
              <IParagraph>
                Easesol aims to transform how businesses use the cloud by
                simplifying the technology and providing an easy path to move
                into the cloud.
              </IParagraph>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-16">
        <div className="container mx-auto">
          <div className="w-full">
            <div>
              <div data-aos="fade-up">
                <IHeading>Who are you?</IHeading>
              </div>
              <div className="xl:w-2/4 lg:w-3/4" data-aos="fade-up">
                <IParagraph>
                  You are intelligent, motivated and hard-working. You care
                  about engineering excellence, user interface design and want
                  to build technology that helps people solve real-world
                  problems.
                </IParagraph>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 py-10 -mx-1 overflow-hidden">
              {
                data.map((item: any, index: number) => {
                  return (
                    <div className="group relative w-full px-6 my-6 overflow-hidden" key={index} data-aos="fade-up">
                      <IHeading size="three">
                        {item.title}
                      </IHeading>
                      <IParagraph>
                        {item.content}
                      </IParagraph>
                      <div className="absolute top-0 bottom-0 left-0 w-3 bg-primary-200 dark:bg-primary-700 duration-300 group-hover:w-full" style={{ zIndex: '-1' }}></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <div className="-mb-10">
        <ISection
          title="Open Positions"
          description="We`re always looking for great talent. If you know what you`re doing and love doing it, check out our open positions and apply today!"
        >
          <div className="flex flex-col -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0" data-aos="fade-up">
            <JobList></JobList>
          </div>
        </ISection>
      </div>
      <CallToActionMini
        redirectTo="/our-work"
        title="Work"
        description="Let's create great things together"
      ></CallToActionMini>
    </Layout>
  )
}

export default CareersPage
