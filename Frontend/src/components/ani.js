import { FaCode } from "react-icons/fa6"
import { TypeAnimation } from "react-type-animation"

import Home from "../pages/HomePage.css"

function AnimatedCode({
  heading,
  subhseading,
  btn1,
  btn2,
  codeblock1,
  color1,
  flexReverse = false,
  className,
}) {
  let codeblock = `${codeblock1}`
  const color = color1
  return (
    <div>
      <div
        className={`flex min-h-[80vh] w-full ${
          flexReverse ? "flex-row-reverse" : ""
        } items-center justify-evenly  bg-richblack-900 text-white `}
      >
        <div className=" w-[40%]">
          <h1>{heading}</h1>
          <h2 className=" py-6 pr-3 text-lg font-semibold text-richblack-200">
            {subhseading}
          </h2>

          <div className=" my-4 flex w-full flex-row gap-8">
            <button className="flex items-center justify-between gap-2 rounded-lg border-b-[3px] border-r-[3px] border-pure-greys-50 bg-yellow-50 px-9 py-[3px] text-xl font-bold text-richblack-800 transition-all duration-300 hover:scale-105 hover:bg-yellow-200">
              {" "}
              {btn1}
            </button>
            <button className="  rounded-lg border-b-2 border-r-2 bg-richblack-800 px-9 py-[12px] text-xl  font-bold transition-all duration-300 hover:scale-105   hover:bg-richblack-900">
              {btn2}
            </button>
          </div>
        </div>
        <div className="bdr1 h-[52vh] w-[35%] rounded-md border-[1px] border-pure-greys-600 ">
          <div className="relative h-full w-full overflow-hidden px-4 py-6">
            <div
              className={`${className} grd1 left-10% absolute bottom-0 right-0 top-0 h-[500px] w-[500px]`}
            ></div>
            <div className=" flex flex-row items-center justify-start">
              <div
                style={{
                  fontSize: "1.2em",
                  fontFamily: "monospace",
                  whiteSpace: "pre-wrap",
                  color: color,
                  lineHeight: "25px",
                  letterSpacing: "0.5px",
                }}
                className=" flex items-start justify-start gap-3"
              >
                <div className=" text-pure-greys-200 ">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                </div>
                <TypeAnimation
                  sequence={[codeblock, 1000, ""]}
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                  }}
                  omitDeletionAnimation={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedCode