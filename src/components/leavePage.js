import React from "react"

const LeavePage = () => {
  return (
    <div className="fixed right-0 flex items-center justify-center transform rotate-90 translate-x-16 translate-y-40 leave-page lg:hidden md:translate-x-12">
      <a
        href="https://www.google.se/"
        className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-pink-600 border-0 rounded cursor-pointer hover:bg-pink-900 focus:outline-none md:mt-0"
      >
        Lämna sidan
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  )
}

export default LeavePage
