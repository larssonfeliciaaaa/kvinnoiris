import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import SEO from "../components/seo"
import Layout from "../components/layout"
import LeavePage from "../components/leavePage"
import Blogpost from "../components/blogpost"
import Breadcrumb from "../components/breadcrumb"

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD-MMMM-YYYY", locale: "sv")
            shortDescription
            topImage {
              description
              file {
                url
              }
              resize(
                width: 600
                height: 500
                resizingBehavior: FILL
                jpegProgressive: true
                toFormat: JPG
              ) {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Aktuellt - Kvinnojouren Iris i Luleå"
        keywords="Kvinnojour, aktuellt, senaste nytt, kvinnojouren iris, luleå"
        description="Vad är aktuellt för kvinnojouren Iris i Luleå? Här kan du läsa mer om kvinnojouren Iris verksamhet"
      />

      <LeavePage />
      <div className="wrapper lg:px-10">
        <div className="relative aktuellt-hero">
          <div className="aktuellt-hero-overlay"></div>
        </div>
        <Breadcrumb page="Aktuellt" link="aktuellt" />
        <section className="max-w-screen-xl mt-10 text-gray-700 xl:mx-auto body-font">
          <div className="flex flex-col pt-4 pb-24  sm:px-5 xl:px-0">
            <div className="px-3 md:px-0">
              <div className="pb-4 mb-4  sm:py-4 sm:mt-0 sm:text-left">
                <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font text-bold">
                  Aktuellt på kvinnojouren Iris
                </h1>
                <p className="max-w-lg text-base leading-relaxed ">
                  Här kan du hitta alla inlägg publicerade av Kvinnojouren iris.
                </p>
              </div>

              <div className="py-10 my-10 md:bg-gray-200">
                <div className="container-row">
                  {data.allContentfulPost.edges.map((edge, i) => {
                    return (
                      <Blogpost
                        key={edge.node.slug}
                        title={edge.node.title}
                        date={edge.node.publishedDate}
                        shortDesc={edge.node.shortDescription}
                        url={edge.node.slug}
                        image={edge.node.topImage.resize.src}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NewsPage
