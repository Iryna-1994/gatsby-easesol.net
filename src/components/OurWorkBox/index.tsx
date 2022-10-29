import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const colors = {
  yellow: "bg-yellow-500 hover:bg-yellow-600 text-white",
  indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  cyan: "bg-cyan-500 hover:bg-cyan-600 text-white",
}

const OurWorkBox = (props: any) => {
  const {
    slug,
    title,
    imageSrc,
    color
  } = props
  let colorClasses = colors[color]
  return (
    <div data-aos="fade-up">
      <Link
        to={`/${slug}`}
        className={`group flex flex-col items-center h-full justify-between gap-y-10 p-7 rounded-xl duration-300 ${colorClasses} hover:duration-300 shadow-2xl hover:shadow-slate-500`}
      >
        <h3 className="py-2 text-lg font-medium text-center text-white md:text-xl lg:text-2xl">
          {title}
        </h3>
        <div className="p-4 duration-300 group-hover:p-0 group-hover:duration-300">
          <img src={imageSrc} alt={title} />
        </div>
      </Link>
    </div>
  )
}

export default OurWorkBox

OurWorkBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  imageSrc: PropTypes.string,
  slug: PropTypes.string,
}

OurWorkBox.defaultProps = {
  color: "yello",
}
