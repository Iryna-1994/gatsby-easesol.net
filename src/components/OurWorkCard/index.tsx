import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ILine from "../ILine"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

const colors = {
  yellow: "bg-yellow-500 hover:bg-yellow-600 text-white",
  indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  cyan: "bg-cyan-500 hover:bg-cyan-600 text-white",
}

const OurWorkCard = ({ title, color, to }: { title: string, color: string, to: string }) => {
  let colorClasses = colors[color]
  return (
    <Link
      to={to}
      className={`block w-full px-10 pt-10 mr-6 text-center rounded-lg shadow-lg hover:cursor-pointer ${colorClasses}`}
    >
      <IHeading size="three" color="white">
        {title}
      </IHeading>
      <div className="h-64 mt-10 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center w-full h-full transform hover:scale-105"
          src="https://dummyimage.com/1201x501"
        />
      </div>
    </Link>
  )
}

export default OurWorkCard

OurWorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  to: PropTypes.string,
}

OurWorkCard.defaultProps = {
  to: "/services",
  color: "yello",
}
