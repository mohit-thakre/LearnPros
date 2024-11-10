import React from "react"

const AboutTem = ({
  firstHeading = "",
  mainHeading = "",
  subHeading = "",
  sty = "",
  image,
  gap = "",
  subHeadingFont = "",
}) => {
  return (
    <div>
      <div
        className={`w-full ${sty} flex min-h-screen flex-col justify-center md:flex-row ${gap} items-center bg-richblack-900 p-4 text-white md:p-8`}
      >
        {/* Content Section */}
        <div className="w-full p-4 md:w-[50%] lg:w-[45%]">
          {firstHeading && (
            <h1 className="text-3xl font-extrabold text-pink-200 md:text-4xl lg:text-5xl">
              {firstHeading}
            </h1>
          )}
          <h2 className="py-2 text-3xl font-extrabold text-yellow-50 md:py-4 md:text-4xl lg:text-5xl">
            {mainHeading}
          </h2>
          <h2
            className={`font-${subHeadingFont} py-2 text-lg text-richblack-200 md:py-4 md:text-xl lg:text-2xl`}
          >
            {subHeading}
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full p-4 md:w-[50%] lg:w-[40%]">{image}</div>
      </div>
    </div>
  )
}

export default AboutTem
