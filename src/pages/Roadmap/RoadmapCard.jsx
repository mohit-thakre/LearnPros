import React, { useState } from "react"
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

import { roadmaps } from "../../data/roadmaps"

const RoadmapCard = () => {
  return (
    <div className="footer2 flex min-h-[60vh] w-full flex-col items-center justify-center p-4 text-white md:p-8">
      <h1 className="py-2 text-center text-4xl font-extrabold">
        Explore Our{" "}
        <span className="font-extrabold text-yellow-25">Roadmap Section</span>
      </h1>
      <p className="text-md text-gray-400 text-center font-semibold md:text-lg">
        Discover a wide range of tech Roadmaps with LearnPros
      </p>

      <div className="my-10 mt-8 flex w-full flex-wrap items-center justify-center gap-6 lg:min-w-[80%]">
        {roadmaps.map((item, index) => (
          <Link to={`/roadmap/${item.name.replace(/\s+/g, "-")}`} key={index}>
            <div className="roadmap border-gray-300 relative flex min-h-[250px] max-w-md flex-col items-start justify-between gap-4 rounded-lg border bg-white p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div class="relative flex items-center gap-5 text-[#d4ba42]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-laptop-minimal "
                >
                  <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="2" x2="22" y1="20" y2="20"></line>
                </svg>
                <h4 class="text-zinc-100 text-xl font-bold tracking-wide">
                  {" "}
                  {item.name}
                </h4>
              </div>
              <p className="text-gray-600 flex  justify-center gap-2 text-sm">
                {" "}
                <svg
                  className=" text-yellow-25"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
                </svg>
                {item.description}
              </p>
              <p className=" flex items-center gap-2 px-2 text-right font-bold">
                {item.stars}{" "}
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#f4ba4e"
                  edit={false}
                  isHalf={true}
                  emptyIcon={<FaRegStar />}
                  halfIcon={<FaStarHalfAlt />}
                  fullIcon={<FaStar />}
                  color="gray"
                  value={item.stars}
                />
              </p>

              <Link
                to={`/roadmap/${item.name.replace(/\s+/g, "-")}`}
                className="roadmap w-full rounded-full py-3 text-center font-bold text-white duration-300 hover:bg-richblack-900 "
              >
                View Details
              </Link>
            </div>
          </Link>
        ))}
      </div>

      <div className="ctg my-10 h-auto w-full rounded-3xl bg-gradient-to-r from-richblack-50 to-caribbeangreen-400 p-4 md:h-40 md:w-[80%] md:p-0">
        <div className="categorysec flex h-full w-full flex-col items-center justify-around gap-4 md:flex-row md:p-5">
          <div className="text-center  md:text-left">
            <p className="py-2 text-lg font-semibold text-richblack-100 md:text-xl  lg:py-0">
              Stuck Somewhere?
            </p>
            <h1 className="text-2xl font-bold text-pink-300 md:text-4xl">
              Learn From <span className="text-white">Top Notes</span>
            </h1>
            <p className="py-3 text-sm font-semibold text-richblack-100">
              Upskill, get certified, and stay ahead of the competition with our
              50+ trending Notes.
            </p>
          </div>
          <div className="flex gap-4 py-3 md:gap-10 lg:py-0">
            {/* <img className="w-12 md:w-20" src={codeLogo1} alt="HTML" />
            <img className="w-12 md:w-20" src={codeLogo2} alt="JavaScript" />
            <img className="w-12 md:w-20" src={codeLogo3} alt="Python" />
            <img className="w-12 md:w-20" src={codeLogo4} alt="Java" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard
