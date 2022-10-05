import React from "react"
import { Link } from "gatsby"

import SwishLogo from "../images/swish-logo.svg"

const SupportUs = () => {
  return (
    <section className="text-gray-700 bg-white body-font" id="support">
      <div className="container flex flex-wrap justify-center px-5 py-24 mx-auto">
        <div className="w-full px-3 md:px-0">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl text-center text-gray-900 sm:text-4xl title-font">
              Stöd oss
            </h1>
            <p className="max-w-lg mx-auto text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4">
              Som ideell organisation är vi beroende av ekonomiskt stöd. Det
              hjälper oss att förbättra villkoren för våldsutsatta kvinnor,
              tjejer och barn. Vi tar tacksamt emot alla bidrag, stora som små.
            </p>
            <div className="flex justify-center mt-6 mb-10">
              <div className="inline-flex w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>
          </div>

          <h2 className="mb-4 text-xl text-center text-gray-900 sm:text-2xl title-font">
            Ekonomiskt bidrag
          </h2>

          <div className="flex flex-col lg:flex-row md:m-4">
            <div className="w-full py-4 lg:w-2/4 lg:px-4">
              <div className="flex flex-col items-center p-8 border-2 border-gray-200 rounded-lg sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 text-purple-500 bg-purple-100 rounded-full sm:mr-8 sm:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9f7aea"
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                  >
                    <path
                      className="heroicon-ui"
                      d="M19 10v6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2v-6a2 2 0 0 1-2-2V7a1 1 0 0 1 .55-.9l8-4a1 1 0 0 1 .9 0l8 4A1 1 0 0 1 21 7v1a2 2 0 0 1-2 2zm-6 0h-2v6h2v-6zm4 0h-2v6h2v-6zm-8 0H7v6h2v-6zM5 7.62V8h14v-.38l-7-3.5-7 3.5zM5 18v2h14v-2H5z"
                    />
                  </svg>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    PLUSGIRO
                  </h2>
                  <p className="text-base leading-relaxed">
                    Sänd valfritt belopp
                  </p>
                  <p>
                    <strong>PG: 162046-7</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 mb-10 lg:w-1/2 md:w-full lg:px-4">
              <div className="flex flex-col items-center p-8 border-2 border-gray-200 rounded-lg sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 bg-purple-100 rounded-full sm:mr-8 sm:mb-0">
                  <img src={SwishLogo} alt="Betalning med Swish" />
                </div>
                {/* offset engagera dig */}
                <div id="engagera-dig"></div>
                <div className="flex-grow text-center sm:text-left">
                  <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    SWISH
                  </h2>
                  <p className="text-base">Swisha valfritt belopp</p>
                  <p>
                    <strong>123 3781 614</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 text-center">
            <h2 className="mb-4 text-xl text-center text-gray-900 sm:text-2xl title-font">
              Engagera dig
            </h2>
            <p className="max-w-lg mx-auto mb-4 text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4">
              Som jourkvinna stödjer du kvinnor, tjejer och barn som blivit
              utsatta för mäns våld.
            </p>

            <Link
              to="/engagera-dig"
              className="px-8 py-2 text-lg text-white bg-purple-500 border-0 rounded-full hover:bg-purple-600"
            >
              Läs mer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportUs
