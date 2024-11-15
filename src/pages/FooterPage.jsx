import React from "react"
import { FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom"

import Logo from "../assets/Logo/e-removebg-preview.png"

const FooterPage = () => {
  return (
    <div className="w-full bg-gradient-to-t from-caribbeangreen-900 to-richblack-900 p-5 sm:m-0 sm:p-10  lg:p-20">
      <footer className="flex w-full flex-wrap justify-between gap-10 rounded-2xl border-2 border-caribbeangreen-500 bg-gradient-to-t from-caribbeangreen-800 to-richblack-900 p-5 text-white/60 sm:p-10 lg:flex-nowrap lg:gap-16">
        <div className="flex max-w-sm flex-col gap-5 lg:w-1/3">
          <img
            alt="LearnPros"
            loading="lazy"
            width="250"
            src={Logo}
            className="mx-auto lg:mx-0"
          />
          <p className="text-center font-light lg:text-left">
            Welcome to LearnPros: Your hub for expert courses, valuable
            resources, and career-focused growth. Let’s learn and succeed
            together!
          </p>
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h1 className="text-2xl font-bold text-white">Follow us</h1>
            <a
              href="https://github.com/mohit-thakre/LearnPros"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-white transition-colors hover:bg-caribbeangreen-600"
            >
              <FaRegStar size={24} />
              <span className="text-sm font-extralight">Star on GitHub</span>
            </a>
            <p className="text-center lg:text-left">
              Made with 🍵 by{" "}
              <a
                href="https://mohit-thakre.github.io/PORTFOLIO-V2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300"
              >
                @MTxCEO
              </a>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-3 lg:w-1/4 lg:items-center">
          <h1 className="text-2xl font-bold text-white">Useful links</h1>
          <Link to="/about" className="hover:text-caribbeangreen-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-caribbeangreen-200">
            Improve Us
          </Link>
           <Link to="/contact" className="hover:text-caribbeangreen-200">
            Contact Us
          </Link>
          <Link to="/privacy&policy" className="hover:text-caribbeangreen-200">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-caribbeangreen-200">
            Terms &amp; Conditions
          </Link>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center gap-3 lg:w-1/3 lg:items-start">
          <h1 className="text-2xl font-bold text-white">Contact us</h1>
          <p className="text-center lg:text-left">
            Together, let's learn, collaborate, and build for society.
          </p>
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>Mail us!</span>
          </div>
          <a
            href="mailto:learnpros.tech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-caribbeangreen-200"
          >
            Learnpros.tech@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default FooterPage
