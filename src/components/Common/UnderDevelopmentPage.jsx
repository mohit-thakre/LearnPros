import React from 'react';
 
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




const UnderDevelopmentPage = () => {
  const navigate = useNavigate()
  return (
    <div
      className="w-full h-[90vh] flex flex-col items-center justify-center text-center px-10 lg:px-20"
      style={{
        backgroundImage: "conic-gradient(from 285deg, #000814, #161D29)",
      }}
    >
      <h1 className="text-3xl sm:text-6xl text-white font-extrabold leading-[80px] text-center heroColor2">
        Under Development
      </h1>
      <button onClick={()=>navigate(-1)} className=' px-6 py-3 border-2 border-white text-white mt-4 rounded-xl flex gap-1 justify-center items-center ' >
       
<MdArrowBackIos />Back
      </button>
    </div>
  );
};

export default UnderDevelopmentPage;
