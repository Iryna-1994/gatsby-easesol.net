import React from "react"
import PropTypes from "prop-types"

const sizes = {
  xl: "text-xl md:text-2xl lg:text-3xl py-6",
  lg: "text-xl md:text-xl lg:text-2xl py-4",
  md: "text-lg py-2",
}

const colors = {
  default: "text-primary-500 dark:text-primary-300",
  white: "text-white dark:text-primary-100",
  gray: "text-gray-300 dark:text-primary-300"
}

export default function IParagraph({ size, color, children, align }: { size?: string, color?: string, children?: any, align?: string }) {
  let sizeClasses = sizes[size]
  let colorClasses = colors[color]

  return (
    <p className={`leading-relaxed ${align} ${colorClasses} ${sizeClasses}`}>
      {children}
    </p>
  )
}

IParagraph.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
}

IParagraph.defaultProps = {
  size: "md",
  color: "default",
  children: "",
}
