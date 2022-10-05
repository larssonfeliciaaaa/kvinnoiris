import React from "react"
import { Link } from "gatsby"

import kjlogo from "../images/LOGO.svg"
import FacebookLogo from "../images/fb-logo.svg"
import InstagramLogo from "../images/ig-logo.svg"

const Footer = () => {
  return (
    <footer className="text-gray-700 bg-gray-200 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
            to="/"
          >
            <img src={kjlogo} alt="Kvinnojouren iris logga" width="150" />
          </Link>
          <p className="pt-3 mt-2 text-sm text-center text-gray-700 md:text-left">
            Kvinnojouren Iris i Luleå är en feministisk organisation som kämpar
            mot mäns våld mot kvinnor i alla dess former.
          </p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              KVINNOJOUREN
            </h2>
            <nav className="mb-10 list-none">
              <ul>
                <li className="my-1">
                  <Link to="/" className="text-gray-700 hover:text-purple-500">
                    Hem
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/aktuellt"
                    className="text-gray-700 hover:text-purple-500"
                  >
                    Aktuellt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              ARBETSGRUPPER
            </h2>
            <nav className="mb-10 list-none">
              <ul>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/om-oss"
                  >
                    Kvinnojouren
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/tjejjouren"
                  >
                    Tjejjouren
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/tantjouren"
                  >
                    Tantjouren
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              MER
            </h2>
            <nav className="mb-10 list-none">
              <ul>
                <li className="my-1">
                  <Link
                    to="/om-oss"
                    className="text-gray-700 hover:text-purple-500"
                  >
                    Om oss
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/#support"
                  >
                    Stöd oss
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/kontakta-oss"
                  >
                    Kontakta oss
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    className="text-gray-700 hover:text-purple-500"
                    to="/valdmotkvinnor"
                  >
                    Våld mot kvinnor
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-700 sm:text-left">
            © 2020 Kvinnojouren Iris
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              className="text-gray-700"
              target="_blank"
              href="https://www.facebook.com/kvinnojoureniris/"
              rel="noreferrer"
            >
              <img src={FacebookLogo} alt="Kvinnojouren Iris Facebooksida" />
            </a>

            <a
              className="ml-3 text-gray-700"
              target="_blank"
              href="https://www.instagram.com/kvinnojoureniris/"
              rel="noreferrer"
            >
              <img src={InstagramLogo} alt="Kvinnojouren Iris Instagram" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
