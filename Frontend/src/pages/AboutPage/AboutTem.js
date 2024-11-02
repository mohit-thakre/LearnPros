import React from "react";

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
      <div>
        <div
          className={` w-full ${sty} min-h-screen flex justify-center ${gap} items-center bg-richblack-900 text-white`}
        >
          <div className=" w-[45%]">
            <h1 className=" font-extrabold text-5xl">
              <span className=" text-pink-200"> {firstHeading}</span>
            </h1>
            <h2 className=" font-extrabold text-5xl text-yellow-50 py-4">
              {mainHeading}
            </h2>
            <h2
              className={`font-${subHeadingFont} text-xl text-richblack-200 py-4`}
            >
              {subHeading}
            </h2>
          </div>
          <div className=" w-[40%]">{image}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutTem;
