import React from "react";
import Footer from "../components/Common/Footer";
import ReviewSlider from "../components/Common/ReviewSlider";
import ContactDetails from "../components/core/ContactUsPage/ContactDetails";
import ContactForm from "../components/core/ContactUsPage/ContactForm";
import FooterPage from "./FooterPage";

const Contact = () => {
  return (
  <div className="bg-white">

  <div className="mx-auto mt-20 w-11/12 max-w-maxContent flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">

    <div className="w-full lg:w-[40%] bg-richblack-800 text-white p-4 lg:p-8 rounded-lg shadow-2xl">
      <ContactDetails />
    </div>


    <div className="w-full lg:w-[60%] bg-white p-4 lg:p-8 rounded-lg shadow-lg">
      <ContactForm />
    </div>
  </div>

 
  <div className="relative mx-auto my-10 lg:my-20 w-11/12 max-w-maxContent flex flex-col items-center gap-4 lg:gap-8">
    <h1 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 mt-4 lg:mt-8">
      What Learners Say
    </h1>
    <p className="text-center text-base lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl">
      Hear from some of our learners and see how our courses have impacted their learning journey.
    </p>
    <div className="w-full p-4 lg:p-6 bg-white rounded-lg shadow-md">
      <ReviewSlider />
    </div>
  </div>

 
  <FooterPage />
</div>

  );
};

export default Contact;
