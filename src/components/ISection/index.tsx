import * as React from "react"
import ILine from "../ILine"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"
export default function ISection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="w-full py-0 lg:py-10 my-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-20 text-center xl:w-2/4 lg:w-3/4">
          <div data-aos="fade-up">
            <IHeading>{title}</IHeading>
          </div>
          {description && (
            <div className="py-2" data-aos="fade-up">
              <IParagraph>{description}</IParagraph>
            </div>
          )}
          <ILine></ILine>
        </div>
        {children}
      </div>
    </section>
  )
}
