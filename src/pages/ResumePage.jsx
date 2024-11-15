import React, { useState, useEffect } from 'react';

import { FaArrowDown } from 'react-icons/fa';
import { fetchAllResume, getAllResumes } from '../services/operations/notesAPI';
import { apiConnector } from '../services/apiConnector';
import PDFopener from '../components/Common/PDFopener';
import { FaShare } from "react-icons/fa";
import toast from 'react-hot-toast';
import copy from "copy-to-clipboard"
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/Common/ConfirmationModal';


const ResumePage = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
const BASE_URL = process.env.REACT_APP_BASE_URL

const [docx, setDocx] = useState([]);
const [loading,setLoading] = useState(false)
const [confirmationModal,setConfirmationModal] = useState(null)

  useEffect(() => {
   
   setLoading(true)
    const fetchdata = async()=>{
      
            const res = await  getAllResumes();
            console.log(res)
       if (res) {
      setDocx(res);
   
      setLoading(false)
    }

   
    }
     
    fetchdata()
  }, []);

  

  
  if (loading ) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
 const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

 
  const handleDownload = (url) => {
    if(token)
      { 
        const link = document.createElement('a');
    link.href = url;
    link.download = 'LEARNPROS_RESUME';
    link.click();
  
  }
    else{
      setConfirmationModal({
       text1:"You are not logged in!",
  text2:"Please login to View Notes Details.",
  btn1Text:"Login",
  btn1Handler:()=>navigate("/login"),
  btn2Text:"Close",
  btn2Handler:()=>setConfirmationModal(null),


      })
    }
   
  };

  return (
     <>
    <div className="footer3 flex min-h-[60vh] w-full flex-col items-center justify-center p-4 text-white md:p-8">
      <h1 className="py-2 text-center text-4xl font-extrabold">
        
        Explore Our{" "}
        <span className="font-extrabold text-[#3cfb3c]">90+ ATS Score Resume Templates</span>
      </h1>
      <p className="text-md text-center font-semibold text-gray-400 md:text-lg">
        Discover a wide range of course categories with LearnPros<br/>
        Your Gateway to an ATS-Ready Resume
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10 my-10 lg:w-[85%]">
        {docx && docx.map((item, index) => (
          <div key={index} className="footer group my-2 max-w-xl flex flex-col items-center justify-center gap-3 rounded-lg border-2 px-5 py-4 text-center transition-transform duration-300 ease-out hover:scale-105 shadow-2xl">
     
     <img src={item.image} alt='resume preview' className=' w-[270px] h-[400px]'/>
   
            <div className="flex gap-4 mt-4">
             <button onClick={()=>handleDownload(item.pdf)}  className="flex flex-row items-center justify-center gap-1 border-2 border-blue-300 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
              Download <FaArrowDown /> 
                {/* <PDFopener pdfUrl={item.pdf} resume="true"  /> */}
              </button>
              <button onClick={ handleShare} className="flex gap-2 flex-row items-center justify-center border-2 border-caribbeangreen-300 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                 Share    <FaShare/>
              </button>
            </div>
            
          </div>
        ))}
      </div>
      
           
    </div>
    {
confirmationModal && <ConfirmationModal modalData={confirmationModal} />
    }
   </>
  );
}

export default ResumePage;
