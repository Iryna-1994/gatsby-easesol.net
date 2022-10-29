import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import IParagraph from "../IParagraph"

const AboutSection1 = () => (
  <div className="flex flex-wrap overflow-hidden">
    <div className="flex flex-col items-center justify-center my-3 overflow-hidden w-full lg:w-1/2">
      <div className="flex items-end gap-x-4 -mb-8">
        <div className="flex justify-center items-center w-64 h-40 bg-yellow-200">
          <StaticImage
            src="../../images/about/yellow-img.svg"
            alt="yellow-img"
          />
        </div>
        <div className="flex justify-center items-center w-32 h-32 bg-sky-200">
          <StaticImage
            src="../../images/about/sky1-img.svg"
            alt="yellow-img"
          />
        </div>
      </div>
      <div className="relative flex items-end gap-x-4 my-4">
        <div className="flex justify-center items-center w-32 h-40 bg-gray-200 z-10">
          <StaticImage
            src="../../images/about/gray-img.svg"
            alt="yellow-img"
          />
        </div>
        <div className="flex justify-center items-center w-64 h-40 -ml-7 -mb-8">
          <StaticImage
            src="../../images/about/red-img.svg"
            alt="yellow-img"
          />
        </div>
        <div className="flex justify-center items-center -ml-8 -mb-6">
          <StaticImage
            src="../../images/about/brush-img.svg"
            alt="brush-img"
          />
        </div>
        <div className="flex justify-center items-center -ml-16 mb-2">
          <StaticImage
            src="../../images/about/arrow-img.svg"
            alt="arrow-img"
          />
        </div>
        <div className="absolute -left-8 -top-10">
          <StaticImage
            src="../../images/about/setting-img.svg"
            alt="setting-img"
          />
        </div>
        <div className="absolute -left-8 -bottom-16">
          <StaticImage
            src="../../images/about/rect-img.svg"
            alt="rect-img"
          />
        </div>
      </div>
      <div className="flex items-start gap-x-4">
        <div className="flex justify-center items-center w-64 h-40 bg-indigo-200">
          <StaticImage
            src="../../images/about/blue-img.svg"
            alt="yellow-img"
          />
        </div>
        <div className="flex justify-center items-center w-32 h-32 bg-sky-200 -mt-6 z-10">
          <StaticImage
            src="../../images/about/sky2-img.svg"
            alt="yellow-img"
          />
        </div>
      </div>
    </div>

    <div className="px-3 my-3 overflow-hidden lg:w-1/2">
      <IParagraph>
        Your market never stops evolving. That’s why we’ve pioneered a
        better, more strategic way to leverage technology. All backed by a
        team of experts to help you unlock its full potential.
      </IParagraph>
      <br />
      <IParagraph>
        To be a leader in providing cloud computing consulting and
        engineering services by delivering innovative technologies. We
        believe that a true cloud service is one which removes the
        traditional barriers which exist between software applications,
        data and devices.
      </IParagraph>
      <br />
      <IParagraph>
        Using state-of-the-art technology in combination with highly
        professional IT Staff, our mission is simple: to help small and
        startup businesses turn IT challenges into business opportunities.
        Our mission governs the way we do business and is at the thrust of
        every technology investment; from employing top technologists to
        providing world-className infrastructure deployment services.{" "}
      </IParagraph>
    </div>
  </div>
)

export default AboutSection1
