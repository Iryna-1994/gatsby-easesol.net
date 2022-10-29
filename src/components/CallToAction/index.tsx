import * as React from "react"
import PropTypes from "prop-types"
import IButton from "../IButton"

const CallToAction = ({ title, description, cta, ctaTo, bgClass }: { title: string, description: string, cta: string, ctaTo: string, bgClass: string }) => {
  return (
    <section className={`container mx-auto`} data-aos="fade-up">
      <div className={`px-4 rounded-sm ${bgClass}`}>
        <div className="w-full py-16 mx-auto">
          <h2 className="py-4 m-0 text-4xl text-center text-white md:text-6xl">
            {title}
          </h2>
          <h3 className="m-0 mt-2 text-base font-semibold text-center text-white md:text-xl lg:mt-4">
            {description}
          </h3>
          <div className="flex flex-col items-center justify-center mt-12 space-y-2 md:space-y-3">
            <IButton to={ctaTo} color="red" size="lg">
              {cta}
            </IButton>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.string,
  ctaTo: PropTypes.string,
  bgClass: PropTypes.string,
}

CallToAction.defaultProps = {
  description: "",
  ctaTo: "/services",
  bgClass: "bg-dark-900",
}

export default CallToAction
