import * as React from "react"
import OurWorkHomeCard from "../OurWorkHomeCard"
import { useAllOurWork } from "@/hooks/use-our-work"

const OurWorkHomeContainer = () => {
  const { primeWorks } = useAllOurWork()
  return (
    <section className="pt-10 pb-0 md:pt-24 md:pb-14">
      <div className="container mx-auto">
        {primeWorks.map((work: any, index: number) => {
          const { node } = work
          const { frontmatter, slug, excerpt } = node
          const { title, color, embeddedImagesLocal } = frontmatter
          const { publicURL } = embeddedImagesLocal[0]

          return (
            <OurWorkHomeCard
              title={title}
              description={excerpt}
              slug={slug}
              imageSrc={publicURL}
              color={color}
              cardIndex={index}
            />
          )
        })}
      </div>
    </section>
  )
}

export default OurWorkHomeContainer
