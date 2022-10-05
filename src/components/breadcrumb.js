import React from "react"
import { Link } from "gatsby"

const Breadcrumb = ({ page, link }) => {
  return (
    <div className="z-50 flex max-w-screen-xl px-3 py-2 pt-4 mx-auto text-lg bg-gray-200 breadcrumb sm:px-5 xl:px-0 lg:bg-transparent">
      <Link className="text-purple-600" to="/">
        Hem
      </Link>
      <p>&nbsp;/&nbsp;</p>
      <Link className="font-bold " to={`/${link}`}>
        {page}
      </Link>
    </div>
  )
}
export default Breadcrumb
