import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaShare } from 'react-icons/fa';
import { getAllResumes } from '../services/operations/notesAPI';
import { apiConnector } from '../services/apiConnector';
import toast from 'react-hot-toast';
import copy from "copy-to-clipboard";
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import ConfirmationModal from '../components/Common/ConfirmationModal';
import { studentEndpoints } from '../services/apis';
import razorpayLogo from "../assets/Logo/payment_logo.png"

const ResumePage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [docx, setDocx] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const userId = user?._id
  const {
  RESUME_PAYMENT_API,
  RESUME_VERIFY_API,
  
} = studentEndpoints

  useEffect(() => {
    setLoading(true);
    const fetchdata = async () => {
      const res = await getAllResumes();
      if (res) {
        setDocx(res);
        setLoading(false);
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
      link.download = "LEARNPROS_RESUME";
      link.click();
      link.download = "LEARNPROS_RESUME";
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
const phone = user?.additionalDetails?.contactNumber
console.log("Phone:", phone);
  const handleBuy = async (resumeId, price) => {
    if(!token){
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to view and download the resume.",
        btn1Text: "Login",
        btn1Handler: () => navigate("/login"),
        btn2Text: "Close",
        btn2Handler: () => setConfirmationModal(null),
      });
      return 
    }
    try {
      
      //creating order capture paymenta

      const response = await apiConnector("POST", RESUME_PAYMENT_API, { resumeId, userId, price },
         {
        Authorization: `Bearer ${token}`,
      
      }
     
       
    );
   
      const { orderId, key, amount } = response.data;

      
      const options = {
        key,
        amount,
        currency: "INR",
        name: "LearnPros",
        description: "thanks for Purchasing Resume Template",
        order_id: orderId,
        image: razorpayLogo,
       
    
        handler: async (paymentResponse) => {
         
            //verify payment
          const verifyResponse = await apiConnector("POST", RESUME_VERIFY_API, {
            ...paymentResponse,
            resumeId,
          },   {
        Authorization: `Bearer ${token}`,
      
      });
    

          if (verifyResponse.data.success) {
            toast.success("Payment successful! Resume unlocked.");
            
            setDocx((prev) =>
              prev.map((doc) =>
                doc._id === resumeId ? { ...doc, purchased: true } : doc
              )
            );
          } 
        },
         prefill: {
        name: user?.additionalDetails?.name || "user",
        email: user?.email || "user@example.com",
        contact: phone || "0000000000", 
    },
        theme: {
          color: "#Ahf2BF",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      // navigate("/dashboard/My-courses")
      // toast.success("Refresh the page to see Purchased Resume")
    } catch (error) {
     console.error("Error during payment process:", error);
     console.log(error.response.data.message)
      
      if(error)
      {
        toast.error(error.response.data.message);
        navigate("/dashboard/My-courses")

      }
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
          Discover a wide range of course categories with LearnPros<br />
          Your Gateway to an ATS-Ready Resume
        </p>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10 my-10 lg:w-[85%]">
          {docx && docx.map((item, index) => (
          <div 
  key={index} 
  className="footer group my-4 max-w-xl flex flex-col items-center justify-center gap-4 rounded-lg border shadow-xl  p-6 text-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
>
  <img 
    src={item.image} 
    alt="resume preview" 
    className="w-[270px] h-[400px] object-center rounded-md border"
  />
  <div className="py-2 px-4 bg-yellow-100 border border-yellow-300 text-richblack-700 rounded-md w-full font-bold text-lg flex justify-center items-center">
    <span className="text-xl font-semibold">&#8377; {item.price}</span>
  </div>
  <div className="flex gap-4">
    {
      item.price === "free" ? (
        <button
          onClick={() => handleDownload(item.pdf)}
          className="flex  flex-row items-center justify-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Download <FaArrowDown className="text-lg" />
        </button>
      ) : (
        <button
          onClick={() => handleBuy(item._id, item.price)}
          className="flex  flex-row items-center justify-center gap-2 bg-caribbeangreen-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          BuyNow <FaShoppingCart/>
        </button>
      )
    }
    <button
      onClick={handleShare}
      className="flex w-full flex-row items-center justify-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
    >
      Share <FaShare className="text-lg" />
    </button>
  </div>
</div>

          ))}
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default ResumePage;
