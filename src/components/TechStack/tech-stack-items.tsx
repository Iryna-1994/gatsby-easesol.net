import * as React from "react"

const TechStackItems = (props: any) => {
  return (
    <div className="text-base border py-2 px-5 border-white-700 text-white uppercase cursor-pointer" data-aos="fade-up">
      {props.techStacks}
    </div>
  )
}

export default TechStackItems
