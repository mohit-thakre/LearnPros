import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

import page2 from "../assets/Images/aboutus4.webp"
import page1 from "../assets/Images/aboutus5.webp"
import step1 from "../assets/Images/step1.webp"
import step2 from "../assets/Images/step2.webp"
import step3 from "../assets/Images/step3.webp"
import step4 from "../assets/Images/step4.webp"
import step5 from "../assets/Images/step5.webp"
import ReviewSlider from "../components/Common/ReviewSlider"
import { CountryCode } from "../data/countrycode"
import FooterPage from "./FooterPage"
import { contactUS } from "../services/operations/contactus"
import AboutBox1Tem from "./AboutPage/AboutBox1Tem"
import AboutBox2 from "./AboutPage/AboutBox2"
import AboutSmallBoxTem from "./AboutPage/AboutBoxTem"
import AboutTem from "./AboutPage/AboutTem"

const AboutPage = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const submitContactForm = async (data) => {
    const data1 = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,

      phoneNo: `${data.countrycode}${data.phoneNo}`,
      message: data.message,
    }

    // // console.log("Form Data - ", data1)
    try {
      setLoading(true)
      dispatch(contactUS(data1))
      setLoading(false)
    } catch (error) {
      // // console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])
  return (
    <>
      <div className=" flex flex-col gap-2 bg-white  text-black">
        <div>
          <AboutTem
            firstHeading="About us"
            mainHeading={
              <span>
                Where Talent Meets
                <br /> Opportunities
              </span>
            }
            subHeading="The largest community engagement platform built to help talent be unstoppable."
            sty=""
            subHeadingFont="bold"
            image={<img src={page1} alt="ab"></img>}
          />
          <AboutTem
            firstHeading=""
            mainHeading={`LearnPros`}
            subHeading={
              <span>
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world. <br />
                <br /> As experienced educators ourselves, we witnessed
                firsthand the limitations and challenges of traditional
                education systems. We believed that education should not be
                confined to the walls of a classroom or restricted by
                geographical boundaries. We envisioned a platform that could
                bridge these gaps and empower individuals from all walks of life
                to unlock their full potential.
              </span>
            }
            sty="flex-row-reverse"
            gap="gap-7"
            subHeadingFont="light"
            image={<img src={page2} alt="ab"></img>}
          />

          <div className=" flex items-start justify-around p-10 ">
            <div className="flex flex-col items-start justify-around p-4 lg:flex-row lg:p-10">
              <div className="mb-8 w-full lg:mb-0 lg:w-[30%]">
                <h2 className="rounded-2xl border p-3 py-4 text-center text-3xl font-extrabold text-yellow-50 lg:text-5xl">
                  Our Vision
                </h2>
                <p className="py-4 text-base font-normal text-richblack-200 lg:text-lg">
                  With this vision in mind, we set out on a journey to create an
                  e-learning platform that would revolutionize the way people
                  learn. Our team of dedicated experts worked tirelessly to
                  develop a robust and intuitive platform that combines
                  cutting-edge technology with engaging content, fostering a
                  dynamic and interactive learning experience.
                </p>
              </div>
              <div className="w-full lg:w-[30%]">
                <h2 className="rounded-2xl border p-3 py-4 text-center text-3xl font-extrabold text-pink-200 lg:text-5xl">
                  Our Mission
                </h2>
                <p className="py-4 text-base font-normal text-richblack-200 lg:text-lg">
                  With this vision in mind, we set out on a journey to create an
                  e-learning platform that would revolutionize the way people
                  learn. Our team of dedicated experts worked tirelessly to
                  develop a robust and intuitive platform that combines
                  cutting-edge technology with engaging content, fostering a
                  dynamic and interactive learning experience.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-auto w-full flex-col items-center justify-center gap-4 lg:h-[80vh] lg:flex-row lg:gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <AboutSmallBoxTem
                  heading="Learn"
                  subHeading="Solve easy to complex problems & get hands-on experience to get hired by your dream company!"
                  image={<img src={step1} alt="ab" />}
                  bg="bg-pink-100"
                />
                <AboutBox1Tem
                  heading="Compete"
                  subHeading="Participate in various opportunities to showcase your skills and get rewarded."
                  image={
                    <img
                      src={step3}
                      className="h-24 sm:h-32 lg:h-40"
                      alt="ab"
                    />
                  }
                  bg="bg-caribbeangreen-100"
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <AboutSmallBoxTem
                  heading="Practice"
                  subHeading="Solve easy to complex problems & get hands-on experience to get hired by your dream company!"
                  image={<img src={step2} className="w-full" alt="ab" />}
                  bg="bg-yellow-50"
                />
                <AboutBox1Tem
                  heading="Jobs"
                  subHeading="Apply to a plethora of hiring opportunities & work with your dream companies."
                  image={
                    <img
                      src={step4}
                      className="h-24 sm:h-32 lg:h-40"
                      alt="ab"
                    />
                  }
                  bg="bg-blue-50"
                />
              </div>
            </div>
            <div className="mt-4 w-full lg:mt-0 lg:w-auto">
              <AboutBox2
                heading="Mentorship"
                subHeading="Book sessions with unstoppable mentors across domains & build your career."
                image={<img src={step5} className="w-full" alt="ab" />}
                bg="bg-caribbeangreen-5"
              />
            </div>
          </div>

          <div className=" mb-20 flex w-full items-center justify-center">
            <form
              className="flex flex-col gap-7"
              onSubmit={handleSubmit(submitContactForm)}
            >
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                  <label
                    htmlFor="firstname"
                    className="lable-style1 text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter first name"
                    className="form-style1 bg-richblack-25"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <span className="-mt-1 text-[12px] text-pink-400">
                      Please enter your name.
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 lg:w-[48%]">
                  <label htmlFor="lastname" className="lable-style1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter last name"
                    className="form-style1"
                    {...register("lastname", { required: true })}
                  />
                  {errors.lastname && (
                    <span className="-mt-1 text-[12px] text-pink-400">
                      Please enter your last name.
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="lable-style1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="form-style1"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="-mt-1 text-[12px] text-pink-400">
                    Please enter your Email address.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phonenumber" className="lable-style1">
                  Phone Number
                </label>

                <div className="flex gap-5">
                  <div className="flex max-w-[100px] flex-col gap-2">
                    <select
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter first name"
                      className="form-style1 "
                      {...register("countrycode", { required: true })}
                    >
                      {CountryCode.map((ele, i) => {
                        return (
                          <option key={i} value={ele.code}>
                            {ele.code} {ele.country}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                    <input
                      type="number"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="12345 67890"
                      className="form-style1"
                      {...register("phoneNo", {
                        required: {
                          value: true,
                          message: "Please enter your Phone Number.",
                        },
                        maxLength: {
                          value: 12,
                          message: "Invalid Phone Number",
                        },
                        minLength: {
                          value: 10,
                          message: "Invalid Phone Number",
                        },
                      })}
                    />
                  </div>
                </div>
                {errors.phoneNo && (
                  <span className="-mt-1 text-[12px] text-pink-400">
                    {errors.phoneNo.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="lable-style1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Enter your message here"
                  className="form-style1"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="-mt-1 text-[12px] text-pink-400">
                    Please enter your Message.
                  </span>
                )}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
              >
                {isSubmitting ? "sending message" : "Send Message"}
              </button>
            </form>
          </div>
          <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <h1 className="text-gray-800 mt-8 text-center text-4xl font-bold">
              What Learners Say
            </h1>
            <p className="text-gray-600 max-w-2xl text-center text-lg">
              Hear from some of our learners and see how our courses have
              impacted their learning journey.
            </p>
            <div className="w-full rounded-lg bg-white p-6 shadow-md">
              <ReviewSlider />
            </div>
          </div>
          <FooterPage />
        </div>
      </div>
    </>
  )
}

export default AboutPage
