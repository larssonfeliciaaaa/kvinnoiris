import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <section className="flex items-center text-gray-700 body-font hero">
      <div className="bg"></div>
      <div className="hero-overlay"></div>
      <div className="container relative px-2 mx-auto hero-container sm:pl-10 xl:px-0 ">
        <div className="z-10 items-center w-full text-center md:mb-16 md:mb-0">
          <h1 className="w-full max-w-5xl mx-auto mb-4 text-4xl font-medium font-bold leading-tight text-white title-font sm:text-4xl md:text-5xl ">
            Vi stödjer kvinnor, tjejer och barn som utsätts för mäns våld och
            förtryck.
          </h1>

          <div className="flex flex-col justify-center w-3/5 m-auto mt-8 sm:flex-row sm:w-auto">
            <Link
              to="#more"
              className="flex items-center justify-center px-6 py-2 mb-2 text-lg text-white bg-purple-600 border-0 rounded-full sm:mb-0 sm:w-56 sm:h-14 md:py-3 md:px- focus:outline-none hover:bg-purple-500 sm:text-xl"
            >
              Läs mer
            </Link>
            <Link
              to="/kontakta-oss"
              className="flex items-center justify-center px-6 py-2 text-lg text-gray-700 bg-gray-200 border-0 rounded-full sm:ml-4 sm:w-56 sm:h-14 md:py-3 md:px-8 focus:outline-none hover:bg-gray-300 sm:text-xl"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
        <div className="w-5/6  lg:block lg:max-w-lg lg:w-full md:w-1/2">
          {/* <img
              className="top-0 left-0 z-0 hidden object-cover object-center md:absolute md:block lg:static "
              alt="hero"
              src={heroImage}
            /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
