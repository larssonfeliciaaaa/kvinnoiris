import React from "react"
import { Link } from "gatsby"

const Blogpost = props => {
  const { title, date, shortDesc, url, image } = props

  return (
    <article className="mb-20 xl:w-1/3 md:w-1/2 md:p-8 md:mb-0">
      <div className="block w-full">
        <div className="relative">
          <p className="absolute top-0 left-0 z-20 w-48 m-2">
            <span className="inline-flex items-center p-2 bg-gray-200 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12.75H13.29C13.04 13.2 12.55 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.45 10.8 10.96 11.25 10.71V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V10.71C12.97 10.83 13.16 11.02 13.29 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75ZM12.75 12C12.75 12.22 12.65 12.42 12.5 12.55C12.37 12.68 12.19 12.75 12 12.75C11.59 12.75 11.25 12.41 11.25 12C11.25 11.81 11.32 11.63 11.45 11.5C11.58 11.35 11.78 11.25 12 11.25C12.19 11.25 12.37 11.32 12.5 11.45C12.52 11.47 12.54 11.49 12.55 11.51C12.591 11.5478 12.626 11.5916 12.6547 11.6397C12.7147 11.7458 12.75 11.8694 12.75 12Z"
                  fill="#999999"
                ></path>
              </svg>
              {date.replace(/-/g, " ")}
            </span>
          </p>
          <img className="" src={image} alt="" />
        </div>
        <div className="w-full">
          <div className="max-w-lg">
            <div className="flex flex-col mt-2">
              <h2 className="mt-2 mb-2 text-xl font-bold text-gray-900 break-words title-font">
                {title}
              </h2>
            </div>
            <p className="leading-relaxed">{shortDesc}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/aktuellt/${url}`}
          className="inline-flex items-center mt-5 font-bold text-purple-500"
        >
          Läs inlägg
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </article>
  )
}
export default Blogpost
