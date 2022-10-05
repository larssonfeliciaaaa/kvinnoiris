import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import LeavePage from "../components/leavePage"
import Breadcrumb from "../components/breadcrumb"

const EngagePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          kvinnojouren {
            tel
            email
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Engagera dig - Kvinnojouren Iris i Luleå"
        description="Vill du engagera dig i en kvinnojour eller tjejjour och hjälpa våldsutsatta kvinnor, tjejer och barn?"
      />

      <LeavePage />

      <div className="wrapper lg:px-10">
        <div className="relative engage-hero">
          <div className="engage-hero-overlay"></div>
        </div>
        <Breadcrumb page="Engagera dig" link="engagera-dig" />
        <section className="max-w-screen-xl text-gray-700 xl:mx-auto body-font">
          <div className="container flex flex-col pt-4 pb-24 sm:px-5 xl:px-0">
            <div className="px-3 md:px-0 ">
              <div>
                <div className="flex flex-col-reverse justify-end mt-10 xl:flex-row-reverse">
                  <div className="max-w-2xl md:py-4 xl:pl-4">
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-col justify-center w-full p-2 bg-gray-400 rounded ">
                        <h2 className="p-2 mb-0 text-xl text-black">
                          Vill du engagera dig?
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          Om du är intresserad av att engagera dig i vår
                          förening och stödja kvinnor, tjejer och barn. Kontakta
                          oss via mail eller telefon.
                        </p>
                        <div className="text-lg">
                          <a
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href={`tel:${data.site.siteMetadata.kvinnojouren.tel}`}
                          >
                            <svg
                              className="inline mr-2"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 21 20"
                              fill="currentColor"
                            >
                              <path
                                d="M11.072 12.69L12.1451 10.55C12.253 10.3373 12.4336 10.1701 12.6542 10.0784C12.8749 9.98673 13.1211 9.97666 13.3486 10.05L19.366 12.05C19.567 12.1154 19.7422 12.2425 19.8665 12.4131C19.9908 12.5837 20.0578 12.7891 20.058 13V18C20.058 18.5304 19.8466 19.0391 19.4705 19.4142C19.0943 19.7893 18.5841 20 18.0522 20H16.0464C11.7906 20 7.70915 18.3143 4.69988 15.3137C1.6906 12.3131 0 8.24347 0 4V2C0 0.900003 0.902609 3.33354e-06 2.0058 3.33354e-06H7.02029C7.23054 -0.000537828 7.43565 0.0648223 7.60661 0.186845C7.77758 0.308868 7.90576 0.481382 7.97304 0.680003L9.97884 6.68C10.0551 6.90811 10.0464 7.15598 9.95431 7.3782C9.86222 7.60043 9.6929 7.78212 9.47739 7.89L7.32116 8.96C8.21277 10.5133 9.5042 11.801 11.062 12.69H11.072ZM6.2982 2H2.0058V4C2.0058 7.71303 3.48507 11.274 6.11819 13.8995C8.75131 16.525 12.3226 18 16.0464 18H18.0522V13.72L13.5391 12.22L12.4159 14.48C12.2993 14.7089 12.0989 14.8843 11.8562 14.9699C11.6135 15.0555 11.3471 15.0448 11.1121 14.94C8.43328 13.7359 6.28672 11.5991 5.07467 8.93C4.96953 8.69569 4.95879 8.43003 5.04466 8.18803C5.13054 7.94604 5.30646 7.74624 5.536 7.63L7.80255 6.49L6.2982 2Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            {data.site.siteMetadata.kvinnojouren.tel}
                          </a>
                          <a
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href={`mailto:${data.site.siteMetadata.kvinnojouren.email}`}
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
                            {data.site.siteMetadata.kvinnojouren.email}
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
                  <div className="pb-4 mb-4 border-b border-gray-300 sm:max-w-2xl sm:pr-10 sm:py-4 lg:mr-8 lg:border-b-0 sm:mt-0 sm:text-left">
                    <h1 className="mb-4 text-3xl text-gray-900 sm:text-4xl title-font text-bold">
                      Engagera dig i kvinnojouren Iris
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed">
                      Som jourkvinna stödjer du kvinnor, tjejer och barn som
                      blivit utsatta för mäns våld. Du stödjer främst kvinnor,
                      tjejer och barn som bor på vårt skyddade boende samt
                      följer kvinnor vid besök hos myndigheter, polis eller
                      sjukvård. Du förväntas även att stödja kvinnor och tjejer
                      som är utsatta för våld genom vår jourtelefon som vi har
                      öppet årets alla dagar under kvällstid. Jourkvinnorna i
                      vår förening turas om att ansvara för jourtelefonen under
                      kvällstid.{" "}
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Som jourkvinna förväntas du förutom att stödja
                      våldsutsatta kvinnor och tjejer engagera dig genom att
                      delta i våra utbildningar, där du som jourkvinna eller
                      jourtjej får fördjupad kunskap om mäns våld mot kvinnor
                      och tjejer.
                    </p>
                    <h2 className="mt-8 mb-2 text-2xl text-gray-900">
                      Våra arbetsgrupper
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                      <strong>
                        Om du är intresserad av att engagera dig i tjejjouren
                      </strong>{" "}
                      stödjer du unga tjejer genom vår stödchatt som vi har
                      öppet på kvällstid samt stöd till tjejer genom mail,
                      telefon samt fysiska möten. Som jourtjej stödjer du unga
                      tjejer i samtal med skolan eller ungdomsmottagningen. Du
                      förväntas även stödja tjejer som bor på vårt skyddade
                      boende.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      <strong>
                        Om du är intresserad av att engagera dig i tantjouren
                      </strong>{" "}
                      stödjer du äldre kvinnor via samtal eller genom fysiska
                      möten samt informerar om tantjourens stöd vid berörda
                      arbetsplatser och myndigheter.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      <strong>
                        Om du är intresserad av att engagera dig i vår
                        juridikjour
                      </strong>{" "}
                      krävs det att du tidigare har en juridisk bakgrund och kan
                      genom din kunskap erbjuda juridiskt stöd till våldsutsatta
                      kvinnor och tjejer.
                    </p>
                    <h2 className="mt-8 mb-2 text-2xl text-gray-900">
                      Vad som krävs av dig
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                      För att bli ideell jourkvinna eller jourtjej i vår
                      förening och engagera dig i någon av våra arbetsgrupper
                      som nämnts ovan behöver du genomgå en grundutbildning i
                      kvinnojourskunskap samt delta i våra fördjupningskvällar.
                      När du genomgått grundutbildningen samt
                      fördjupningskvällarna blir du erbjuden att bli jourkvinna
                      och lämnar därmed tystnadslöfte. Tystnadslöftet innebär
                      att du inte får berätta för någon om vem du möter på
                      kvinnojouren.
                    </p>
                    <h2 className="mt-8 mb-2 text-2xl text-gray-900">
                      Är du intresserad av att engagera dig i Kvinnojouren Iris?
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                      Lämna dina uppgifter via mail eller telefon, så kontaktar
                      vi dig inför kommande grundutbildning.
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

export default EngagePage
