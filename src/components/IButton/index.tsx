import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const sizes = {
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
}

const colors = {
  red: "bg-red-500 hover:bg-red-600 text-white",
  indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
}

export default function IButton({
  color = "red",
  size = "md",
  className,
  to,
  children
}: {
  color?: "red" | "indigo" | "cyan"
  size?: "md" | "lg"
  className?: string
  to?: any
  children?: any
}) {
  let colorClasses: any = colors[color]
  let sizeClasses: any = sizes[size]

  return (
    <Link
      to={to}
      className={`font-bold ${className} ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </Link>
  )
}

IButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

IButton.defaultProps = {
  color: "red",
  size: "md",
  className: "",
  children: "",
}
