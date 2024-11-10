import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/Images/login-img-4.webp"
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
  const { loading } = useSelector((state) => state.auth)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    dispatch(sendOtp(form, navigate))
  }

  return (
    <div className="footer1  flex min-h-screen w-full items-center justify-center bg-gradient-to-bl from-richblack-900 to-caribbeangreen-900 px-4 md:px-0">
      <div className="footer flex h-auto w-full max-w-[1100px] flex-col items-center justify-between rounded-xl bg-white p-5 shadow-lg lg:h-[90vh] lg:flex-row lg:items-stretch">
        <div className="flex w-full items-center justify-center p-4 lg:w-[40%] lg:p-0">
          <img
            className="h-[80%] w-auto rounded-bl-[60px] rounded-tr-[60px]"
            src={logo}
            alt="ad"
          />
        </div>
        <div className="w-full p-4 lg:w-[60%] lg:p-8">
          <div className="space-y-3 text-white">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl">👋</h1>
              <h1 className="text-2xl font-medium">
                <p className="text-sm font-semibold">Ready to Be,</p>
                Unstoppable! Create an account
              </h1>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="py-4">Create account as</label>
              <div className="flex items-center justify-center gap-2">
                <label
                  className={`cursor-pointer rounded-full px-6 py-0 text-center font-semibold lg:py-3 
                    ${
                      option === "Student"
                        ? "border-2 border-blue-600 text-blue-500"
                        : "border-2 border-dotted text-white"
                    }`}
                  onClick={() => setOption("Student")}
                >
                  Student
                  <input
                    type="radio"
                    name="accountType"
                    value="Student"
                    onChange={handleOnChange}
                    className="opacity-0"
                  />
                </label>
                <label
                  className={`cursor-pointer rounded-full px-6 py-0 text-center font-semibold lg:py-3 
                    ${
                      option === "Instructor"
                        ? "border-2 border-blue-600 text-blue-500"
                        : "border-2 border-dotted text-white"
                    }`}
                  onClick={() => setOption("Instructor")}
                >
                  Instructor
                  <input
                    type="radio"
                    name="accountType"
                    value="Instructor"
                    onChange={handleOnChange}
                    className="opacity-0"
                  />
                </label>
              </div>
              <div className="mt-6 flex flex-col gap-3 lg:flex-row">
                <div className="relative flex-1">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                    name="firstName"
                    id="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                </div>

                <div className="relative flex-1">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                    name="lastName"
                    id="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="relative mt-4">
                <input
                  required
                  className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleOnChange}
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="relative mt-4">
                <input
                  required
                  className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                  name="contactNumber"
                  id="contactNumber"
                  type="tel"
                  value={form.contactNumber}
                  onChange={handleOnChange}
                />
                <label
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                  htmlFor="contactNumber"
                >
                  Phone
                </label>
              </div>
              <div className="mt-4 flex flex-col gap-3 lg:flex-row">
                <div className="relative flex-1">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                    name="password"
                    id="password"
                    type={eye ? "password" : "text"}
                    value={form.password}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <span
                    onClick={() => setEyeSlash(!eye)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="relative flex-1">
                  <input
                    required
                    className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 py-3 outline-none focus:shadow-md"
                    name="confirmPassword"
                    id="confirmPassword"
                    type={eye1 ? "password" : "text"}
                    value={form.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <label
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <span
                    onClick={() => setEyeSlash1(!eye1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
                  >
                    {eye1 ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p>
                  Already have an account?
                  <Link
                    to="/login"
                    className="ml-1 font-semibold text-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
                >
                  {loading ? "Loading..." : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
