import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaShare } from 'react-icons/fa';
import { getAllResumes, getPurchasedResumes } from '../services/operations/notesAPI';
import { apiConnector } from '../services/apiConnector';
import toast from 'react-hot-toast';
import copy from "copy-to-clipboard";
import { Link, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/Common/ConfirmationModal';

const PurchasedResume = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [docx, setDocx] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const user = localStorage.getItem("user")
  const userId = user?._id
 // const token = localStorage.getItem("token")

  useEffect(() => {
    setLoading(true);
    const fetchdata = async () => {
      const res = await getPurchasedResumes(token);
      
      if (res.length>0) {
        setDocx(res);
        setLoading(false);
      }
      else{
        setDocx(null)
      }
     
    };
    fetchdata();
  }, []);



  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleDownload = (url) => {
    if (token) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'LEARNPROS_RESUME';
      link.click();
    } else {
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to view and download the resume.",
        btn1Text: "Login",
        btn1Handler: () => navigate("/login"),
        btn2Text: "Close",
        btn2Handler: () => setConfirmationModal(null),
      });
    }
  };

 

  return (
    <>
      <div className="footer3 flex min-h-[60vh] w-full flex-col items-center justify-center p-4 text-white md:p-8">
       <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Resumes</h1>
       
      </div>

       {
docx ?  <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10 my-10 lg:w-[85%]">
          {docx && docx.map((item, index) => (
            <div key={index} className="footer group my-2 max-w-xl flex flex-col items-center justify-center gap-3 rounded-lg border-2 px-5 py-4 text-center transition-transform duration-300 ease-out hover:scale-105 shadow-2xl">
              <img src={item.image} alt='resume preview' className='w-[270px] h-[400px]' />
              <div className="flex gap-4 mt-4">
                
                  <button
                    onClick={() => handleDownload(item.pdf)}
                    className="flex flex-row items-center justify-center gap-1 border-2 border-blue-300 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
                  >
                    Download <FaArrowDown /> 
                  </button>
                
                <button
                  onClick={handleShare}
                  className="flex gap-2 flex-row items-center justify-center border-2 border-caribbeangreen-300 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Share <FaShare />
                </button>
              </div>
            </div>
          ))}
        </div>
        : 
         <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have not Purchased any Resume yet
          </p>
          <Link to="/resume/template">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Purchase a Resume
            </p>
          </Link>
        </div>


       }
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default PurchasedResume;
