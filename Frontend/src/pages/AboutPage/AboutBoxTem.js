import React from "react";

const AboutSmallBoxTem = ({ heading, subHeading, image, bg }) => {
  return (
    <div>
      <div
        className={`${bg} w-[400px] h-48 flex justify-center item-center p-4 rounded-xl m-3 text-richblack-800`}
      >
        <div className=" w-[70%]">
          <h1 className="text-3xl font-semibold">{heading}</h1>
          <p className=" text-pure-greys-800 font-medium py-2">{subHeading}</p>
        </div>
        <div className=" w-[30%]">{image}</div>
      </div>
    </div>
  );
};

export default AboutSmallBoxTem;
