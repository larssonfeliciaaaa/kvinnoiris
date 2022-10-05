import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import LeavePage from "../components/leavePage"
import Breadcrumb from "../components/breadcrumb"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          kvinnojouren {
            tel
            email
            jourTid
            kontaktTidMonThu
            kontaktTidFri
            lunchHours
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Om kvinnojouren Iris - Kvinnojour i Luleå"
        description="Kvinnojouren iris verkar för kvinnor, tjejer och barns ökade rättigheter i samhället och ger stöd och skydd till kvinnor, tjejer och barn som utsätts för mäns våld."
      />
      <LeavePage />

      <div className="wrapper lg:px-10">
        <div className="relative about-hero">
          <div className="about-hero-overlay"></div>
        </div>
        <Breadcrumb page="Om kvinnojouren Iris" link="om-oss" />
        <section className="max-w-screen-xl text-gray-700 xl:mx-auto body-font">
          <div className="flex flex-col pt-4 pb-24 sm:px-4 xl:px-0">
            <div className="px-3 md:px-0">
              <div>
                <div className="flex flex-col-reverse justify-end mt-10 lg:flex-row-reverse">
                  <div className="max-w-2xl md:py-4 xl:pl-4">
                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded lg:max-w-md lg:float-right">
                      <div className="flex flex-row items-center w-full p-2 bg-purple-700 rounded">
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
                            d="M2.19553 13.9715C2.0673 13.3339 2 12.6746 2 12C2 11.3254 2.0673 10.6661 2.19553 10.0285L2.2 10H2.2013C2.99955 6.09001 6.09001 2.99955 10 2.2013V2.2L10.0285 2.19553C10.6661 2.0673 11.3254 2 12 2C12.6746 2 13.3339 2.0673 13.9715 2.19553L14 2.2V2.2013C17.91 2.99955 21.0004 6.09001 21.7987 10H21.8L21.8044 10.0283C21.8767 10.3879 21.9297 10.7543 21.9621 11.1265C21.9927 11.4198 22.01 11.7116 22.01 12C22.01 12.49 21.97 12.99 21.89 13.49L21.81 14H21.7987C21.0004 17.91 17.91 21.0004 14 21.7987V21.8L13.9715 21.8045C13.3339 21.9327 12.6746 22 12 22C11.3254 22 10.6661 21.9327 10.0285 21.8045L10 21.8V21.7987C6.09001 21.0004 2.99955 17.91 2.2013 14H2.2L2.19553 13.9715ZM3.42953 14C4.18807 17.2479 6.75208 19.8119 10 20.5705V18.1844C8.02382 17.5424 6.45764 15.9762 5.81561 14H3.42953ZM6.716 11.5867C6.73857 11.3007 6.78554 11.0208 6.86 10.75L6.97944 10.3021C7.5085 8.74432 8.74432 7.5085 10.3021 6.97944L10.75 6.86C11.55 6.65 12.45 6.65 13.24 6.86L13.7115 6.98407C15.224 7.50237 16.4311 8.68745 16.9796 10.1859L17.13 10.75C17.24 11.15 17.29 11.57 17.29 12C17.29 12.43 17.24 12.85 17.13 13.25L17.0053 13.7421C16.468 15.2791 15.2409 16.4965 13.6979 17.0206L13.25 17.14C12.45 17.35 11.55 17.35 10.75 17.14L10.3021 17.0206C8.78324 16.5047 7.57046 15.317 7.02042 13.8141L6.87 13.25C6.77325 12.9275 6.722 12.592 6.70578 12.2487C6.70281 12.1849 6.70097 12.1208 6.7003 12.0564C6.7001 12.0376 6.7 12.0188 6.7 12C6.7 11.9886 6.70004 11.9772 6.70011 11.9658C6.70092 11.8383 6.70627 11.7119 6.716 11.5867ZM14 18.1844V20.5705C17.2479 19.8119 19.8119 17.2479 20.5705 14H18.1844C17.5424 15.9762 15.9762 17.5424 14 18.1844ZM18.1844 10H20.5705C19.8119 6.75208 17.2479 4.18807 14 3.42953V5.81561C15.9762 6.45764 17.5424 8.02382 18.1844 10ZM10 5.81561C8.02382 6.45764 6.45764 8.02382 5.81561 10H3.42953C4.18807 6.75208 6.75208 4.18807 10 3.42953V5.81561Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                        <h2 className="p-2 mb-0 text-xl text-white">
                          Behöver du hjälp?
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          Vi har en telefonjour som har öppet årets alla dagar
                          och ett skyddat boende för kvinnor och barn som
                          utsätts för våld. Vi erbjuder samtal och stöd till
                          kvinnor och tjejer med utgångspunkt hjälp till
                          självhjälp.
                        </p>
                      </div>
                    </article>

                    <article className="flex flex-wrap mb-8 bg-gray-200 rounded lg:max-w-md lg:float-right">
                      <div className="flex flex-col justify-center w-full p-2 bg-gray-400 rounded ">
                        <h2 className="p-2 mb-0 text-xl text-black">
                          Kontakta kvinnojouren
                        </h2>
                      </div>
                      <div className="p-4 ">
                        <p className="mb-2 text-lg leading-relaxed">
                          <strong>
                            Vill du komma i kontakt med en jourkvinna?
                          </strong>
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Kvinnojouren Iris personal finns tillgängliga mån-tors
                          kl.
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
                          . och fredagar kl.
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
                            {data.site.siteMetadata.kvinnojouren.kontaktTidFri}
                          </span>
                          .
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                          Vi har lunchstängt kl.
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
                            {data.site.siteMetadata.kvinnojouren.lunchHours}
                          </span>
                          .
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Vi har även en jourtelefon på samma telefonnummer som
                          har öppet årets alla dagar mellan kl.{" "}
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
                            {data.site.siteMetadata.kvinnojouren.jourTid}
                          </span>
                          .
                        </p>
                        <p className="mb-2 text-lg leading-relaxed">
                          Du kan även maila kvinnojouren
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

                    <div className="p-4 mb-10 border-2 border-gray-200 rounded lg:max-w-md lg:float-right">
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
                      Om Kvinnojouren Iris
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed">
                      Kvinnojouren Iris har funnits sedan 1981, vi är en
                      feministisk ideell förening som är partipolitiskt och
                      religiöst obunden.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi består av ideella jourtjejer och jourkvinnor som verkar
                      för kvinnor, tjejer och barns ökade rättigheter i
                      samhället och ger stöd och skydd till kvinnor, tjejer och
                      barn som utsätts för olika former av mäns och killars
                      våld.{" "}
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi utbildar, informerar och skapar även debatt i samhället
                      om våldet mot kvinnor och tjejer. Vi arbetar aktivt
                      förebyggande mot mäns och killars våld mot kvinnor och
                      tjejer.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Kvinnojouren Iris tillhör Roks, Riksorganisationen för
                      kvinnojourer och tjejjourer i Sverige.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi har en telefonjour som har öppet årets alla dagar och
                      ett skyddat boende för kvinnor och barn som utsätts för
                      våld. Vi erbjuder samtal och stöd till kvinnor och tjejer
                      med utgångspunkt hjälp till självhjälp.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      Vi har samtal med kvinnor och tjejer och ger stöd i
                      kontakt med myndigheter och sjukvård. När du kontaktar oss
                      förblir du anonym, vi har ingen registrering på
                      kvinnojouren.
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

export default AboutPage
