import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

// components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import LeavePage from "../components/leavePage"

// styles

const TjejjourenPage = () => {
  const [chatOpen, setChatOpen] = React.useState(false)

  React.useEffect(() => {
    const date = new Date()
    const day = date.getDay()
    const time = date.getHours()

    if (day === 4 && time <= 20 && time > 18) {
      setChatOpen(true)
    } else {
      setChatOpen(false)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          tjejjouren {
            email
            stodchattTid
            stodchattUrl
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Tjejjouren iris - Tjejjour i luleå"
        description="Vi är en tjejjour i Luleå. Du kan nå oss via chatt, mail, eller stödsamtal."
      />
      <LeavePage />

      <div className="wrapper lg:px-10">
        <div className="relative flex items-center justify-center tjejjouren-hero">
          <div className="tjejjouren-hero-overlay"></div>
        </div>
        <Breadcrumb page="Tjejjouren" link="tjejjouren" />
        <section className="max-w-screen-xl text-gray-700 xl:mx-auto body-font">
          <div className="container flex flex-col pt-4 pb-24 sm:px-5 xl:px-0">
            <div className="px-3 md:px-0">
              <div className="">
                <div className="flex flex-col-reverse justify-end mt-10 xl:flex-row-reverse">
                  <div className="max-w-2xl md:py-4 xl:pl-4">
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-row items-center w-full p-2 bg-purple-600 rounded ">
                        <svg
                          width="72"
                          height="72"
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
                            d="M4 3C2.89543 3 2 3.89543 2 5V12C2 13.1046 2.89543 14 4 14H5V16.6284C5 17.0351 5.45969 17.2717 5.79062 17.0353L10.04 14H16C17.1046 14 18 13.1046 18 12V5C18 3.89543 17.1046 3 16 3H4ZM22 10.87C22 9.76543 21.1046 8.87 20 8.87H19V13C19 14.1046 18.1046 15 17 15H10V15.87C10 16.9746 10.8954 17.87 12 17.87H14.66L18.2094 20.4053C18.5403 20.6417 19 20.4051 19 19.9984V17.87H20C21.1046 17.87 22 16.9746 22 15.87V10.87ZM11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8ZM14 9C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9ZM7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                        <h2 className="p-2 mb-0 text-xl text-white">
                          Tjejjouren Iris stödchatt
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          Våra ideella jourtjejer har tystnadslöfte vilket
                          innebär att du får vara helt anonym.
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Vi har öppet vår stödchatt torsdagar mellan kl.{" "}
                          <span className="inline-flex items-center bg-gray-300 rounded-full text-md">
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
                            {data.site.siteMetadata.tjejjouren.stodchattTid}
                          </span>
                          .
                        </p>

                        {chatOpen ? (
                          <>
                            <p className="inline-block p-2 text-green-800 bg-green-200 rounded">
                              Chatten är öppen
                            </p>
                            <a
                              className="block p-2 font-bold text-purple-500"
                              target="_blank"
                              rel="noreferrer"
                              href={
                                data.site.siteMetadata.tjejjouren.stodchattUrl
                              }
                            >
                              Gå till chatten &rarr;
                            </a>
                          </>
                        ) : (
                          <p className="inline-block p-2 text-red-800 bg-red-200 rounded">
                            Chatten är stängd
                          </p>
                        )}
                      </div>
                    </article>
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-col justify-center w-full p-2 bg-gray-400 rounded ">
                        <h2 className="p-2 mb-0 text-xl text-black">
                          Kontakta tjejjouren
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          <strong>
                            Vill du komma i kontakt med en jourtjej?
                          </strong>
                        </p>

                        <p className="mb-2 text-lg leading-relaxed">
                          Förutom stödchatten kan du även maila tjejjouren.
                        </p>

                        <div className="text-lg">
                          <a
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href={`mailto:${data.site.siteMetadata.tjejjouren.email}`}
                          >
                            <svg
                              className="inline mr-2"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M13.6 13.4675C12.9103 14.1902 12.0196 14.6893 11.0431 14.9002C10.0666 15.111 9.04924 15.0239 8.1228 14.6501C7.19635 14.2763 6.40344 13.633 5.84669 12.8035C5.28994 11.974 4.99499 10.9965 5 9.99748C5 8.6714 5.52679 7.39963 6.46447 6.46195C7.40215 5.52427 8.67392 4.99748 10 4.99748C11.3261 4.99748 12.5979 5.52427 13.5355 6.46195C14.4732 7.39963 15 8.6714 15 9.99748V11.4975C15 11.8953 15.158 12.2768 15.4393 12.5581C15.7206 12.8394 16.1022 12.9975 16.5 12.9975C16.8978 12.9975 17.2794 12.8394 17.5607 12.5581C17.842 12.2768 18 11.8953 18 11.4975V9.99748C17.9982 8.28163 17.4448 6.61181 16.4214 5.23453C15.3981 3.85725 13.959 2.8455 12.3167 2.34861C10.6743 1.85173 8.91576 1.89606 7.30054 2.47504C5.68532 3.05403 4.29905 4.137 3.34637 5.56409C2.3937 6.99117 1.9251 8.68675 2.00975 10.4005C2.0944 12.1143 2.72782 13.7554 3.81649 15.0817C4.90517 16.4079 6.39141 17.349 8.05583 17.766C9.72024 18.183 11.4746 18.0538 13.06 17.3975C13.1826 17.3352 13.3167 17.299 13.454 17.2909C13.5913 17.2828 13.7287 17.3032 13.8578 17.3506C13.9868 17.3981 14.1047 17.4716 14.204 17.5667C14.3034 17.6618 14.382 17.7763 14.4351 17.9031C14.4882 18.03 14.5146 18.1664 14.5125 18.3039C14.5105 18.4414 14.4802 18.577 14.4234 18.7022C14.3666 18.8274 14.2846 18.9396 14.1825 19.0317C14.0804 19.1238 13.9604 19.1938 13.83 19.2375C11.8482 20.0592 9.65469 20.2217 7.57342 19.7011C5.49215 19.1805 3.63348 18.0044 2.27193 16.3464C0.910378 14.6884 0.118132 12.6365 0.0122021 10.4938C-0.0937284 8.35099 0.492273 6.23095 1.68366 4.44677C2.87504 2.66259 4.60864 1.30886 6.62842 0.585523C8.64819 -0.137815 10.847 -0.19241 12.9002 0.429801C14.9534 1.05201 16.7521 2.31804 18.0305 4.0409C19.309 5.76375 19.9995 7.85209 20 9.99748V11.4975C20.0022 12.2477 19.7634 12.9788 19.3186 13.5829C18.8738 14.1871 18.2467 14.6323 17.5297 14.853C16.8127 15.0737 16.0437 15.0582 15.3362 14.8088C14.6287 14.5593 14.02 14.0891 13.6 13.4675V13.4675ZM10 12.9975C10.7957 12.9975 11.5587 12.6814 12.1213 12.1188C12.6839 11.5562 13 10.7931 13 9.99748C13 9.20183 12.6839 8.43877 12.1213 7.87616C11.5587 7.31355 10.7957 6.99748 10 6.99748C9.20436 6.99748 8.44129 7.31355 7.87868 7.87616C7.31607 8.43877 7 9.20183 7 9.99748C7 10.7931 7.31607 11.5562 7.87868 12.1188C8.44129 12.6814 9.20436 12.9975 10 12.9975V12.9975Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            {data.site.siteMetadata.tjejjouren.email}
                          </a>
                        </div>
                      </div>
                    </article>

                    <div className="p-4 mb-10 border-2 border-gray-200 rounded">
                      <h2 className="mb-2 text-xl text-gray-900">
                        Läs mer om våra arbetsgrupper
                      </h2>
                      <ul className="w-full">
                        <li>
                          <Link to="/om-oss">
                            <div className="w-full ">
                              <div className="flex items-center h-full p-1 bg-gray-100 rounded hover:bg-purple-200">
                                <svg
                                  className="ml-2 mr-4"
                                  width="18"
                                  height="39"
                                  viewBox="0 0 26 39"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="6.50006"
                                    y="31.5625"
                                    width="9.74999"
                                    height="3.65624"
                                    fill="#9F7AEA"
                                  />
                                  <circle
                                    cx="11.5781"
                                    cy="18.5781"
                                    r="9.54686"
                                    stroke="#9F7AEA"
                                    strokeWidth="4.06249"
                                  />
                                  <rect
                                    x="9"
                                    y="29"
                                    width="5"
                                    height="10"
                                    fill="#9F7AEA"
                                  />
                                </svg>

                                <span className="font-medium title-font">
                                  Kvinnojouren
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/tantjouren">
                            <div className="w-full ">
                              <div className="flex items-center h-full p-1 bg-gray-100 rounded hover:bg-purple-200">
                                <svg
                                  className="ml-2 mr-4"
                                  width="18"
                                  height="39"
                                  viewBox="0 0 26 39"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="6.50006"
                                    y="31.5625"
                                    width="9.74999"
                                    height="3.65624"
                                    fill="#9F7AEA"
                                  />
                                  <circle
                                    cx="11.5781"
                                    cy="18.5781"
                                    r="9.54686"
                                    stroke="#9F7AEA"
                                    strokeWidth="4.06249"
                                  />
                                  <rect
                                    x="9"
                                    y="29"
                                    width="5"
                                    height="10"
                                    fill="#9F7AEA"
                                  />
                                </svg>

                                <span className="font-medium title-font">
                                  Tantjouren
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>

                        <li>
                          <Link to="/tjejjouren">
                            <div className="w-full ">
                              <div className="flex items-center h-full p-1 bg-gray-100 rounded hover:bg-purple-200">
                                <svg
                                  className="ml-2 mr-4"
                                  width="18"
                                  height="39"
                                  viewBox="0 0 26 39"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="6.50006"
                                    y="31.5625"
                                    width="9.74999"
                                    height="3.65624"
                                    fill="#9F7AEA"
                                  />
                                  <circle
                                    cx="11.5781"
                                    cy="18.5781"
                                    r="9.54686"
                                    stroke="#9F7AEA"
                                    strokeWidth="4.06249"
                                  />
                                  <rect
                                    x="9"
                                    y="29"
                                    width="5"
                                    height="10"
                                    fill="#9F7AEA"
                                  />
                                </svg>

                                <span className="font-medium title-font">
                                  Tjejjouren
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pb-4 mb-4 border-b border-gray-300 sm:max-w-3xl sm:py-4 lg:mr-8 lg:border-b-0 sm:mt-0 sm:text-left">
                    <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font">
                      Tjejjouren Iris
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed">
                      Tjejjouren Iris är en del av Kvinnojouren Iris, vi består
                      av ideella jourtjejer som stöttar tjejer och unga kvinnor
                      som utsätts för alla former av våld och verkar för tjejers
                      ökade rättigheter i samhället. Vi utbildar, informerar och
                      skapar debatt om våld mot tjejer och arbetar förebyggande
                      mot mäns och killars våld mot tjejer. Tjejjouren Iris
                      verksamhet bygger på kunskap och erfarenhet från 1998.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Du kan söka stöd hos oss genom chatt, mail, telefon eller
                      stödsamtal. Våra ideella jourtjejer har tystnadslöfte
                      vilket innebär att du får vara helt anonym. Vi lyssnar på
                      dig, tror på din berättelse och ifrågasätter dig aldrig.
                      Våra ideella jourtjejer ger också stöd till tjejer som bor
                      på kvinnojourens skyddade boende.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TjejjourenPage
