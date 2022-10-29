import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IParagraph from "../IParagraph"

const CallToActionMini = ({ title, description, redirectTo }: any) => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="pt-0 lg:pt-8 xl:pt-12 pb-16 mt-8 text-center">
          <div className="mx-auto">
            <div className="my-6" data-aos="fade-up">
              <IParagraph>{description}</IParagraph>
            </div>
            <Link
              to={redirectTo}
              className="inline-flex items-center leading-tight underline uppercase text-secondary-600 text-5xl lg:text-6xl xl:text-8xl hover:no-underline decoration-red-500"
              data-aos="fade-up"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToActionMini.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  redirectTo: PropTypes.string,
}

CallToActionMini.defaultProps = {
  description: "",
  redirectTo: "/services",
}

export default CallToActionMini
