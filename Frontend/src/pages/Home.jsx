
import ReviewSlider from "../components/Common/ReviewSlider"
import FooterPage from "./FooterPage"
import mainImage from "../assets/Images/66a385030aa29_courses.webp";
import { FaCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedCode from "../components/ani";
import DescriptionSection from "../pages/homepage/DescriptionSection";
import CategorySection from "../pages/homepage/CategorySection";
import { GoArrowUpRight } from "react-icons/go";
import mainImage1 from "../assets/Images/Instructor1.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

 <section>
        <div className=" w-full min-h-screen flex flex-col lg:flex-row flex-wrap justify-center items-center bg-richblack-900 text-white ">
          <div className="w-[100%] px-4 lg:px-0 text-center lg:text-left lg:mt-0 mt-14 lg:w-[45%]">
            <h1 className=" font-extrabold text-4xl lg:text-5xl">
              Crack the Code<br></br> to Success with{" "}
              <span className=" text-pink-200"> LearnPros</span>
            </h1>
            <h2 className=" font-semibold text-lg lg:text-xl text-richblack-200 py-4">
              Elevate your programming skills, solve challenges,
              <br /> and unlock the world of coding possibilities.
            </h2>

           <div className="w-full flex flex-col sm:flex-row gap-5 my-6 items-center">
  <button className="w-[60%] sm:w-auto font-bold flex justify-center items-center gap-2 py-3 sm:py-4 px-6 sm:px-9 border-r-[3px] border-b-[3px] border-pure-greys-50 rounded-full text-lg sm:text-xl text-richblack-800 bg-yellow-50 transition-all duration-300 hover:scale-105 hover:bg-yellow-200">
    <FaCode className="text-2xl" />
   <Link to="/notescategory/notes">View Notes</Link>
  </button>

  <button className="w-[60%] sm:w-auto font-bold px-6 sm:px-9 py-3 sm:py-4 border-b-2 border-r-2 bg-richblack-800 transition-all duration-300 hover:scale-105 hover:bg-richblack-900 rounded-full text-lg sm:text-xl">
     <Link to="/coursescategory/courses">View Course</Link>
  </button>
</div>
 <div className="w-full flex flex-col sm:flex-row gap-5 my-6 items-center">
          <button className="font-bold w-full lg:w-auto lg:px-20 py-4 lg:py-3 border-b-[3px] border-pure-greys-500 rounded-full text-md lg:text-xl flex justify-center items-center gap-2 transition-all duration-300 bg-richblack-800 hover:bg-richblack-900">
  <Link to="/login" className="flex items-center gap-1 lg:gap-2">
    <span>Become an Instructor</span>
    <FaArrowRightLong />
  </Link>
</button>
</div>

          </div>
          <div className=" w-[100%] mt-4 lg:mt-0 lg:w-[40%]">
            <img className=" " src={mainImage} alt="main imayge"></img>
          </div>
        </div>
        <div>
          <marquee className=" text-richblue-300 "></marquee>
        </div>
      </section>


{/* 2 */}

<section>
        <AnimatedCode
          className="bodye"
          heading={
            <h1 className=" font-extrabold text-4xl">
              Unlock your{" "}
              <span className="text-yellow-50">Coding Potential</span> with our
              online courses
            </h1>
          }
          subhseading={`Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.`}
          codeblock1={`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <title>This is myPage</title>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>\n    <h1><a href="/">Header</a></h1>\n    <nav><a href="/homne">HOME</a></nav>\n</body>\n</html>`}
          color1={`#FFD60A`}
          btn1={
            <Link to="/catalog/view-course"> <span className="flex justify-center items-center">

              <FaCode className=" text-2xl mr-1 " /> Try It Yourself
            </span></Link>
            
          }
          btn2={  <Link to="/contact">Let's Connect</Link>}
        />
      </section>

  {/* 3 */}


 <section>
        <AnimatedCode
          flexReverse={true}
          className="bodye1"
          heading={
            <h1 className=" font-extrabold text-4xl">
              Empowering Coders,
              <span className="text-[#0afbff]">Enabling Dreams</span> with our
              online courses
            </h1>
          }
          subhseading={`Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.`}
          codeblock1={`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './App.css';\nimport App from './App';\n\nfunction MyComponent() {\n  return (\n    <div>\n      <h1>Hello World!</h1>\n      <p>This is a paragraph.</p>\n    </div>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById('root'));\n`}
          color1={`#0afbff`}
          btn1={
            <Link to="/catalog/view-course"> <span className="flex justify-center items-center">

              <FaCode className=" text-2xl mr-1 " /> 

Continue Lesson
            </span></Link>
          }
          btn2={  <Link to="/about">About Us</Link>}
        />
      </section>

{/* 4 */}

<section>
        <div className="">
          <DescriptionSection />
        </div>
      </section>

{/* 5 */}
  <CategorySection />

{/* 6 */}

<section>
        <div className=" w-full min-h-screen flex flex-col lg:flex-row text-center lg:text-left px-2 lg:px-0 justify-center items-center bg-richblack-900 text-white ">
          <div className="w-full lg:w-[35%]">
            <h1 className=" font-extrabold text-4xl">
              <span className=" text-pink-200">Unlock Guidance</span> <br />{" "}
              Become a Mentor & Guide Unstoppable
              <span className=" text-pink-200"> Talent!</span>
            </h1>
            <h2 className=" font-semibold text-lg text-richblack-200 py-4">
              Join the community of 2000+ mentors & empower future leaders.
            </h2>

           <Link to="/login">
          <button className="w-full lg:w-auto my-5 lg:my:0 font-bold px-8 py-2 md:px-20 md:py-3 border-b-[3px] border-pink-400 rounded-full text-lg md:text-2xl flex justify-center items-center transition-all duration-300 bg-richblack-800 hover:bg-richblack-900">
  Become an Instructor
  <GoArrowUpRight className="ml-2 text-xl md:text-3xl p-1 rounded-full text-black bg-white" />
</button>

            </Link>
          </div>
          <div className="w-full lg:w-[40%]">
            <img className=" " src={mainImage1} alt="main imayge"></img>
          </div>
        </div>
        <div></div>
      </section>


      
        
         <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h1 className="text-center text-4xl pb-5 text-white font-semibold lg:mt-8">
          Reviews from other learners
        </h1>
        <div className="w-full p-6 bg-gradient-to-r from-richblack-900 via-caribbeangreen-800 to-richblack-900  shadow-2xl">
          <ReviewSlider />
        </div>
      </div>
      

      {/* Footer */}
     
      <FooterPage/>
    </div>
  )
}

export default Home
