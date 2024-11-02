import React from "react";

const AboutBox2 = ({ heading, subHeading, image, bg }) => {
  return (
    <div>
      <div
        className={`${bg}  w-[200px] min-h-[412px] flex flex-col justify-center item-center p-4 rounded-xl m-3 text-richblack-800`}
      >
        <div className=" ">
          <h1 className="text-3xl font-semibold">{heading}</h1>
          <p className=" text-pure-greys-800 font-medium py-2">{subHeading}</p>
        </div>
        <div className=" ">{image}</div>
      </div>
    </div>
  );
};

export default AboutBox2;
