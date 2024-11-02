import React from "react"
import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"

import codeLogo1 from "../../assets/Logo/html.png"
import codeLogo4 from "../../assets/Logo/java.png"
import codeLogo2 from "../../assets/Logo/javascript.png"
import codeLogo3 from "../../assets/Logo/python.png"
import logo1 from "../../assets/TimeLineLogo/CategoryLogo1.svg"
import logo2 from "../../assets/TimeLineLogo/CategoryLogo2.svg"
import logo3 from "../../assets/TimeLineLogo/CategoryLogo3.svg"
import logo4 from "../../assets/TimeLineLogo/CategoryLogo4.svg"
import logo5 from "../../assets/TimeLineLogo/CategoryLogo5.svg"
import css from "../../pages/HomePage.css"

const CategorySection = () => {
  const Button = [
    {
      logo: logo1,
      title: "Marketing",
    },
    {
      logo: logo2,
      title: "Operation",
    },
    {
      logo: logo3,
      title: "Finance",
    },
    {
      logo: logo4,
      title: "Human Resources",
    },
    {
      logo: logo5,
      title: "Software Development",
    },
  ]

  return (
    <div className=" flex min-h-[60vh] w-full flex-col items-center justify-center text-white">
      <h1 className="py-2 text-5xl font-extrabold">
        Explore Our{" "}
        <span className=" font-extrabold  text-caribbeangreen-50">
          Courses Category
        </span>
      </h1>
      <p className=" text-lg font-semibold text-richblack-200">
        Explore wide range of courses category with code help s
      </p>

      <div className=" mt-8 flex w-1/2 flex-row flex-wrap items-center justify-center gap-4">
        {Button.map((item, index) => {
          return (
            <Link to="/catalog/view-course">
              <div className=" my-2 flex flex-row items-center justify-center gap-3  rounded-full border-b-4 border-r-2 border-caribbeangreen-50 bg-richblack-50 px-9 py-4 text-xl  font-bold text-black transition-all duration-300 hover:scale-105  hover:bg-richblack-900 hover:text-white">
                <img src={item.logo} alt={index}></img>
                <button key={index}>{item.title}</button>
              </div>
            </Link>
          )
        })}
        <Link to="/catalog/view-course">
          <button className=" flex items-center justify-center rounded-full border-b-2 border-r-2 bg-caribbeangreen-50 px-9 py-4 text-xl font-bold  text-blue-800 transition-all duration-300 hover:scale-105  hover:bg-richblack-900 hover:text-white">
            <span> Explore All Courses</span>
            <GoArrowUpRight className=" ml-3 text-3xl font-extrabold" />
          </button>
        </Link>
      </div>
      <div className="ctg my-10 h-40 w-[80%] rounded-3xl bg-gradient-to-r from-richblack-50 to-caribbeangreen-400">
        <div className="categorysec flex h-full w-full items-center justify-around p-5">
          <div>
            <p className=" text-xl font-semibold text-richblack-100">
              Stuck Somewhere ?
            </p>
            <h1 className=" text-4xl font-bold text-caribbeangreen-50">
              Learn From <span className=" text-white ">Top Courses</span>
            </h1>
            <p className=" py-3 text-sm font-semibold text-richblack-100">
              Upskill, get certified and stay ahead of the competion with our
              50+ courses trending courses.{" "}
            </p>
          </div>
          <div className=" relative  flex  gap-10">
            <img className=" w-20 " src={codeLogo1}></img>
            <img className=" w-20  " src={codeLogo2}></img>
            <img className=" w-20 " src={codeLogo3}></img>
            <img className=" w-20 " src={codeLogo4}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection
