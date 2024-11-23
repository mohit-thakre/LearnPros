import React, { useState } from "react"
import { PiLinkSimpleBold } from "react-icons/pi"
import { useLocation, useParams } from "react-router-dom"

import { roadmap } from "../../data/roadmaps"
import FooterPage from "../FooterPage"

const RoadmapPage = () => {
  const { roadmapName } = useParams()

  const roadmapname = roadmapName.replace(/-/g, " ")
  const result = roadmap.find((item) => item.title === roadmapname)

  return (
    <div>
      <>
        <div className="roadmap2  w-full  text-white">
          <div className="roadmap mx-auto flex min-h-[260px] w-full flex-col  justify-center gap-4 px-2 py-4 lg:px-20 lg:pt-10  ">
            <p className="text-center text-sm text-richblack-100">
              {`Home / roadmap /
               `}
              <span className=" text-center font-bold text-yellow-25">
                {result?.title}
              </span>
            </p>
            <p className="text-center text-3xl  font-bold capitalize text-richblack-5">
              {result?.title}
            </p>
            <p className=" text-center text-richblack-100">
              {result?.description}
            </p>
            <div className=" flex w-full flex-wrap items-center justify-center gap-9  ">
              {result?.steps.map((topic, idx) => (
                <div
                  key={idx}
                  className=" flex min-h-[220px] w-full flex-col  gap-3 rounded-lg border border-pure-greys-500 p-4 shadow-2xl  lg:max-w-lg "
                >
                  <div className="text-gray-800 flex items-center gap-3">
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
                      class=" text-yellow-25  "
                    >
                      <rect
                        width="18"
                        height="12"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="2" x2="22" y1="20" y2="20"></line>
                    </svg>
                    <h4 className="text-lg font-semibold text-yellow-25">
                      {topic.name}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm">{topic.details}</p>

                  <div className="mt-2 space-y-2">
                    {topic?.resources.map((res, resIdx) => (
                      <div key={resIdx} className="flex items-center gap-2">
                        <PiLinkSimpleBold />
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-25 hover:underline"
                        >
                          {res.type}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FooterPage />
      </>
    </div>
  )
}

export default RoadmapPage
