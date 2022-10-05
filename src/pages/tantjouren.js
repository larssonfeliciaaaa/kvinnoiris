import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

// components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import LeavePage from "../components/leavePage"

const TantjourenPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          kvinnojouren {
            tel
            kontaktTidMonThu
            jourTid
          }
          tantjouren {
            email
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Tantjouren | Stöd till äldre kvinnor som utsätts för våld"
        description="Vi erbjuder stöd, samtal och skydd till kvinnor som utsätts för våld."
      />

      <LeavePage />
      <div className="wrapper lg:px-10">
        <div className="relative tantjouren-hero">
          <div className="tantjouren-hero-overlay"></div>
        </div>
        <Breadcrumb page="Tantjouren" link="tantjouren" />
        <section className="max-w-screen-xl text-gray-700 xl:mx-auto body-font">
          <div className="flex flex-col pt-4 pb-24 sm:px-5 xl:px-0">
            <div className="px-3 md:px-0">
              <div className="">
                <div className="flex flex-col-reverse justify-end mt-10 xl:flex-row-reverse">
                  <div className="max-w-2xl md:py-4 xl:pl-4">
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-row items-center w-full p-2 bg-pink-500 rounded ">
                        <svg
                          width="48"
                          height="48"
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
                            d="M18.615 3.13745H5.38496C4.11496 3.13745 3.08496 4.16745 3.08496 5.43745V18.6675C3.08496 19.9375 4.11496 20.9675 5.38496 20.9675H18.615C19.885 20.9675 20.915 19.9375 20.915 18.6675V5.43745C20.915 4.16745 19.885 3.13745 18.615 3.13745ZM19.715 18.6575C19.715 19.2675 19.225 19.7575 18.615 19.7575H5.38496C4.77496 19.7575 4.28496 19.2675 4.28496 18.6575V5.43745C4.28496 4.82745 4.77496 4.33745 5.38496 4.33745H18.615C19.225 4.33745 19.715 4.82745 19.715 5.43745V18.6575ZM12.5149 5.26758H11.4849C10.9749 5.26758 10.4749 5.48758 10.1249 5.87758C9.75494 6.28758 9.56494 6.85758 9.62494 7.41758L10.1349 12.4076C10.2349 13.3976 11.0349 14.1476 11.9949 14.1476C12.9549 14.1476 13.7449 13.3976 13.8549 12.4076L14.3649 7.41758C14.4249 6.84758 14.2449 6.28758 13.8649 5.87758C13.5249 5.49758 13.0249 5.26758 12.5149 5.26758ZM12.6649 12.2876C12.6249 12.6676 12.3449 12.9476 12.0049 12.9476C11.6649 12.9476 11.3849 12.6676 11.3449 12.2876L10.8349 7.29758C10.8149 7.06758 10.8849 6.84758 11.0249 6.67758C11.1549 6.53758 11.3149 6.45758 11.4949 6.45758H12.5249C12.7049 6.45758 12.8649 6.53758 12.9949 6.67758C13.1449 6.83758 13.2149 7.06758 13.1849 7.29758L12.6649 12.2876ZM10.205 16.9775C10.205 15.9875 11.015 15.1875 12.005 15.1875C12.995 15.1875 13.805 15.9875 13.805 16.9775C13.805 17.9675 12.995 18.7675 12.005 18.7675C11.015 18.7675 10.205 17.9675 10.205 16.9775ZM11.205 16.9775C11.205 17.4075 11.565 17.7675 12.005 17.7675C12.445 17.7675 12.805 17.4175 12.805 16.9775C12.805 16.5475 12.445 16.1875 12.005 16.1875C11.565 16.1875 11.205 16.5375 11.205 16.9775Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                        <h2 className="mb-0 text-xl text-white">
                          Är du utsatt för våld?
                        </h2>
                      </div>
                      <div className="p-4">
                        <p className="mb-2 text-lg leading-relaxed">
                          Kom ihåg att det är aldrig är för sent att få stöd och
                          samtal, mäns våld mot kvinnor är ett samhällsproblem.
                          Våld mot äldre kvinnor är osynligt och dolt och det är
                          en mänsklig rättighet att leva utan våld.
                        </p>
                      </div>
                    </article>
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-col justify-center w-full p-2 bg-gray-400 rounded ">
                        <h2 className="p-2 mb-0 text-xl text-black">
                          Kontakta tantjouren
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          <strong>
                            Vill du komma i kontakt med en jourkvinna?
                          </strong>
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Kvinnojouren Iris personal finns tillgängliga mån-tors{" "}
                          <span className="relative top-[4px] inline-flex items-center bg-gray-300 rounded-full text-md">
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
                            {
                              data.site.siteMetadata.kvinnojouren
                                .kontaktTidMonThu
                            }
                          </span>
                          .
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Vi har även en jourtelefon på samma telefonnummer som
                          har öppet årets alla dagar mellan kl.{" "}
                          <span className="relative top-[4px] inline-flex items-center text-md bg-gray-300 rounded-full">
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
                            {data.site.siteMetadata.kvinnojouren.jourTid}
                          </span>
                          .
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Du kan även maila tantjouren direkt:
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
                            href={`mailto:${data.site.siteMetadata.tantjouren.email}`}
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
                            {data.site.siteMetadata.tantjouren.email}
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded">
                      <div className="flex flex-row items-center w-full p-2 bg-gray-400 rounded ">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="48"
                            height="48"
                            fill="none"
                            rx="0"
                            ry="0"
                          ></rect>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.4399 15.3452C11.4999 15.3652 11.5699 15.3752 11.6299 15.3752C11.8799 15.3752 12.1199 15.2152 12.1999 14.9652C12.2999 14.6452 12.1299 14.3052 11.8199 14.2052C11.3499 14.0452 10.9299 13.7852 10.5699 13.4152C10.1999 13.0552 9.9399 12.6452 9.7799 12.1552C9.6599 11.8252 9.5999 11.4652 9.5999 11.0952C9.5999 10.2152 9.9399 9.38518 10.5699 8.75518L15.1599 4.15518C16.4499 2.87518 18.5399 2.87518 19.8299 4.15518C20.4499 4.78518 20.7899 5.61518 20.7899 6.49518C20.7899 7.37518 20.4499 8.20518 19.8299 8.82518L16.7399 11.9052C16.5099 12.1452 16.5099 12.5252 16.7399 12.7552C16.9799 12.9852 17.3599 12.9852 17.5899 12.7552L20.6799 9.67518C21.5299 8.83518 21.9999 7.69518 21.9999 6.49518C21.9999 5.29518 21.5299 4.16518 20.6899 3.30518C18.9299 1.55518 16.0799 1.55518 14.3199 3.30518L9.7299 7.90518C8.8699 8.75518 8.3999 9.88518 8.3999 11.0952C8.3999 11.6152 8.4899 12.1152 8.6499 12.5552C8.8599 13.1952 9.2399 13.7952 9.7199 14.2652C10.1999 14.7552 10.7999 15.1352 11.4399 15.3452ZM3.32 20.6851C4.2 21.5551 5.35 21.9951 6.5 21.9951C7.65 21.9951 8.81 21.5551 9.69 20.7051L14.28 16.1051C15.14 15.2551 15.61 14.1251 15.61 12.9151C15.61 12.4551 15.54 11.9951 15.4 11.5551C15.17 10.8651 14.8 10.2551 14.28 9.73509C13.76 9.21509 13.15 8.84509 12.46 8.61509C12.14 8.51509 11.8 8.68509 11.7 8.99509C11.6 9.30509 11.77 9.64509 12.1 9.75509C12.61 9.91509 13.06 10.1951 13.44 10.5751C13.82 10.9551 14.09 11.4051 14.26 11.9151C14.36 12.2351 14.41 12.5651 14.41 12.9051C14.41 13.7951 14.06 14.6251 13.43 15.2451L8.84 19.8451C7.55 21.1251 5.46 21.1251 4.17 19.8451C3.55 19.2151 3.21 18.3951 3.21 17.5051C3.21 16.6151 3.55 15.7851 4.17 15.1651L7.35 11.9851C7.58 11.7451 7.59 11.3651 7.35 11.1351C7.11 10.9051 6.73 10.9051 6.5 11.1351L3.32 14.3151C2.47 15.1551 2 16.2851 2 17.4951C2 18.7051 2.47 19.8351 3.32 20.6851Z"
                            fill="#020202"
                          ></path>
                        </svg>
                        <h2 className="p-2 mb-0 text-xl text-gray-900">
                          Värdefulla länkar
                        </h2>
                      </div>
                      <div className="p-4">
                        <div className="text-lg">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href="https://www.roks.se/har-finns-hjalp/mans-vald-mot-aldre-kvinnor"
                          >
                            Våld mot äldre kvinnor
                          </a>

                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href="https://www.nck.uu.se/kunskapsbanken/amnesguider/vald-i-nara-relationer/valdets-uttryck-och-mekanismer/"
                          >
                            Våldets uttryck och mekanismer
                          </a>

                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href="https://www.roks.se/har-finns-hjalp/min-man-slar-mig"
                          >
                            Min man slår mig
                          </a>

                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href="https://www.roks.se/om-vald/stanna-eller-ga"
                          >
                            Stanna eller gå?
                          </a>

                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="items-center block mt-3 text-purple-600 md:justify-center"
                            href="https://www.roks.se/index.php/har-finns-hjalp/lagar-som-ska-skydda-dig"
                          >
                            Lagar som ska skydda dig
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
                      Tantjouren
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed">
                      Tantjouren finns i Luleå och ingår i Kvinnojouren Iris, vi
                      är ideella jourkvinnor som har stor kunskap om våld mot
                      kvinnor. Vi finns för äldre kvinnor som behöver någon att
                      samtala med om att utsättas för våld.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi synliggör att även äldre kvinnor utsätts för våld. Vi
                      erbjuder information, utbildning och samtal till
                      yrkesgrupper som kommer i kontakt med äldre kvinnor.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi erbjuder stöd, samtal och skydd till kvinnor som
                      utsätts för våld av sin partner, men även av andra i sin
                      omgivning och vi ger stöd vid kontakt med myndigheter,
                      sjukvård, vid polisanmälan och rättegång. Vi ger också
                      information, utbildning och samtal till yrkesgrupper som
                      kommer i kontakt med äldre kvinnor.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Våldet kan ta sig olika uttryck som fysiskt våld, kontroll
                      och isolering, psykiskt våld, sexuellt våld, ekonomiskt
                      våld, materiellt våld, försummelse och funktionshinder
                      relaterat våld.
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

export default TantjourenPage
