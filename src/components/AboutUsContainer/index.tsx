import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import IParagraph from "../IParagraph"

const AboutUsContainer = () => {

  return (
    <div className="flex items-center flex-col-reverse lg:flex-row gap-y-5 md:gap-y-10 mt-10 md:mt-32 overflow-hidden">
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-max" data-aos="fade-up">
        <StaticImage src="../../images/about/about-us-img.png" alt="about-us-image" className="w-full" />
      </div>
      <div className="pl-0 lg:pl-12 overflow-hidden w-full lg:w-1/2">
        <div data-aos="fade-up">
          <IParagraph>
            Your market never stops evolving. That's why we've pioneered a
            better, more strategic way to leverage technology. All backed by a
            team of experts to help you unlock its full potential.
          </IParagraph>
        </div>
        <br />
        <div data-aos="fade-up">
          <IParagraph>
            To be a leader in providing cloud computing consulting and
            engineering services by delivering innovative technologies. We
            believe that a true cloud service is one which removes the
            traditional barriers which exist between software applications,
            data and devices.
          </IParagraph>
        </div>
        <br />
        <div data-aos="fade-up">
          <IParagraph>
            Using state-of-the-art technology in combination with highly
            professional IT Staff, our mission is simple: to help small and
            startup businesses turn IT challenges into business opportunities.
            Our mission governs the way we do business and is at the thrust of
            every technology investment; from employing top technologists to
            providing world-className infrastructure deployment services.
          </IParagraph>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer
