import React from "react";

const AboutBox1Tem = ({ heading, subHeading, image, bg }) => {
  return (
    <div>
      <div
        className={`${bg} w-[550px] h-48 flex justify-center item-center p-4 rounded-xl m-3 text-richblack-800`}
      >
        <div className=" w-[60%]">
          <h1 className="text-3xl font-semibold">{heading}</h1>
          <p className=" text-pure-greys-800 font-medium py-2">{subHeading}</p>
        </div>
        <div className=" w-[40%] ">{image}</div>
      </div>
    </div>
  );
};

export default AboutBox1Tem;
