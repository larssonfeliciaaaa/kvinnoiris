import React from "react"
import { Link } from "gatsby"

const BlogShowcasePost = props => {
  const { postHeading, postDescription, postLink, postThumbnail } = props

  return (
    <article className="p-4 mb-10 md:w-1/2 lg:w-1/3 md:p-8 md:mb-0">
      <div className="h-full overflow-hidden bg-white border-2 border-gray-200 rounded-lg">
        <img
          className="object-cover object-center w-full md:h-48 lg:h-48 md:h-36"
          src={postThumbnail}
          alt={postHeading}
        />
        <div className="p-6">
          <h1 className="mb-3 text-lg font-bold text-gray-900 title-font">
            {postHeading}
          </h1>
          <p className="mb-3 leading-relaxed">{postDescription}</p>
          <div className="flex flex-wrap items-center ">
            <Link
              to={`/aktuellt/${postLink}`}
              className="inline-flex items-center text-purple-500 md:mb-2 lg:mb-0"
            >
              Läs mer
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
        </div>
      </div>
    </article>
  )
}

export default BlogShowcasePost
