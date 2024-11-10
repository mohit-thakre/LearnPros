import React, { useState } from "react"
import toast from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/Images/login-img-7.webp"
import Css from "../pages/HomePage.css"
import { login } from "../services/operations/authAPI"

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
    e.preventDefault()
    setLoading(true)
    try {
      dispatch(login(form, navigate))
      toast.success("Login successful!")
    } catch (error) {
      toast.error("Failed to login. Please try again.")
    } finally {
      setLoading(false)
    }
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
                <p className="text-sm font-semibold">Hi,LearnProsers</p>
                Welcome Back to LearnPros!
              </h1>
            </div>

            <form className="flex w-full flex-col" onSubmit={handleSubmit}>
              <div>
                <div className="relative mt-5 flex h-12 w-full rounded-xl md:mt-10">
                  <input
                    required
                    className="peer w-full rounded-xl border  border-[#4070f4] bg-transparent px-4 text-sm font-medium outline-none focus:shadow-md md:text-base"
                    name="email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                  >
                    Email
                  </label>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <div className="relative flex h-12 w-full rounded-xl">
                    <input
                      required
                      className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 text-sm font-medium outline-none focus:shadow-md md:text-base"
                      name="password"
                      id="password"
                      type={eye ? "password" : "text"}
                      value={form.password}
                      onChange={handleOnChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white px-2 text-base font-semibold text-black transition-all duration-150 peer-valid:left-3 peer-valid:top-0 peer-valid:text-[#4070f4] peer-focus:top-0 peer-focus:text-[#4070f4]"
                    >
                      Password
                    </label>
                    <p
                      className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
                      onClick={() => setEyeSlash(!eye)}
                    >
                      {eye ? <FaEye /> : <FaEyeSlash />}
                    </p>
                  </div>
                </div>

                <button
                  className="mt-7 w-full rounded-full border-2 border-blue-600 bg-richblue-5 px-9 py-2 text-sm font-semibold text-richblack-900 transition-all duration-300 hover:scale-105 hover:bg-richblue-50 md:text-lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>

                <Link
                  to="/forgot-password"
                  className="mt-4 block text-center font-semibold text-blue-300 hover:underline md:text-left"
                >
                  Forgot Password?
                </Link>

                <p className="mt-7 text-center md:text-left">
                  Don’t have an account?{" "}
                  <span className="font-extrabold text-blue-100">
                    <Link to="/signup">Signup</Link>
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
