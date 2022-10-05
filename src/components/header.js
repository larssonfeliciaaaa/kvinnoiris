import React, { useRef } from "react"
import { Link } from "gatsby"
import kjlogo from "../images/LOGO.svg"

const Header = () => {
  const hamburgerToggler = useRef()
  const closeHamburgerWhenClicked = () => {
    hamburgerToggler.current.checked = false
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full text-gray-700 bg-white shadow body-font sm:px-10">
      {/* Mobile header  */}
      <div className="shadow menu-wrap md:hidden ">
        <input
          ref={hamburgerToggler}
          type="checkbox"
          className="toggler"
          aria-label="meny toggler"
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="p-2 bg-white menu-logo">
          <Link to="/">
            <img src={kjlogo} width="100" alt="Kvinnojouren Iris Logga" />
          </Link>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/aktuellt"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Aktuellt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/valdmotkvinnor"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Våld mot kvinnor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/om-oss"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Om Kvinnojouren
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tjejjouren"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Tjejjouren
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tantjouren"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Tantjouren
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeHamburgerWhenClicked}
                    to="/#support"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Stöd oss
                  </Link>
                </li>
                <li>
                  <Link
                    to="/engagera-dig"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Engagera dig
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kontakta-oss"
                    className="text-black hover:text-purple-600"
                    activeClassName="text-purple-600"
                  >
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="z-40 hidden md:block">
        <div className="container relative z-50 flex flex-row flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          {/* Header left side */}
          <Link
            to="/"
            className="flex items-center font-medium text-gray-900 bg-white rounded-full title-font"
          >
            <img className="p-2 md:w-40" src={kjlogo} alt="kvinnojouren iris" />
          </Link>

          {/* Header right side */}
          <div className="flex flex-row ">
            {/* Links outside hamurger */}
            <nav className="flex flex-wrap items-center justify-center text-base menu-bar md:ml-auto">
              <div className="dropdown">
                {/* <Link
                  className="inline-block py-8 mx-4 hover:text-gray-900"
                  activeClassName=" border-b-2 border-purple-500 mt-1"
                  to="/"
                >
                  Hem
                  </Link> */}

                <Link
                  className="inline-block py-8 mx-4 hover:text-gray-900"
                  activeClassName="text-purple-500  border-b-2 border-purple-500 mt-1"
                  to="/aktuellt"
                >
                  Aktuellt
                </Link>

                <div className="about hover:text-gray-900">
                  <button className="inline-block py-8 mx-4 hover:text-gray-900">
                    Om
                  </button>
                  <ul>
                    <li className="relative bg-gray-100">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/om-oss"
                      >
                        Om Kvinnojouren Iris
                      </Link>
                    </li>
                    <li className="relative bg-gray-100 ">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/valdmotkvinnor"
                      >
                        Våld mot kvinnor
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="engage hover:text-gray-900">
                  <button className="inline-block py-8 mx-4 hover:text-gray-900">
                    Stöd oss
                  </button>
                  <ul>
                    <li className="relative bg-gray-100 ">
                      <Link
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/#support"
                      >
                        Stöd oss
                      </Link>
                    </li>
                    <li className="relative bg-gray-100 ">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/engagera-dig"
                      >
                        Engagera dig
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="inline-block pl-2 jouren hover:text-gray-900">
                  <button className="inline-block py-8 mx-4 hover:text-gray-900">
                    Jouren
                  </button>
                  <ul>
                    <li className="relative bg-gray-100">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/om-oss"
                      >
                        Kvinnojouren
                      </Link>
                    </li>
                    <li className="relative bg-gray-100">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/tjejjouren"
                      >
                        Tjejjouren
                      </Link>
                    </li>
                    <li className="relative bg-gray-100">
                      <Link
                        activeClassName="text-purple-500"
                        className="absolute top-0 left-0 flex items-center w-full h-full pl-4"
                        to="/tantjouren"
                      >
                        Tantjouren
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link
                  className="inline-block py-8 mx-4 hover:text-gray-900"
                  activeClassName="border-b-2 text-purple-500 border-purple-500 mt-1"
                  to="/kontakta-oss"
                >
                  Kontakta oss
                </Link>

                <a
                  href="https://www.google.se/"
                  className="inline-flex items-center hidden px-3 py-1 ml-4 text-base text-white bg-pink-600 border-0 rounded cursor-pointer lg:flex focus:outline-none hover:bg-pink-900 md:mt-0"
                >
                  Lämna sidan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
