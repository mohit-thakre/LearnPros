import React from "react"
import { AiFillGithub, AiFillStar } from "react-icons/ai"
import { FaGithub, FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom"

import Logo from "../assets/Logo/Logo-Full-Light.png"

const FooterPage = () => {
  return (
    <div class="mb-20 w-full bg-gradient-to-t from-caribbeangreen-900 to-richblack-900 p-5 sm:m-0 sm:p-10 lg:p-20">
      <footer className="footer flex w-full flex-wrap justify-around gap-10 rounded-2xl border-2 border-caribbeangreen-500  bg-gradient-to-t from-caribbeangreen-800 to-richblack-900  p-5 font-medium text-white/60 sm:p-10 lg:flex-nowrap">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <img alt="LearnPros" loading="lazy" width="250" src={Logo} />
            <p className=" flex font-light lg:max-w-[500px]">
              Welcome to LearnPros: Your hub for expert courses, valuable
              resources, and career-focused growth. Let’s learn and succeed
              together!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white">Follow us</h1>
            <div className="flex gap-3 py-1">
              {/* <span>
              
              </span> */}
              <a
                href="https://github.com/mohit-thakre/LearnPros"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 flex items-center  gap-2 rounded-lg border-2 px-4 py-2 text-white transition-colors hover:bg-caribbeangreen-600"
                style={{ textDecoration: "none" }}
              >
                <FaRegStar size={24} />
                <span className=" flex gap-1 text-sm font-extralight">
                  Star on GitHub
                </span>
              </a>
            </div>
            <p>
              Made with 🍵 by{" "}
              <a
                href="https://mohit-thakre.github.io/PORTFOLIO-V2/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-yellow-25"
              >
                @Atom_Dev
              </a>
            </p>
          </div>
        </div>

        <div className="flex min-w-48 flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">Useful links</h1>

          <p>
            <Link to="/about">
              <span>About Us</span>
            </Link>
          </p>
          <p>
            <Link to="/contact">
              <span>Improve Us</span>
            </Link>
          </p>
          <p>
            <Link to="/privacy&policy">
              <span>Privacy Policy</span>
            </Link>
          </p>
          <p>
            <Link to="/terms">
              <span>Terms &amp; Conditions</span>
            </Link>
          </p>
        </div>

        <div className="flex max-w-80 flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">Contact us</h1>
          <span>
            Together, let's learn, collaborate, and build for society.
          </span>
          <span className="flex items-center gap-4 text-lg font-bold text-white">
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
            Mail us!
          </span>
          <a
            href="mailto:mohitthakre1211@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mail_me______________________________
          </a>
          <a
            href="mailto:mohitthakre1211@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mail_me______________________________
          </a>
        </div>
      </footer>
    </div>
  )
}

export default FooterPage
