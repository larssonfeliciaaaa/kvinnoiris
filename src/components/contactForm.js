import React from "react"
import { Link } from "gatsby"

import FacebookLogo from "../images/fb-logo-big.svg"
import InstagramLogo from "../images/ig-logo-big.svg"
import MessengerLogo from "../images/messenger-logo-big.svg"

import contactPageImg from "../images/contact-1.svg"
import socialMediaImage from "../images/womanpattern.png"

const ContactForm = () => {
  return (
    <section className="relative text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font">
            Kontakta oss
          </h1>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="-m-2">
            <div className="w-full mx-auto">
              <div className="clearfix -mx-2 ">
                <div className="float-left w-full px-2 mb-4 float md:w-1/2 md:mb-0">
                  <div className="relative w-full px-6 py-16 mb-2 bg-white sm:py-24 sm:px-10">
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <img
                      alt="gallery"
                      className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                      src={contactPageImg}
                    />
                    <div className="relative z-10 w-full text-center ">
                      <h2 className="mb-2 text-2xl font-bold text-gray-900 title-font">
                        Kontaktsida
                      </h2>
                      <p className="text-base leading-relaxed">
                        Här hittar du samtliga kontaktuppgifter till
                        Kvinnojouren Iris
                      </p>
                      <Link
                        to="/kontakta-oss"
                        className="inline-flex items-center px-8 py-2 mt-4 text-lg text-white bg-purple-500 border-0 rounded-full hover:bg-purple-600"
                      >
                        Klicka här
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

                <div className="float-left w-full px-2 float md:w-1/2">
                  <div className="relative w-full px-6 py-16 bg-gray-200 h-100 sm:py-24 sm:px-10">
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-25"></div>
                    <img
                      alt="gallery"
                      className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                      src={socialMediaImage}
                    />
                    <div className="relative z-10 w-full text-center ">
                      <h2 className="mb-2 text-2xl font-bold text-gray-900 title-font">
                        Sociala medier
                      </h2>
                      <p className="text-base leading-relaxed">
                        Du kan också komma i kontakt med oss på sociala medier.
                      </p>
                      <span className="inline-flex pt-2">
                        <a
                          className="text-gray-500 transition duration-100 ease-in transform hover:scale-110"
                          href="https://www.facebook.com/kvinnojoureniris"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={FacebookLogo}
                            alt="Kvinnojouren Iris Facebook sida"
                          />
                        </a>

                        <a
                          className="ml-4 text-gray-500 transition duration-100 ease-in transform hover:scale-110"
                          href="https://www.instagram.com/kvinnojoureniris/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={InstagramLogo}
                            alt="Kvinnojouren Iris Instagram sida"
                          />
                        </a>
                        <a
                          className="ml-4 text-gray-500 transition duration-100 ease-in transform hover:scale-110"
                          href="https://www.facebook.com/kvinnojoureniris"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={MessengerLogo}
                            alt="Kvinnojouren Iris Facebook messenger"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
