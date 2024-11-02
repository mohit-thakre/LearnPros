import React from "react";
import Footer from "../components/Common/Footer";
import ReviewSlider from "../components/Common/ReviewSlider";
import ContactDetails from "../components/core/ContactUsPage/ContactDetails";
import ContactForm from "../components/core/ContactUsPage/ContactForm";
import FooterPage from "./FooterPage";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Main Container */}
      <div className="mx-auto mt-20 w-11/12 max-w-maxContent flex  flex-row-reverse  gap-16">
        {/* Contact Details Section */}
        <div className="lg:w-[40%] bg-richblack-800 text-white p-8 rounded-lg shadow-2xl w-full">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%] bg-white p-8 rounded-lg shadow-lg w-full">
          <ContactForm />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
        <h1 className="text-center text-4xl font-bold text-gray-800 mt-8">
          What Learners Say
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl">
          Hear from some of our learners and see how our courses have impacted
          their learning journey.
        </p>
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <ReviewSlider />
        </div>
      </div>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default Contact;
