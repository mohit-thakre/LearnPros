import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import OtpInput from "react-otp-input"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { apiConnector } from "../services/apiConnector"
import { endpoints } from "../services/apis"
import { signUp } from "../services/operations/authAPI"

function VerifyOtp() {
  const [otp, setOtp] = useState("")
  const [isResending, setIsResending] = useState(false)
  const navigate = useNavigate()
  const signupData = JSON.parse(localStorage.getItem("signupFormData"))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!signupData) {
      navigate("/signup")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { accountType, firstName, lastName, email, password, confirmPassword } =
    signupData

  const handleVerifyAndSignup = async (e) => {
    e.preventDefault()
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    )
  }

  // Handle Resend OTP
  const handleResendOtp = async (e) => {
    e.preventDefault()
    dispatch(setOtp(email, navigate))
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-richblack-900">
      <div className="flex h-[60vh] w-[98%] items-center justify-center rounded-xl rounded-bl-[80px] rounded-tr-[80px] bg-white md:w-[50%]">
        <form onSubmit={handleVerifyAndSignup}>
          <div className="flex py-5">
            <h1 className="text-5xl">⏰</h1>
            <h1 className="text-xl font-medium">
              <p className="text-sm font-semibold">Great, Almost Done,</p>
              Please verify your email
            </h1>
          </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="aspect-square w-[48px] rounded-[0.5rem] border-0 bg-richblack-800 text-center text-richblack-5 focus:border-0 focus:outline-2 focus:outline-yellow-50 lg:w-[60px]"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />
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
              Verify Email
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleResendOtp}
              className="text-sm text-blue-500 hover:underline"
              disabled={isResending}
            >
              {isResending ? "Resending OTP..." : "Resend OTP"}🔄️
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyOtp
