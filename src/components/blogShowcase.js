import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogShowcasePost from "./blogShowcasePost"

const BlogShowcase = props => {
  const blogpostsData = useStaticQuery(graphql`
    query {
      allContentfulPost(
        limit: 3
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            publishedDate(formatString: "YYYY MM, DD")
            slug
            shortDescription
            topImage {
              description
              file {
                url
              }
              resize(
                width: 460
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
    <section className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="px-3 md:px-0">
          <div className="flex flex-col flex-wrap items-center w-full mb-10 text-center">
            <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font">
              Senaste nytt
            </h1>
            <div className="flex justify-center mt-6 mb-10">
              <div className="inline-flex w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="-m-4 container-row">
            {blogpostsData.allContentfulPost.edges.map(edge => (
              <BlogShowcasePost
                key={edge.node.slug}
                postHeading={edge.node.title}
                postDescription={edge.node.shortDescription}
                postLink={edge.node.slug}
                postThumbnail={edge.node.topImage.resize.src}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/aktuellt"
            className="px-8 py-2 text-lg text-white bg-purple-500 border-0 rounded-full hover:bg-purple-600"
          >
            Se fler inlägg
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogShowcase
