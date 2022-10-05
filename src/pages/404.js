import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="Sidan kunde ej hittas" />
      <div className="relative notfound-hero">
        <div className="notfound-hero-overlay"></div>
      </div>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col px-5 pt-4 pb-24 mx-auto">
          <div className="px-3 md:px-0">
            <div className="">
              <div className="flex flex-col justify-center mt-10">
                <div className="pb-4 mb-4 border-b border-gray-300 sm:max-w-lg sm:pr-8 sm:py-4 sm:mt-0 sm:text-left">
                  <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
                    Sidan kunde ej hittas
                  </h1>

                  <Link
                    to="/"
                    className="px-8 py-2 text-lg text-white bg-purple-500 border-0 rounded-full hover:bg-purple-600"
                  >
                    Gå till startsida
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
