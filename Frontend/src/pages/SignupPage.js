import React, { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/Images/login-img-4.webp"
import Css from "../pages/HomePage.css"
import { apiConnector } from "../services/apiConnector"
import { endpoints } from "../services/apis"
import { sendOtp } from "../services/operations/authAPI"

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Student",
    contactNumber: "",
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [option, setOption] = useState("Student")

  const [eye, setEyeSlash] = useState(true)
  const [eye1, setEyeSlash1] = useState(true)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const { loading } = useSelector((state) => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(sendOtp(form, navigate))
  }

  return (
    <div className=" flex min-h-screen w-full items-center justify-center  bg-gradient-to-bl from-[#c9cacf] to-white">
      <div className="bgimg1 flex h-[90vh] w-[70%] justify-between  rounded-xl rounded-bl-[80px] bg-white p-5 ">
        <div className="bgimg h-full w-[40%] rounded-bl-[60px]  rounded-tr-[60px] bg-yellow-50">
          <img className=" h-[80%] " src={logo} alt="ad" />
        </div>

        <div className=" w-[55%] ">
          <div className=" flex flex-col justify-start gap-3 text-black">
            <div className=" flex">
              <h1 className=" text-5xl">👋</h1>
              <h1 className=" text-2xl font-medium">
                <p className=" text-sm font-semibold ">Ready to Be,</p>
                Unstoppable! Create an account
              </h1>
            </div>
            <form className=" flex w-full flex-col" onSubmit={handleSubmit}>
              <label className=" py-4">Create account as </label>
              <div>
                <label
                  htmlFor="accountType"
                  className={` pointer cursor-pointer" mr-2 rounded-full px-6   py-3 text-center font-semibold
                   ${
                     option === "Student"
                       ? "border-2 border-blue-600 bg-richblue-5 text-blue-500"
                       : "border-2 border-dotted border-pure-greys-500 text-black"
                   }`}
                  onClick={() => setOption("Student")}
                >
                  Student
                  <input
                    type="radio"
                    name="accountType"
                    value="Student"
                    onChange={handleOnChange}
                    className="  opacity-0 "
                    id="accountType"
                  ></input>
                </label>

                <label
                  htmlFor="accountType1"
                  className={`pointer cursor-pointer" mr-2 rounded-full px-6 py-3 text-center font-semibold
                   ${
                     option === "Instructor"
                       ? "border-2 border-blue-600 bg-richblue-5 text-blue-500"
                       : "border-2 border-dotted border-pure-greys-500 text-black"
                   }`}
                  onClick={() => setOption("Instructor")}
                >
                  Instructor
                  <input
                    type="radio"
                    name="accountType"
                    value={form.value === "Instructor"}
                    onChange={handleOnChange}
                    className="  opacity-0"
                    id="accountType1"
                  ></input>
                </label>
                <div className=" item-center flex gap-3">
                  <div class="relative mt-10 flex h-12 w-full rounded-xl">
                    <input
                      required
                      className="peer w-full rounded-xl  border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                      name="firstName"
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleOnChange}
                    />
                    <label
                      class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                      For="firstName"
                    >
                      First Name
                    </label>
                  </div>

                  <div class="relative mt-10 flex h-12 w-full rounded-xl">
                    <input
                      required
                      className="peer w-full rounded-xl  border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                      name="lastName"
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleOnChange}
                    />
                    <label
                      class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                      For="lastName"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div class="relative mt-4 flex h-12 w-full rounded-xl">
                  <input
                    required
                    className="peer w-full rounded-xl  border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                    name="email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleOnChange}
                  />
                  <label
                    class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                    For="email"
                  >
                    Email
                  </label>
                </div>

                <div class="relative mt-4 flex h-12 w-full rounded-xl">
                  <input
                    required
                    className="peer w-full rounded-xl border  border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none  focus:shadow-md"
                    name="contactNumber"
                    id="contactNumber"
                    type="number"
                    value={form.contactNumber}
                    onChange={handleOnChange}
                  />
                  <label
                    class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                    For="contactNumber"
                  >
                    Phone
                  </label>
                </div>
                <div className=" item-center flex gap-3">
                  <div class="relative mt-4 flex h-12 w-full  rounded-xl">
                    <input
                      required
                      className="peer w-full rounded-xl  border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                      name="password"
                      id="password"
                      type={eye ? "password" : "text"}
                      value={form.password}
                      onChange={handleOnChange}
                    />
                    <label
                      class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                      For="password"
                    >
                      Password
                    </label>
                    <p
                      className=" my-auto text-pure-greys-200 "
                      onClick={() => setEyeSlash(!eye)}
                    >
                      {eye ? (
                        <FaEye className=" ml-[-35px] text-2xl" />
                      ) : (
                        <FaEyeSlash className=" ml-[-35px] text-2xl" />
                      )}
                    </p>
                  </div>

                  <div class="relative mt-4 flex h-12 w-full rounded-xl">
                    <input
                      required
                      className="peer w-full rounded-xl  border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
                      name="confirmPassword"
                      id="confirmPassword"
                      type={eye1 ? "password" : "text"}
                      value={form.confirmPassword}
                      onChange={handleOnChange}
                    />
                    <label
                      class="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150  peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
                      For="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <p
                      className=" my-auto text-pure-greys-200"
                      onClick={() => setEyeSlash1(!eye1)}
                    >
                      {eye1 ? (
                        <FaEye className=" ml-[-35px] text-2xl" />
                      ) : (
                        <FaEyeSlash className=" ml-[-35px] text-2xl" />
                      )}
                    </p>
                  </div>
                </div>
                <div className=" mt-5 flex items-center justify-between">
                  <p>
                    Already have an account{" "}
                    <span className=" cursor-pointer font-extrabold text-blue-300">
                      <Link to="/login"> Login</Link>
                    </span>
                  </p>
                  <button
                    className="  rounded-full border-2 border-blue-600 bg-richblue-5 px-9 py-2 text-lg  font-semibold text-richblack-900 transition-all duration-300  hover:scale-105 hover:bg-richblue-50"
                    type="submit"
                  >
                    {loading ? "wait.." : "Signup"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
