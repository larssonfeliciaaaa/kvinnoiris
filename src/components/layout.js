import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import layoutStyles from "../styles/main.css"

const Layout = props => {
  return (
    <>
      <div className={layoutStyles}>
        <div className="bg-gray-100 content">
          <Header />
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
