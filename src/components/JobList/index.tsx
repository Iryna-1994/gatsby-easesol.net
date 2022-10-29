import * as React from "react"
import { Link } from "gatsby"
import { useAllJobOpening } from "hooks/use-all-job-opening"
import IParagraph from "../IParagraph"

const JobList = ({ }) => {
  const openings = useAllJobOpening()
  if (openings.length) {
    return (
      <ul className="space-y-4 sm:space-y-2">
        {openings.map(({ node }: any) => {
          const { frontmatter, excerpt, slug } = node
          const { title } = frontmatter
          return (
            <li className="grid items-center grid-cols-5 p-5 border border-gray-200">
              <div className="w-full col-span-5 mx-auto text-2xl text-center sm:text-xl josefin sm:text-left sm:col-span-2">
                <span>{title}</span>
              </div>
              <div className="flex flex-col items-center justify-between col-span-5 mt-4 space-y-4 sm:mt-0 sm:space-y-0 sm:flex-row sm:col-span-3">
                <div className="flex flex-row items-center space-x-12 sm:space-x-0 sm:items-start sm:flex-col">
                  <span className="text-base josefin">{excerpt}</span>
                </div>
                <Link
                  to={slug}
                  className="flex items-center justify-center w-full px-2 py-2 text-white bg-blue-500 rounded-sm sm:w-auto sm:px-6 sm:text-lg hover:bg-gray-900"
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="mt-1">Apply</span>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <div className="container mx-auto">
        <IParagraph align="text-center">
          We're not hiring at the moment, but please check back with us again.
        </IParagraph>
      </div>
    )
  }
}

export default JobList
