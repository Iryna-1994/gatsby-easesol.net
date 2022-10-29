import * as React from "react"
import { Link } from "gatsby"
import IParagraph from "../IParagraph"
import PropTypes from "prop-types"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const colors = {
  yellow: "bg-yellow-200",
  indigo: "bg-indigo-200",
  cyan: "bg-cyan-200",
}

const colorsUnderline = {
  yellow: "decoration-yellow-500",
  indigo: "decoration-indigo-500",
  cyan: "decoration-cyan-500",
}

const OurWorkHomeCard = (props: any) => {
  const {
    title,
    description,
    slug,
    imageSrc,
    color,
    cardIndex,
  } = props
  let md_flexRow = "md:flex-row"
  if (cardIndex % 2 === 1) {
    md_flexRow = "md:flex-row-reverse"
  } else {
    md_flexRow = "md:flex-row"
  }

  const cardColor = colors[color]
  const underlineColor = colorsUnderline[color]

  const lineHeight = {
    lineHeight: 1.5
  }

  return (
    <div className={`flex flex-col mb-10 md:mb-0 ${md_flexRow}`}>
      <div className="flex flex-col items-start justify-center w-full px-0 py-10 md:w-2/4 md:px-4 lg:px-10">
        <Link
          className={`text-left text-3xl md:text-4xl font-medium lg:font-bold text-primary-700 dark:text-primary-100 duration-300 underline hover:no-underline ${underlineColor} decoration-4 lg:decoration-8 mb-6`}
          data-aos="fade-up"
          to={`/${slug}`}
          style={lineHeight}
        >
          {title}
        </Link>
        <div data-aos="fade-up">
          <IParagraph>{description}</IParagraph>
        </div>
        <Link
          to={`/${slug}`}
          className="inline-flex items-center -mt-4 md:mt-4 group justify-left gap-x-2 text-red-600 dark:text-red-300"
          data-aos="fade-up"
        >
          <p className="duration-300 group-hover:mr-3 group-hover:duration-300">
            Learn More
          </p>
          <ArrowForwardIcon className="text-red-600 dark:text-red-300" />
        </Link>
      </div>
      <div
        className={`group w-full md:w-2/4 flex justify-center items-center ${cardColor} p-8 lg:p-16`}
        data-aos="fade-up"
      >
        <img src={imageSrc} alt={title} className="duration-300 w-full group-hover:scale-110" />
      </div>
    </div>
  )
}

export default OurWorkHomeCard

OurWorkHomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  imageSrc: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  cardIndex: PropTypes.number,
}

OurWorkHomeCard.defaultProps = {
  color: "yellow",
}
