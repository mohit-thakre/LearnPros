import React from "react"

const AboutBox2 = ({ heading, subHeading, image, bg }) => {
  return (
    <div>
      <div
        className={`${bg} m-3 flex min-h-[300px] w-full flex-col items-center justify-between rounded-xl p-4 text-richblack-800 sm:min-h-[400px] sm:w-[250px] md:w-[200px]`}
      >
        <div className="mb-4 text-center">
          <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            {heading}
          </h1>
          <p className="py-2 text-sm font-medium text-pure-greys-800 sm:text-base md:text-lg">
            {subHeading}
          </p>
        </div>
        <div>{image}</div>
      </div>
    </div>
  )
}

export default AboutBox2
