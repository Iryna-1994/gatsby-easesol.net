import * as React from "react"
import PropTypes from "prop-types"
import ILine from "../ILine"
import IParagraph from "../IParagraph"
const PageIntro = ({ children }: any) => {
  return (
    <section className="container mx-auto ">
      <div className="mb-6 text-left dark:bg-primary-800">
        <div className="py-8 md:w-4/5 sm:w-full">
          <IParagraph size="md">{children}</IParagraph>
          <ILine align="left"></ILine>
        </div>
      </div>
    </section>
  )
}

PageIntro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageIntro
