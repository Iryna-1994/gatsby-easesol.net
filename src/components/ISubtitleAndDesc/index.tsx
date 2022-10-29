import * as React from "react"
import ILine from "../ILine"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"

export default function ISubtitleAndDesc({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-5 lg:mt-20">
      <div data-aos="fade-up">
        <IHeading size="subTitle">{title}</IHeading>
      </div>
      <div className="mt-3 mb-5" data-aos="fade-up">
        <IParagraph><span>{children}</span></IParagraph>
      </div>
      <ILine align="left" />
    </div>
  )
}
