import React from "react"

const _sizes = {
  one: "text-4xl md:text-5xl lg:text-6xl xl:text-8xl py-4 font-bold leading-tight",
  two: "text-3xl md:text-4xl lg:text-5xl py-3 font-semibold",
  three: "text-lg md:text-xl lg:text-2xl py-2 font-medium",
  subTitle: "text-3xl lg:text-4xl font-semibold",
  subHeader: "text-2xl lg:text-3xl",
}
const _colors = {
  default: "text-primary-700 dark:text-primary-100",
  white: "text-white dark:text-primary-100",
}

export default function IHeading({
  size = "two",
  color = "default",
  align,
  children,
}: {
  size?: "two" | "one" | "three" | "subTitle" | "subHeader"
  color?: "default" | "white"
  children: React.ReactNode
  align?: string
}) {

  let sizeClasses = _sizes[size]
  let colorClasses = _colors[color]
  const defaultStyle = " leading-relaxed"
  const subTitleStyle = " leading-tight text-left"
  const subHeaderStyle = " leading-9"
  switch (size) {
    case "one":
      return (
        <h1 className={`${defaultStyle} ${sizeClasses} ${colorClasses} ${align}`}>
          {children}
        </h1>
      )
    case "three":
      return (
        <h3 className={`${defaultStyle} ${sizeClasses} ${colorClasses} ${align}`}>
          {children}
        </h3>
      )
    case "subTitle":
      return (
        <h3 className={`${subTitleStyle} ${sizeClasses} ${colorClasses} ${align}`}>
          {children}
        </h3>
      )
    case "subHeader":
      return (
        <h3 className={`${subHeaderStyle} ${sizeClasses} ${colorClasses} ${align}`}>
          {children}
        </h3>
      )
    default:
      return (
        <h2 className={`${defaultStyle} ${sizeClasses} ${colorClasses} ${align}`}>
          {children}
        </h2>
      )
  }
}
