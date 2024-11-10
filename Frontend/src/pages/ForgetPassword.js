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
    <div className="flex h-screen w-full items-center justify-center bg-richblack-900 px-4 sm:px-8">
      <div className="flex h-[70vh] w-full max-w-md items-center justify-center rounded-xl rounded-bl-[40px] rounded-tr-[40px] bg-white p-8 md:max-w-lg md:rounded-bl-[80px] md:rounded-tr-[80px]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex items-center gap-4 py-5">
            <h1 className="text-3xl sm:text-5xl">🔐</h1>
            <h1 className="text-lg font-medium sm:text-xl">
              <p className="text-sm font-semibold sm:text-base">
                Create a new password to log in to your account,
              </p>
              Forgot Password?
            </h1>
          </div>
          <div className="relative mt-6 flex h-12 w-full rounded-xl">
            <input
              required
              className="peer w-full rounded-xl border border-[#4070f4] bg-transparent px-4 text-sm font-medium outline-none focus:shadow-md md:text-base"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-2 text-sm font-semibold duration-150 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-xs peer-valid:text-[#4070f4] peer-focus:left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#4070f4] md:text-base"
              htmlFor="email"
            >
              Enter Email
            </label>
          </div>
          <p className="py-3 text-center text-sm font-semibold text-caribbeangreen-500">
            {emailSent && (
              <span>
                Email Sent Successfully. Please check your email to continue.
              </span>
            )}
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="w-full rounded-md border-2 border-black px-4 py-2 font-medium text-richblack-900 sm:w-auto"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full rounded-md bg-yellow-50 px-4 py-2 font-medium text-richblack-900 sm:w-auto"
            >
              {loading ? "Wait..." : emailSent ? "Resend Email" : "Send Email"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
