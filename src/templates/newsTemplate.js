import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import LeavePage from "../components/leavePage"
import { Helmet } from "react-helmet"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      shortDescription
      publishedDate(formatString: "DD-MMMM-YYYY", locale: "sv")
      topImage {
        file {
          url
        }
        resize {
          src
        }
      }
      body {
        json
      }
    }
  }
`

const newsTemplate = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const src = node.data.target.fields.file["en-US"].url
        if (alt && src) {
          return <img alt={alt} src={src} />
        }
      },
    },
  }

  // check if resized image is available, otherwise use normal image

  const thumbnailSrc = props.data.contentfulPost.topImage.file.url

  return (
    <Layout>
      <SEO description={props.data.contentfulPost.shortDescription} />
      <Helmet title={props.data.contentfulPost.title} />
      <LeavePage />
      <main>
        <div className="post-hero relative bg-gray-300">
          <div className="post-thumbnail-wrapper">
            <img
              alt={props.data.contentfulPost.title}
              className="object-cover my-0 object-center h-full w-full"
              src={thumbnailSrc}
            />
          </div>
        </div>
        <div className="post-hero-breadcrumb">
          <Breadcrumb
            page={props.data.contentfulPost.title}
            link={props.data.contentfulPost.slug}
          />
        </div>
        <section className="mt-10 post-body body-font">
          <div className="container mx-0 pt-8 pb-24 flex flex-col">
            <div className=" sm:mt-0 relative  ">
              <div className="px-5 lg:px-0 flex flex-col sm:flex-row">
                <div>
                  <div className="max-w-xl flex flex-col mb-10">
                    <h1 className=" text-2xl sm:text-3xl mb-2">
                      {props.data.contentfulPost.title}
                    </h1>
                    <p>
                      <span className="inline-flex bg-gray-200 p-2 rounded-full">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            fill="none"
                            rx="0"
                            ry="0"
                          ></rect>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12.75H13.29C13.04 13.2 12.55 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.45 10.8 10.96 11.25 10.71V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V10.71C12.97 10.83 13.16 11.02 13.29 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75ZM12.75 12C12.75 12.22 12.65 12.42 12.5 12.55C12.37 12.68 12.19 12.75 12 12.75C11.59 12.75 11.25 12.41 11.25 12C11.25 11.81 11.32 11.63 11.45 11.5C11.58 11.35 11.78 11.25 12 11.25C12.19 11.25 12.37 11.32 12.5 11.45C12.52 11.47 12.54 11.49 12.55 11.51C12.591 11.5478 12.626 11.5916 12.6547 11.6397C12.7147 11.7458 12.75 11.8694 12.75 12Z"
                            fill="#999999"
                          ></path>
                        </svg>
                        &nbsp;Publicerad{" "}
                        {props.data.contentfulPost.publishedDate.replace(
                          /-/g,
                          " "
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="post-wrapper text-base text-gray-800 max-w-xl">
                    {documentToReactComponents(
                      props.data.contentfulPost.body.json,
                      options
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default newsTemplate
