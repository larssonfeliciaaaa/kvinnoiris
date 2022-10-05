import React from "react"
import { Link } from "gatsby"

import kvinnojourensvg from "../images/departments/kvinnojouren.svg"
import tjejjourensvg from "../images/departments/tjejjouren.svg"
import tantjourensvg from "../images/departments/tantjouren.svg"

const Departments = () => {
  return (
    <section className="text-gray-700 bg-gray-100 body-font departments">
      <div className="container px-5 py-24 mx-auto">
        <div className="px-3 md:px-0">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font">
              Vilka är vi?
            </h1>
            <p className="max-w-lg mx-auto text-base leading-relaxed text-center ">
              Kvinnojouren Iris i Luleå är en feministisk organisation som
              kämpar mot mäns våld mot kvinnor i alla dess former.
            </p>
            <div className="flex justify-center mt-6 mb-10">
              <div className="inline-flex w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
            {/* START ROW 1 */}
            <div className="flex flex-wrap justify-center mx-auto md:pb-6 ">
              <div className="flex flex-col items-center max-w-lg p-4 mb-6 text-center md:p-12 md:w-1/2 md:mb-0">
                <div className="flex items-end w-full mb-4 h-30">
                  <img
                    className="mx-auto"
                    src={kvinnojourensvg}
                    alt="Kvinnojouren illustration"
                  />
                </div>

                <div className="flex-grow w-full">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Kvinnojouren
                  </h2>
                  <p className="text-base leading-relaxed text-center">
                    Vi består av ideella jourtjejer och jourkvinnor som verkar
                    för kvinnor, tjejer och barns ökade rättigheter i samhället
                    och ger stöd och skydd till kvinnor, tjejer och barn som
                    utsätts för olika former av mäns och killars våld.
                  </p>
                  <Link
                    to="/om-oss"
                    className="inline-flex items-center mt-3 text-purple-500"
                  >
                    Läs mer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* COL 2 */}
              <div className="flex flex-col items-center max-w-lg p-4 mb-6 text-center md:p-12 md:w-1/2 md:mb-0">
                <div className="flex items-end w-full mb-4 h-30">
                  <img
                    className="mx-auto"
                    src={tjejjourensvg}
                    alt="Tjejjouren illustration"
                  />
                </div>
                <div className="flex-grow w-full">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Tjejjouren
                  </h2>
                  <p className="text-base leading-relaxed text-center">
                    Vi består av ideella jourtjejer som stöttar tjejer och unga
                    kvinnor som utsätts för alla former av våld och verkar för
                    tjejers ökade rättigheter i samhället.
                  </p>
                  <Link
                    to="/tjejjouren"
                    className="inline-flex items-center mt-3 text-purple-500"
                  >
                    Läs mer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* END COL 2 */}
            </div>

            {/* END ROW 1 */}
            {/* START ROW 2 */}
            <div className="flex flex-wrap justify-center mx-auto">
              <div className="flex flex-col items-center max-w-lg p-4 mb-6 text-center md:p-12 md:w-full md:mb-0">
                <div className="flex items-end w-full mb-4 h-30">
                  <img
                    className="mx-auto"
                    src={tantjourensvg}
                    alt="Tantjouren illustration"
                  />
                </div>
                <div className="flex-grow w-full">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Tantjouren
                  </h2>
                  <p className="text-base leading-relaxed text-center">
                    Vi finns för äldre kvinnor som behöver någon att samtala med
                    om att utsättas för våld.
                  </p>
                  <Link
                    to="/tantjouren"
                    className="inline-flex items-center mt-3 text-purple-500"
                  >
                    Läs mer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END ROW 2 */}
        </div>
      </div>
    </section>
  )
}

export default Departments
