import React from "react"

const AboutSmallBoxTem = ({ heading, subHeading, image, bg }) => {
  return (
    <div>
      <div
        className={`${bg} m-3 flex h-auto w-full items-center justify-center rounded-xl p-4 text-richblack-800 sm:h-48 sm:w-[300px] md:w-[400px]`}
      >
        <div className="w-[70%]">
          <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            {heading}
          </h1>
          <p className="py-2 text-sm font-medium text-pure-greys-800 sm:text-base md:text-lg">
            {subHeading}
          </p>
        </div>
        <div className="w-[30%]">{image}</div>
      </div>
    </div>
  )
}

export default AboutSmallBoxTem
