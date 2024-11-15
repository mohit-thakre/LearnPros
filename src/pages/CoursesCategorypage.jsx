import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import { fetchNotesCatagory } from '../services/operations/notesAPI';

import codeLogo1 from "../assets/Logo/html.png";
import codeLogo2 from "../assets/Logo/javascript.png";
import codeLogo3 from "../assets/Logo/python.png";
import codeLogo4 from "../assets/Logo/java.png";
import { fetchCourseCategories } from '../services/operations/courseDetailsAPI';

const CoursesCategorypage = () => {
  const [Button, setButton] = useState([]);
  const [loading,setLoading] = useState(false)

    const fetchData = async () => {
    setLoading(true);
    const category = await fetchCourseCategories();
    if (category) {
      setButton(category);
    }
    setLoading(false); 
  };

useEffect(() => {

  fetchData();
}, []);

  

   if (loading ) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  return (
     <div className="course1 flex min-h-[60vh] w-full flex-col items-center justify-center p-4 text-white md:p-8">
      <h1 className="py-2 text-center text-4xl font-extrabold">
        Explore Our{" "}
        <span className="font-extrabold text-yellow-50">Courses Category</span>
      </h1>
      <p className="text-md text-center font-semibold text-gray-400 md:text-lg">
        Discover a wide range of course categories with LearnPros
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 my-10 lg:w-[80%]">
        {Button.map((item, index) => (
          <Link to={`/notes/${item.name.replace(/\s+/g, "-")}`} key={index}>
            <div className="footer group my-2 max-w-xl flex flex-col items-center justify-center gap-3 rounded-lg  border-2 px-5 py-4 text-center transition-transform duration-300 ease-out hover:scale-105 shadow-2xl">
              <span className="flex flex-row items-center gap-2 text-yellow-50 font-bold text-xl  group-hover:text-gray-800">
                {item.name} <GoArrowUpRight className="text-xl" />
              </span>
              <span className="text-sm font-md text-richblack-50  group-hover:text-white">{item.description}</span>
            </div>
          </Link>
        ))}
      </div>

       <div className="ctg my-10 h-auto w-full rounded-3xl bg-gradient-to-r from-richblack-50 to-caribbeangreen-400 p-4 md:h-40 md:w-[80%] md:p-0">
        <div className="categorysec flex h-full w-full flex-col items-center justify-around gap-4 md:flex-row md:p-5">
          <div className="text-center  md:text-left">
            <p className="py-2 text-lg font-semibold text-richblack-100 md:text-xl  lg:py-0">
              Stuck Somewhere?
            </p>
            <h1 className="text-2xl font-bold text-yellow-50 md:text-4xl">
              Learn From <span className="text-white">Top Courses</span>
            </h1>
            <p className="py-3 text-sm font-semibold text-richblack-100">
              Upskill, get certified, and stay ahead of the competition with our
              50+ trending Courses.
            </p>
          </div>
          <div className="flex gap-4 py-3 md:gap-10 lg:py-0">
            <img className="w-12 md:w-20" src={codeLogo1} alt="HTML" />
            <img className="w-12 md:w-20" src={codeLogo2} alt="JavaScript" />
            <img className="w-12 md:w-20" src={codeLogo3} alt="Python" />
            <img className="w-12 md:w-20" src={codeLogo4} alt="Java" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCategorypage;
  