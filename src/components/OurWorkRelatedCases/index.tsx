import * as React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

const OurWorkRelatedCases = (props: any) => {
  const { relatedWorkAr } = props
  const colors = {
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    indigo: "bg-indigo-500 hover:bg-indigo-600",
    cyan: "bg-cyan-500 hover:bg-cyan-600",
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full mt-24 mb-12 lg:mb-24">
          <div data-aos="fade-up">
            <IHeading align="text-center" size="subTitle">You may also like</IHeading>
          </div>
          <div className="flex flex-col justify-start sm:flex-row gap-x-12 mt-10 md:mt-20">
            {relatedWorkAr.map((work: any, index: number) => {
              const { frontmatter, slug } = work
              const { title, color, embeddedImagesLocal } = frontmatter
              const { publicURL } = embeddedImagesLocal[0]
              let colorClasses = colors[color]
              return (
                <Link to={`/${slug}`}>
                  <div className="w-full mb-16 sm:w-80 sm:mb-0">
                    <div
                      className={`w-full flex justify-center items-center h-80 p-8 ${colorClasses}`}
                      data-aos="fade-up"
                    >
                      <img src={publicURL} alt={title} />
                    </div>
                    <div data-aos="fade-up">
                      <IParagraph>{title}</IParagraph>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWorkRelatedCases

OurWorkRelatedCases.propTypes = {
  relatedWorkAr: PropTypes.array.isRequired,
}

OurWorkRelatedCases.defaultProps = {
  relatedWorkAr: [],
}
