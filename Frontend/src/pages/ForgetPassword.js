import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { apiConnector } from "../services/apiConnector"
import { endpoints } from "../services/apis"
import { getPasswordResetToken } from "../services/operations/authAPI"

const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  const { loading } = useSelector((state) => state.auth)
  const [emailSent, setEmailSent] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-richblack-900">
      <div className="flex h-[60vh] w-[98%] items-center justify-center rounded-xl rounded-bl-[80px] rounded-tr-[80px] bg-white md:w-[50%]">
        <form onSubmit={handleSubmit}>
          <div className="flex py-5">
            <h1 className="text-5xl">🔐</h1>
            <h1 className="text-xl font-medium">
              <p className="text-sm font-semibold">
                Create a new password to login your account,
              </p>
              Forgot Password?
            </h1>
          </div>
          <div className="relative mt-10 flex h-12 w-full rounded-xl">
            <input
              required
              className="peer w-full rounded-xl border border-[#4070f4] bg-transparent bg-white px-4 text-base font-medium outline-none focus:shadow-md"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute left-4 top-1/2 translate-y-[-50%] bg-white px-2 text-base font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4070f4]"
              htmlFor="email"
            >
              Enter Email
            </label>
          </div>
          <p className="py-3 text-sm font-semibold text-caribbeangreen-500">
            {emailSent && (
              <p>
                "Email Sent Successfully, Please Check Your Email to Continue
                Further"
              </p>
            )}
          </p>
          <div className="mt-6 flex items-center justify-between gap-8">
            <button
              type="button"
              className="w-full rounded-[8px] border-2 border-black px-[12px] py-[12px] font-medium text-richblack-900"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full rounded-[8px] bg-yellow-50 px-[12px] py-[12px] font-medium text-richblack-900"
            >
              {loading
                ? "wait.."
                : `${emailSent ? "Resend Email" : " Send Email"}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
