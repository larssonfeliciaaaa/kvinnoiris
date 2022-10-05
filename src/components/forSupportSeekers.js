import React from "react"
import { Link } from "gatsby"

import womanViolence from "../images/woman.png"
import about from "../images/womanline.png"

const ForSupportSeekers = () => {
  return (
    <section id="more" className="text-gray-700 bg-white body-font">
      <div className="container w-full px-5 py-24 mx-auto">
        <div className="w-full text-center">
          <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font">
            Behöver du hjälp?
          </h1>
          <p className="max-w-lg mx-auto text-base leading-relaxed text-center ">
            Är du eller någon du känner utsatt för fysiskt, psykiskt eller
            sexuellt våld?{" "}
          </p>
          <p className="max-w-lg mx-auto text-base leading-relaxed text-center"></p>
          <div className="flex justify-center mt-6 mb-10">
            <div className="inline-flex w-16 h-1 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="clearfix mx-auto">
          <div className="-mx-2 ">
            <div className="float-left w-full px-2 mb-4 float md:w-1/2">
              <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                <img
                  alt="gallery"
                  className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                  src={about}
                />
                <div className="z-10 w-full text-center sm:h-20">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900 title-font">
                    Sök stöd
                  </h2>
                  <p className="text-base leading-relaxed">
                    Kom i kontakt med en jourkvinna. Vi har tystnadslöfte.
                  </p>
                  <div className="absolute bottom-0 left-0 flex flex-col items-center justify-end w-full h-full">
                    <Link
                      to="/kontakta-oss"
                      className="inline-flex items-center justify-center px-4 py-2 mb-5 text-white bg-purple-500 rounded-full"
                    >
                      Klicka här
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-left w-full px-2 mb-4 loat md:w-1/2">
              <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-200 hover:bg-purple-100 sm:py-24 sm:px-10">
                <img
                  alt="gallery"
                  className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                  src={womanViolence}
                />
                <div className="z-10 w-full text-center sm:h-20">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900 title-font">
                    Mäns våld
                  </h2>
                  <p className="text-base leading-relaxed">
                    Män som utövar våld finns i alla samhällsklasser.
                  </p>
                  <div className="absolute bottom-0 left-0 flex flex-col items-center justify-end w-full h-full">
                    <Link
                      to="/valdmotkvinnor"
                      className="inline-flex items-center justify-center px-4 py-2 mb-5 text-white bg-purple-500 rounded-full"
                    >
                      Läs mer
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForSupportSeekers
