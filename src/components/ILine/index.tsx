import React from "react"
import PropTypes from "prop-types"

const _colors: any = {
  secondary: "bg-secondary-600",
  yellow: "bg-yellow-700",
  indigo: "bg-indigo-700",
  cyan: "bg-cyan-700",
  white: "bg-white",
}
const _aligns: any = {
  center: "justify-center",
  left: "justify-left",
}

export default function ILine({ color, align }: any) {
  let colorClasses = _colors[color]
  let alignClasses = _aligns[align]

  return (
    <div className={`flex mt-2 ${alignClasses}`} data-aos="fade-up">
      <div className={`inline-flex w-16 h-1 rounded-sm ${colorClasses}`}></div>
    </div>
  )
}
ILine.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
}

ILine.defaultProps = {
  color: "secondary",
  align: "center",
}
