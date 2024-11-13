import React, { useState } from "react"
import { FaRocketchat } from "react-icons/fa"
import { IoCall, IoEarth } from "react-icons/io5"

import ReviewSlider from "../../components/Common/ReviewSlider"
import FooterPage from "../FooterPage"

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    contactNumber: "",
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("form data -", form)
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-white text-black">
        <div className="flex h-[80vh] flex-col justify-center gap-5 py-10 lg:flex-row">
          {/* Contact Details Section */}
          <div className="w-full rounded-2xl border-2 bg-richblack-800 p-5 text-white lg:w-[30%]">
            <div className="pb-6">
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <FaRocketchat className="text-4xl" /> Chat With Us
              </h1>
              <p className="py-1 font-bold text-pure-greys-300">
                Our friendly team is here to help.
              </p>
              <p className="font-bold text-pure-greys-300">
                info@studynotion.com
              </p>
            </div>
            <div className="pb-6">
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <IoEarth className="text-4xl" /> Visit Us
              </h1>
              <p className="py-1 font-bold text-pure-greys-300">
                Come and say hello at our office HQ.
              </p>
              <p className="font-bold text-pure-greys-300">
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </p>
            </div>
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <IoCall className="text-4xl" /> Call Us
              </h1>
              <p className="py-1 font-bold text-pure-greys-300">
                Mon - Fri From 8am to 5pm
              </p>
              <p className="font-bold text-pure-greys-300">+123 456 7869</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full rounded-lg bg-white p-8 shadow-lg lg:w-[60%]">
            <form className="flex flex-col text-black" onSubmit={handleSubmit}>
              <h1 className="pb-4 text-4xl font-extrabold text-black">
                Got an Idea? We've got the skills. Let's team up.
              </h1>
              <p className="text-gray-600 pb-4 font-semibold">
                Tell us more about yourself and what you have in mind.
              </p>

              <div className="flex gap-4">
                {/* First Name Input */}
                <div className="relative flex h-12 w-full rounded-xl">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                    name="firstName"
                    id="firstName1"
                    type="text"
                    value={form.firstName}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
                    htmlFor="firstName1"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name Input */}
                <div className="relative flex h-12 w-full rounded-xl">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                    name="lastName"
                    id="lastName1"
                    type="text"
                    value={form.lastName}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
                    htmlFor="lastName1"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative mt-4 flex h-12 w-full rounded-xl">
                <input
                  required
                  className="peer w-full rounded-xl border border-[#4070f4] bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                  name="email"
                  id="email1"
                  type="email"
                  value={form.email}
                  onChange={handleOnChange}
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
                  htmlFor="email1"
                >
                  Email
                </label>
              </div>

              {/* Contact Number Input */}
              <div className="relative mt-4 flex h-12 w-full rounded-xl">
                <input
                  required
                  className="peer w-full rounded-xl border border-[#4070f4] bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                  name="contactNumber"
                  id="contactNumber1"
                  type="number"
                  value={form.contactNumber}
                  onChange={handleOnChange}
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
                  htmlFor="contactNumber1"
                >
                  Phone
                </label>
              </div>

              {/* Message Input */}
              <div className="relative mt-4 flex h-12 w-full rounded-xl">
                <textarea
                  required
                  className="peer w-full rounded-xl border border-[#4070f4] bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                  name="message"
                  id="message1"
                  value={form.message}
                  onChange={handleOnChange}
                  rows={6}
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-black peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
                  htmlFor="message1"
                >
                  Message
                </label>
              </div>

              <button
                className="mt-5 w-full rounded-full bg-yellow-500 py-2 text-lg font-semibold text-black hover:bg-yellow-600"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          <h1 className="text-gray-800 text-center text-4xl font-bold">
            What Learners Say
          </h1>
          <p className="text-gray-600 max-w-2xl text-center text-lg">
            Hear from some of our learners and see how our courses have impacted
            their learning journey.
          </p>
          <div className="w-full rounded-lg bg-white p-6 shadow-md">
            <ReviewSlider />
          </div>
        </div>

        {/* Footer */}
        <FooterPage />
      </div>
    </>
  )
}

export default ContactPage
