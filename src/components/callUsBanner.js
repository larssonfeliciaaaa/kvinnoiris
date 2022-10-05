import React from "react"

const CallUsBanner = () => {
  return (
    <div className="call-us-banner">
      <div className="hidden call-us-banner-container md:block">
        <div className="inner">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V18V19V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V19V18V4ZM7.2 6.2H16.8V17.8H7.2V6.2ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21ZM10.6 3.5C10.2686 3.5 10 3.76863 10 4.1C10 4.43137 10.2686 4.7 10.6 4.7H13.4C13.7314 4.7 14 4.43137 14 4.1C14 3.76863 13.7314 3.5 13.4 3.5H10.6Z"
              fill="#9013fe"
            ></path>
          </svg>{" "}
          <div>
            <p className="call-us-banner-heading">Women’s shelter</p>
            <p className="call-us-banner-text">
              Are you in need of support? Call us at
            </p>
            <a className="call-us-banner-phone" href="tel:+46920222223">
              +46 920 22 22 23
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallUsBanner
