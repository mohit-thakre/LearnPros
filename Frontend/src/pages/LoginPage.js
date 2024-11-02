import React, { useState } from "react"
import toast from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/Images/login-img-7.webp"
import Css from "../pages/HomePage.css"
import { apiConnector } from "../services/apiConnector"
import { endpoints } from "../services/apis"
import { login } from "../services/operations/authAPI"
import { setToken } from "../slices/authSlice"
import { setUser } from "../slices/profileSlice"

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [eye, setEyeSlash] = useState(true)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    console.log(form, "DATA")
    setLoading(true)
    e.preventDefault()
    dispatch(login(form, navigate))
    setLoading(false)
  }

  if (loading) {
    return <h1 className=" bg-black p-8 text-4xl text-white">loading</h1>
  }

  return (
    <div className=" flex min-h-screen w-full items-center justify-center bg-gradient-to-bl from-richblack-5 to-white">
      <div className="bgimg1 flex h-[90vh] w-[70%] justify-between  rounded-xl rounded-bl-[80px] bg-white p-5 ">
        <div className="bgimg h-full w-[40%] rounded-bl-[60px]  rounded-tr-[60px] bg-yellow-50">
          <img className=" h-[80%] " src={logo} alt="ad" />
        </div>

        <div className=" flex w-[55%] items-center justify-center ">
          <div className=" flex flex-col justify-start gap-3 text-black">
            <div className=" flex">
              <h1 className=" text-5xl">👋</h1>
              <h1 className=" text-2xl font-medium">
                <p className=" text-sm font-semibold ">hi, Unstoppable! ,</p>
                Welcome Back to Code Help!
              </h1>
            </div>
            <form className=" flex w-full flex-col" onSubmit={handleSubmit}>
              <div>
                <div class="relative mt-10 flex h-12 w-full rounded-xl">
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

                <div className=" item-center flex gap-3">
                  <div class="relative mt-7 flex h-12 w-full  rounded-xl">
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
                </div>
                <button
                  className=" mt-7 w-full  rounded-full border-2 border-blue-600 bg-richblue-5 px-9 py-2 text-lg  font-semibold text-richblack-900 transition-all duration-300  hover:scale-105 hover:bg-richblue-50"
                  type="submit"
                >
                  Login
                </button>
                <Link
                  to="/forgot-password"
                  className=" px-1 py-2 font-semibold text-blue-300"
                >
                  Forgot Password?{" "}
                </Link>
                <p className=" mt-7">
                  Dont have an account{" "}
                  <span className=" cursor-pointer font-extrabold text-blue-300">
                    <Link to="/signup"> Signup</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
