import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import PageHeading from "@/components/PageHeading"
import PageIntro from "@/components/PageIntro"
import IParagraph from "@/components/IParagraph"
import IHeading from "@/components/IHeading"
import ILine from "@/components/ILine"
import CallToAction from "@/components/CallToAction"
import OurProcess from "@/components/OurProcess"
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined'
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined'
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import FormatListNumberedRtlOutlinedIcon from '@material-ui/icons/FormatListNumberedRtlOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import SurroundSoundOutlinedIcon from '@material-ui/icons/SurroundSoundOutlined';
import TransformOutlinedIcon from '@material-ui/icons/TransformOutlined';
import './styles.css'

const StartupPartnerPage = ({ data: { mdx: pageData } }: any) => {

  const { frontmatter, excerpt } = pageData
  const { title, heading } = frontmatter

  const items = [
    {
      imgSrc: <ImportantDevicesOutlinedIcon />,
      title: 'Experience',
      desc: 'Our team of highly-experienced engineers and developers is here to partner with you on your digital transformation journey. We specialize in helping companies move from legacy systems to cloud-based, containerized infrastructure. We`re cloud agnostic, so we`ll make sure you`re using the best practices for the job.'
    },
    {
      imgSrc: <AspectRatioOutlinedIcon />,
      title: 'Scalability',
      desc: 'Our team works relentlessly to keep up with your needs, especially when it comes to delivering large-scale projects. With Easesol you get flexibility in terms of increasing or decreasing your workforce as per need. We are always ready to scale-up our capacities for you.'
    },
    {
      imgSrc: <GroupOutlinedIcon />,
      title: ' Extend your team',
      desc: 'We can provide engineers with the skills and experience necessary to fill skills gaps in your team. All of our engineers are top-notch, former experts in their field and ready to take on any challenge!'
    },
    {
      imgSrc: <GroupWorkOutlinedIcon />,
      title: ' Remote / Local team',
      desc: 'We also offer dedicated remote resources who will work alongside you in a productive, professional environment. This allows your internal team to focus on their core competencies, while still giving you access to specialized talent when you need it.'
    },
  ]

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
    <Layout>
      <Seo title={title + ` | Services`} />
      <div data-aos="fade-up">
        <PageHeading title={title} description={heading}></PageHeading>
      </div>
      <div data-aos="fade-up">
        <PageIntro>{excerpt}</PageIntro>
      </div>
      <section className="w-full my-20">
        <div className="container mx-auto">
          <div data-aos="fade-up">
            <IHeading align="text-center">
              Why Easesol?
            </IHeading>
          </div>
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <IParagraph align="text-center">
              If you're like us, running a startup isn't just about getting your product out into the world—it's
              about making sure that your business is a success.
              We're one of the leading Cloud Computing Services providers for startups, and we're here to
              help transform your business and technology models to be the epitome of the Digital Era.
            </IParagraph>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-28 mt-36 mb-12">
            {
              items.map((item: any) => {
                return (
                  <div className="shadow-xl rounded-lg bg-slate-700 flex flex-col items-center p-5" data-aos="fade-up">
                    <div className="icon-box flex justify-center items-center w-28 md:w-40 h-28 md:h-40 bg-slate-200 rounded-full overflow-hidden -mt-20 mb-6">
                      {item.imgSrc}
                    </div>
                    <IHeading size="subHeader" color="white">
                      {item.title}
                    </IHeading>
                    <div className="mt-3 mb-6">
                      <ILine />
                    </div>
                    <IParagraph color="gray">
                      {item.desc}
                    </IParagraph>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full my-28">
        <div className="container mx-auto">
          <div data-aos="fade-up">
            <IHeading align="text-center">We will help you</IHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {
              helpItems.map((item: any, index: number) => {
                return (
                  <div className="group relative flex flex-col items-center p-10 shadow-xl rounded-md overflow-hidden border-b-2 border-slate-600 dark:border-primary-400 dark:bg-primary-900" key={index} data-aos="fade-up">
                    <div className="startup-help-icon-box mb-6 z-10">{item.icon}</div>
                    <IHeading size="subHeader" align="text-center z-10">{item.title}</IHeading>
                    <p className="absolute left-0 right-0 top-0 bottom-0 p-8 opacity-0 z-0 text-gray-200 duration-300 bg-slate-600 dark:bg-primary-600 group-hover:opacity-100 group-hover:z-20">{item.content}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <OurProcess />
      <CallToAction
        title="Ready to take an assessment of your infrastructure?"
        description="Take the first step by transforming your digital foothold using our Containers with Kubernetes service!"
        cta="Share your project"
        ctaTo="/hire-us"
      />
    </Layout>
  )
}

export default StartupPartnerPage

export const query = graphql`
  query StartupPartnerPageQuery {
    mdx(
      fileAbsolutePath: { regex: "/(services)/" }
      slug: { regex: "/(services/your-startup-partner)/" }
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
