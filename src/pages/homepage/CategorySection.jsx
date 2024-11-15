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
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center p-4 text-white md:p-8">
      <h1 className="py-2 text-center text-4xl font-extrabold ">
        Explore Our{" "}
        <span className="font-extrabold text-caribbeangreen-50">
          Courses Category
        </span>
      </h1>
      <p className="text-md text-center font-semibold text-richblack-200 md:text-lg">
        Explore wide range of courses category with code help s
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 md:w-3/4">
        {Button.map((item, index) => (
          <Link to="/catalog/view-course" key={index}>
            <div className="my-2 flex flex-row items-center justify-center gap-3 rounded-full border-b-4 border-r-2 border-caribbeangreen-50 bg-richblack-50 px-5 py-3 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-richblack-900 hover:text-white md:px-9 md:py-4 md:text-xl">
              <img src={item.logo} alt={index} className="w-8 md:w-10" />
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
        <Link to="/catalog/view-course">
          <button className="flex items-center justify-center rounded-full border-b-2 border-r-2 bg-caribbeangreen-50 px-5 py-3 text-lg font-bold text-blue-800 transition-all duration-300 hover:scale-105 hover:bg-richblack-900 hover:text-white md:px-9 md:py-4 md:text-xl">
            <span> Explore All Courses</span>
            <GoArrowUpRight className="ml-3 text-2xl font-extrabold md:text-3xl" />
          </button>
        </Link>
      </div>

      <div className="ctg my-10 h-auto w-full rounded-3xl bg-gradient-to-r from-richblack-50 to-caribbeangreen-400 p-4 md:h-40 md:w-[80%] md:p-0">
        <div className="categorysec flex h-full w-full flex-col items-center justify-around gap-4 md:flex-row md:p-5">
          <div className="text-center  md:text-left">
            <p className="py-2 text-lg font-semibold text-richblack-100 md:text-xl  lg:py-0">
              Stuck Somewhere?
            </p>
            <h1 className="text-2xl font-bold text-caribbeangreen-50 md:text-4xl">
              Learn From <span className="text-white">Top Courses</span>
            </h1>
            <p className="py-3 text-sm font-semibold text-richblack-100">
              Upskill, get certified, and stay ahead of the competition with our
              50+ trending courses.
            </p>
          </div>
          <div className="flex gap-4 py-3 md:gap-10 lg:py-0">
            <img className="w-12 md:w-20" src={codeLogo1} alt="HTML" />
            <img className="w-12 md:w-20" src={codeLogo2} alt="JavaScript" />
            <img className="w-12 md:w-20" src={codeLogo3} alt="Python" />
            <img className="w-12 md:w-20" src={codeLogo4} alt="Java" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection
