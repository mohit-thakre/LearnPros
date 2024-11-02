import React from "react"
import { Link } from "react-router-dom"

import LogoMain from "../../assets/Images/sec5.webp"
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg"

// import Css from "../../pages/HomePage.css";

const DescriptionSection = () => {
  const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ]
  return (
    <div className=" h-screen w-full text-white ">
      <div className=" flex items-start justify-evenly pb-12">
        <h1 className="w-[35%] text-4xl font-extrabold">
          Get the{" "}
          <span className=" text-pink-300">skills you need for a job</span> that
          is in demand.
        </h1>

        <p className=" w-[40%] py-2 pr-3 text-lg font-semibold text-richblack-200">
          The modern StudyNotion is the dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
          <br></br>
          <button className="border-rich-black-500 my-5 rounded-lg border-b-[3px] border-r-[3px] bg-yellow-50 px-6 py-[6px] text-xl font-bold text-richblack-800 transition-all duration-300 hover:scale-105 hover:bg-yellow-200">
            <Link to="/catalog/view-course">
              {" "}
              <span className="flex items-center justify-center">
                View Notes
              </span>
            </Link>
          </button>
        </p>
      </div>
      <div className=" mt-[-30px] flex w-full items-center justify-center">
        <div className=" w-[40%] ">
          {TimeLine.map((item, index) => {
            return (
              <div>
                <div
                  className=" my-2 flex flex-row items-start gap-5  rounded-xl"
                  key={index}
                >
                  <div className=" ">
                    <img
                      className=" h-[50px] w-[50px] rounded-full bg-white p-3 shadow-2xl"
                      src={item.Logo}
                    />
                  </div>
                  <div className=" ">
                    <h1 className=" text-lg font-semibold text-white">
                      {item.Heading}
                    </h1>
                    <p className=" font-sm text-md text-pure-greys-50">
                      {item.Description}
                    </p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === index ? "hidden" : "lg:block"
                  }  h-14 w-[26px] border-r border-dotted border-richblack-100 bg-richblack-400/0`}
                ></div>
              </div>
            )
          })}
        </div>
        <div className=" h-[400px] w-[40%]">
          <img src={LogoMain} />
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection
