import React from "react"
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

// import Logo from "../assets/Logo/Logo-Full-Light.png"
import Logo from "../assets/Logo/Logo-Full-Light.png"
import { FooterLink2 } from "../data/footer-links"

const Social = ["FaFacebook", "FaGoogle", "FaYoutube", "FaTwitter"]
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
]
const Plans = ["Paid memberships", "For students", "Business solutions"]
const Community = ["Forums", "Chapters", "Events"]
const Cmp = ["About", "Careers", "Affiliates"]
const FooterPage = () => {
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-t from-caribbeangreen-900  to-richblack-900 pt-5">
      <div className="  flex items-start justify-evenly py-5">
        <div className=" flex items-start justify-evenly gap-10">
          <div>
            <img src={Logo} />
            <h1 className=" text-md py-3 font-normal text-white">Company</h1>
            {Cmp.map((item, index) => {
              return (
                <p className="text-md cursor-pointer py-[3px]  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
                  {item}
                </p>
              )
            })}
            <div className="flex gap-3 py-4">
              <span>
                <FaFacebook className=" text-2xl text-pure-greys-500" />
              </span>
              <span>
                <FaGoogle className=" text-2xl text-pure-greys-500" />
              </span>
              <span>
                <FaTwitter className=" text-2xl text-pure-greys-500" />
              </span>
              <span>
                <FaYoutube className=" text-2xl text-pure-greys-500" />
              </span>
            </div>
          </div>
          <div>
            <h1 className=" text-md py-3 font-normal text-white">Resources</h1>
            {Resources.map((item, index) => {
              return (
                <p className="text-md cursor-pointer py-[3px]  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
                  {item}
                </p>
              )
            })}
            <h1 className=" text-md font-normal text-white">Support</h1>
            <p className="text-md cursor-pointer py-[3px]  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
              Help Center
            </p>
          </div>
          <div>
            <h1 className=" text-md py-3 font-normal text-white">Plans</h1>
            {Plans.map((item, index) => {
              return (
                <p className="text-md cursor-pointer py-[3px]  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
                  {item}
                </p>
              )
            })}
            <h1 className=" text-md py-3 font-normal text-white">Community</h1>
            {Community.map((item, index) => {
              return (
                <p className="text-md cursor-pointer py-[3px]  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className=" min-h-[90vh] w-[2px] bg-richblack-700 "></div>

        <div className=" flex items-start justify-evenly gap-10">
          {FooterLink2.map((item, index) => {
            return (
              <div>
                <h1 className=" text-md py-3 font-normal text-white">
                  {item.title}
                </h1>
                {item.links.map((item, index) => {
                  return (
                    <p
                      className="text-md cursor-pointer py-[3px] text-richblack-300 transition-all duration-200 hover:text-richblack-50"
                      key={index}
                    >
                      {item.title}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className=" mx-auto mt-[-20px] flex h-[2px] w-[80vw] items-center justify-center bg-richblack-700 "></div>
      <div className=" flex items-center justify-between px-20 py-8">
        <div className=" my-3 flex gap-4">
          {BottomFooter.map((item, index) => {
            return (
              <div
                className="flex items-center justify-center gap-2"
                key={index}
              >
                <p className="text-md cursor-pointer py-[3px] text-richblack-300 transition-all duration-200 hover:text-richblack-50">
                  {item}
                </p>

                {index !== BottomFooter.length - 1 && (
                  <div className="mx-1 flex h-[25px] w-[3px] items-center justify-center bg-richblack-700"></div>
                )}
              </div>
            )
          })}
        </div>
        <div>
          <p className="text-md cursor-pointer py-[3px] font-bold  text-richblack-300 transition-all duration-200 hover:text-richblack-50">
            Made with ❤️ CodeHelp © 2024 Studynotion
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
