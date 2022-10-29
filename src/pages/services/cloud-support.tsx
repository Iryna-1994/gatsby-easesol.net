import * as React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"
import IParagraph from "@/components/IParagraph"
import IHeading from "@/components/IHeading"
import ILine from "@/components/ILine"
import OurProcess from "@/components/OurProcess"
import CallToActionMini from "@/components/CallToActionMini"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import FormatListNumberedRtlOutlinedIcon from '@material-ui/icons/FormatListNumberedRtlOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import SurroundSoundOutlinedIcon from '@material-ui/icons/SurroundSoundOutlined';
import TransformOutlinedIcon from '@material-ui/icons/TransformOutlined';
import './styles.css'


const ReadyToGetStarted = () => {

  const readyItems = [
    {
      icon: <DashboardOutlinedIcon />,
      text: 'Cloud infrastructure management'
    },
    {
      icon: <RecordVoiceOverOutlinedIcon />,
      text: '24x7x365 support'
    },
    {
      icon: <RateReviewOutlinedIcon />,
      text: 'Comprehensive monitoring and testing'
    },
    {
      icon: <SecurityOutlinedIcon />,
      text: 'Security and compliance'
    },
    {
      icon: <CodeOutlinedIcon />,
      text: 'DevOps services'
    },
  ]

  return (
    <section className="w-full my-20">
      <div className="container mx-auto">
        <div className="max-w-5xl" data-aos="fade-up">
          <IParagraph>
            We're cloud support experts specializing in digital transformation, Kubernetes implementation,
            microservice development, cloud migration, and DevOps.
            When you work with us, we will help you identify your current situation, what goals and pain
            points you have with your current systems, and then work with you to develop a custom cloud
            migration plan that will meet your needs.
            We don't just want to give you a one-size-fits-all solution—we want to help you develop a plan
            that's going to put your problems into the past and set you up for long-term success.
          </IParagraph>
        </div>
        <div className="my-16 max-w-5xl mx-auto">
          <div className="flex flex-col gap-y-4" data-aos="fade-up">
            <IHeading align="text-center">Ready to get started?</IHeading>
            <IParagraph align="text-center">
              We have a passion for helping the world's largest enterprises get the most out of their cloud
              technology, with services that include:
            </IParagraph>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4 max-w-6xl shadow-none md:shadow-lg rounded-md overflow-visible md:overflow-hidden mx-auto" data-aos="fade-up">
          {
            readyItems.map((item: any, index: number) => {
              return (
                <div className="group ready-started-box relative flex flex-col items-center bg-white dark:bg-primary-900 gap-y-5 p-5 duraction-300 hover:bg-slate-600 hover:duration-300 hover:rounded-md shadow-xl md:shadow-none rounded-md md:rounded-0" key={index}>
                  {item.icon}
                  <IParagraph size="subHeader" align="text-center">{item.text}</IParagraph>
                  <div className="divider absolute top-0 bottom-0 -right-0.5 my-auto w-1 h-16 bg-slate-400 z-10 hidden md:block"></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

const WhyUsStep = () => {

  const whyUsItems = [
    'Implementing best practices',
    'Tailored Solutions',
    'Reliable Services',
  ]

  return (
    <section className="w-full mt-28">
      <div className="container flex flex-col items-center mx-auto">
        <div data-aos="fade-up">
          <IHeading align="text-center">Why Us</IHeading>
        </div>
        <div className="relative flex gap-x-0 md:gap-x-28 cursor-default mt-10" data-aos="fade-up">
          {
            whyUsItems.map((item: any, index: number) => {
              return (
                <div className="group flex flex-col items-center gap-y-5 w-32 z-10" key={index}>
                  <p className="text-center text-gray-400 duration-300 group-hover:text-slate-600 dark:group-hover:text-primary-100 group-hover:duration-300">{item}</p>
                  <div className="flex justify-center items-center w-6 h-6 rounded-full border-2 border-gray-300 bg-white duration-300 group-hover:border-slate-600 group-hover:duration-300">
                    <span className="w-3 h-3 bg-gray-300 dark:bg-primary-500 rounded-full duration-300 group-hover:bg-slate-600 dark:group-hover:bg-primary-800 group-hover:duration-300"></span>
                  </div>
                </div>
              )
            })
          }
          <div className="why-us-divider absolute h-1 left-0 right-0 bottom-2.5 mx-auto bg-gray-300 z-0"></div>
        </div>
      </div>
    </section>
  )
}

const WhyUsBlock = () => {

  const whyUsBlockItems = [
    {
      title: 'Implementing best practices',
      content: 'Whether you`re just starting out with cloud computing or have been using it for years, our experts can make sure that your environment is optimized for what you`re trying to do. We do this by implementing best practices and focusing on automation, so that we can deliver the best solution possible in a timely manner.'
    },
    {
      title: 'Tailored Solutions',
      content: 'We know that every business is different, and so are their needs. That`s why we work with each client individually to create systems tailored specifically for them.'
    },
    {
      title: 'Reliable Services',
      content: 'When you need reliable cloud-based services, Easesol is the best choice. Easesol is a cloud support company that focuses on providing the best possible service to our customers. We`re always ready to help you with your unique needs, and we`ll work with you to achieve the right solution for your business without any hassle or worry.'
    },
  ]

  return (
    <section className="w-full my-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-16 md:gap-y-28 mt-8 md:mt-14">
          {
            whyUsBlockItems.map((item: any, index: number) => {
              return (
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-x-10 xl:gap-x-20 gap-y-8`} key={index}>
                  <div className="w-full md:w-2/4 overflow-hidden shadow-xl rounded-lg" data-aos="fade-up">
                    {
                      index === 0 ? (
                        <StaticImage
                          src={`../../images/cloud-support/cloud-1.svg`}
                          alt={`cloud-1`}
                          className="object-cover w-full h-full"
                        />
                      ) : index === 1 ? (
                        <StaticImage
                          src={`../../images/cloud-support/cloud-2.svg`}
                          alt={`cloud-2`}
                          className="object-cover w-full h-full"
                        />
                      ) : index === 2 ? (
                        <StaticImage
                          src={`../../images/cloud-support/cloud-3.svg`}
                          alt={`cloud-3`}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <StaticImage
                          src={`../../images/cloud-support/cloud-1.svg`}
                          alt={`cloud-1`}
                          className="object-cover w-full h-full"
                        />
                      )
                    }
                  </div>
                  <div className="flex flex-col justify-center gap-y-4 w-full md:w-2/4">
                    <div data-aos="fade-up">
                      <IHeading size="subTitle">{item.title}</IHeading>
                    </div>
                    <ILine align="left" />
                    <div data-aos="fade-up">
                      <IParagraph>{item.content}</IParagraph>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

const WeWillHelpYou = () => {

  const helpItems = [
    {
      icon: <ImportContactsOutlinedIcon />,
      title: 'Protect your IT solution',
      content: 'Lorem ipsum dolor sit amet. Eos quia rerum et porro dolorem aut assumenda natus vel culpa quos ex galisum galisum. Sed quia eaque aut laborum quae ad laboriosam suscipit.'
    },
    {
      icon: <FormatListNumberedRtlOutlinedIcon />,
      title: 'Reinforce your skills',
      content: 'Lorem ipsum dolor sit amet. Eos quia rerum et porro dolorem aut assumenda natus vel culpa quos ex galisum galisum. Sed quia eaque aut laborum quae ad laboriosam suscipit.'
    },
    {
      icon: <DoneAllOutlinedIcon />,
      title: 'Overcome complex issues',
      content: 'Lorem ipsum dolor sit amet. Eos quia rerum et porro dolorem aut assumenda natus vel culpa quos ex galisum galisum. Sed quia eaque aut laborum quae ad laboriosam suscipit.'
    },
    {
      icon: <SurroundSoundOutlinedIcon />,
      title: 'Reduce TCO of IT systems',
      content: 'Lorem ipsum dolor sit amet. Eos quia rerum et porro dolorem aut assumenda natus vel culpa quos ex galisum galisum. Sed quia eaque aut laborum quae ad laboriosam suscipit.'
    },
    {
      icon: <TransformOutlinedIcon />,
      title: 'Transfer and manage duties and risks',
      content: 'Lorem ipsum dolor sit amet. Eos quia rerum et porro dolorem aut assumenda natus vel culpa quos ex galisum galisum. Sed quia eaque aut laborum quae ad laboriosam suscipit.'
    },
  ]

  return (
    <section className="w-full my-20 lg:my-36 pt-12 md:pt-24 pb-24 bg-gray-800 dark:bg-primary-900">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <IHeading align="text-center" color="white">We will help you</IHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-20 gap-y-20 mt-20">
          {
            helpItems.map((item: any, index: number) => {
              return (
                <div className="group relative p-6 md:p-8 pt-10 lg:pt-16 border-4 duration-300 border-gray-600 hover:border-white" key={index} data-aos="fade-up">
                  <div className="help-icon-box absolute bg-gray-800 dark:bg-primary-900 px-4 -top-10">{item.icon}</div>
                  <IHeading size="subHeader" color="white">{item.title}</IHeading>
                  <p className="text-gray-400 mt-5 duration-300 group-hover:text-gray-200">{item.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

const CloudSupportPage = ({ data: { mdx: pageData } }: any) => {

  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter

  return (
    <Layout>
      <Seo title={title + ` | Services`} />
      <div data-aos="fade-up">
        <PageHeading title={title} description={heading}></PageHeading>
      </div>
      <div data-aos="fade-up">
        <PageIntro>{excerpt}</PageIntro>
      </div>
      <ReadyToGetStarted />
      <WhyUsStep />
      <WhyUsBlock />
      <WeWillHelpYou />
      <OurProcess />
      <CallToActionMini
        title="Hire Us"
        description="Want us to work for you?"
        redirectTo="/hire-us"
      />
    </Layout>
  )
}

export default CloudSupportPage
export const query = graphql`
  query CloudSupportPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/cloud-support)/" }
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
