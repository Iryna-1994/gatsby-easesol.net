import React, { useEffect } from "react"
import IHeading from "../IHeading"
import IButton from "../IButton"
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './styles.css'

const ServicesOurProcess = ({ }) => {

  const data = [
    {
      icon: <AssessmentOutlinedIcon />,
      title: 'Assess the Requirements and Needs'
    },
    {
      icon: <SettingsApplicationsOutlinedIcon />,
      title: 'Build the Infrastructure or Application'
    },
    {
      icon: <LocalShippingOutlinedIcon />,
      title: 'Ship to the World'
    },
    {
      icon: <SearchOutlinedIcon />,
      title: 'Observe the Application and Infrastructure'
    },
    {
      icon: <HelpOutlineOutlinedIcon />,
      title: 'Cloud Support'
    },
  ]

  const maxWidth = window.innerWidth

  return (
    <div className={`relative ${maxWidth > 767 ? 'grid' : 'block'} grid-cols-5 my-6 md:my-10 max-w-5xl gap-2`} data-aos="fade-up">
      {
        data.map((item: any, index: number) => {
          return (
            <>
              {
                maxWidth > 767 ? (
                  <div className="group our-process-mini flex flex-col justify-between items-center gap-y-4 p-2 duration-300 border-white z-10" key={index}>
                    <div className="flex justify-center items-center w-20 h-20 duration-300 bg-primary-700 group-hover:bg-primary-200 rounded-full border-4 border-primary-50 shadow-xl">{item.icon}</div>
                    <p className="duration-300 text-primary-500 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 text-center text-sm my-0">{item.title}</p>
                  </div>
                ) : (
                  <li className="pl-4 dark:text-primary-300">{item.title}</li>
                )
              }
            </>
          )
        })
      }
      {
        maxWidth > 767 ? (
          <div className="line absolute flex items-center left-0 right-0 top-12 h-0.5 bg-primary-500 z-0">
            <FiberManualRecordIcon className="absolute -left-2.5" />
            <NavigateNextIcon className="absolute -right-2.5" />
          </div>
        ) : (
          <></>
        )
      }
    </div>
  )
}

const HomeOurProcess = () => {

  return (
    <div className="home-our-process w-full md:w-auto inline-flex flex-col md:flex-row justify-start items-center my-6 md:my-10" data-aos="fade-up">
      <div className="group w-64 md:w-36 lg:w-48 xl:w-64 h-64 md:h-36 lg:h-48 xl:h-64 bg-transparent border-l-orange-400 border-b-orange-400 border-t-transparent border-r-transparent rotate-45 md:-rotate-45 rounded-full">
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary-50 rounded-full shadow-2xl -rotate-45 md:rotate-45 p-3 duration-200 dark:bg-primary-600 hover:bg-primary-700 hover:-translate-y-6">
          <p className="text-center text-primary-500 dark:text-primary-300 text-sm lg:text-base xl:text-xl duration-200 group-hover:text-primary-300">Assess the Requirements and Needs</p>
        </div>
      </div>
      <div className="group w-64 md:w-36 lg:w-48 xl:w-64 h-64 md:h-36 lg:h-48 xl:h-64 bg-transparent border-r-sky-400 border-t-sky-400 border-l-transparent border-b-transparent rotate-45 md:-rotate-45 rounded-full -mt-9 md:mt-0 md:-ml-3 lg:-ml-5 xl:-ml-9">
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary-50 rounded-full shadow-2xl -rotate-45 md:rotate-45 p-3 duration-200 dark:bg-primary-600 hover:bg-primary-700 hover:-translate-y-6">
          <p className="text-center text-primary-500 dark:text-primary-300 text-sm lg:text-base xl:text-xl duration-200 group-hover:text-primary-300">Build the Infrastructure or Application</p>
        </div>
      </div>
      <div className="group w-64 md:w-36 lg:w-48 xl:w-64 h-64 md:h-36 lg:h-48 xl:h-64 bg-transparent border-l-yellow-600 border-b-yellow-600 border-t-transparent border-r-transparent rotate-45 md:-rotate-45 rounded-full -mt-9 md:mt-0 md:-ml-3 lg:-ml-5 xl:-ml-9">
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary-50 rounded-full shadow-2xl -rotate-45 md:rotate-45 p-3 duration-200 dark:bg-primary-600 hover:bg-primary-700 hover:-translate-y-6">
          <p className="text-center text-primary-500 dark:text-primary-300 text-sm lg:text-base xl:text-xl duration-200 group-hover:text-primary-300">Ship to the World</p>
        </div>
      </div>
      <div className="group w-64 md:w-36 lg:w-48 xl:w-64 h-64 md:h-36 lg:h-48 xl:h-64 bg-transparent border-r-emerald-400 border-t-emerald-400 border-l-transparent border-b-transparent rotate-45 md:-rotate-45 rounded-full -mt-9 md:mt-0 md:-ml-3 lg:-ml-5 xl:-ml-9">
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary-50 rounded-full shadow-2xl -rotate-45 md:rotate-45 p-3 duration-200 dark:bg-primary-600 hover:bg-primary-700 hover:-translate-y-6">
          <p className="text-center text-primary-500 dark:text-primary-300 text-sm lg:text-base xl:text-xl duration-200 group-hover:text-primary-300">Observe the Application and Infrastructure</p>
        </div>
      </div>
      <div className="group w-64 md:w-36 lg:w-48 xl:w-64 h-64 md:h-36 lg:h-48 xl:h-64 bg-transparent border-l-indigo-400 border-b-indigo-400 border-t-transparent border-r-transparent rotate-45 md:-rotate-45 rounded-full -mt-9 md:mt-0 md:-ml-3 lg:-ml-5 xl:-ml-9">
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary-50 rounded-full shadow-2xl -rotate-45 md:rotate-45 p-3 duration-200 dark:bg-primary-600 hover:bg-primary-700 hover:-translate-y-6">
          <p className="text-center text-primary-500 dark:text-primary-300 text-sm lg:text-base xl:text-xl duration-200 group-hover:text-primary-300">Cloud Support</p>
        </div>
      </div>
    </div>
  )
}

const OurProcess = (props?: any) => {

  const pageName = props?.page

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="mb-20 text-left">
          <div data-aos="fade-up">
            <IHeading>Our Process</IHeading>
          </div>
          {
            pageName === "Home" ? (
              <HomeOurProcess />
            ) : (
              <ServicesOurProcess />
            )
          }
          <div className="flex mt-2 justify-left" data-aos="fade-up">
            <IButton to="/our-process/">
              Explore our process
            </IButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess
