import * as React from "react"
import PropTypes from "prop-types"
import IHeading from "../IHeading"
import IParagraph from "../IParagraph"
const PageHeading = ({ title, description }: any) => {
  return (
    <section className="w-full">
      <div className="container mx-auto ">
        <div className="w-full md:w-5/6 py-8 mx-auto text-center md:pt-16 md:pb-8">
          <IHeading size="one">{title}</IHeading>
          <IParagraph size="xl">{description}</IParagraph>
        </div>
      </div>
    </section>
  )
}

PageHeading.defaultProps = {
  description: ``,
}

PageHeading.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}
export default PageHeading
