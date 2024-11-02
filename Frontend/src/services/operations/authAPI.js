import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function sendOtp(form, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, form)
      console.log(response, "of send otp")
      if (response.status !== 200) {
        toast.error(response.data.message)
      }
      console.log("form data -", form)
      localStorage.setItem("signupFormData", JSON.stringify(form))
      toast.success(response.data.message)
      navigate("/verify-email")
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(setLoading(false))
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })
      if (password !== confirmPassword) {
        toast.error("Password not Match")
        return
      }
      if (password.length < 8) {
        toast.error("Password not strong")
        return
      }

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        toast.error(response.data.message)
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
  }
}

export function login(form, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const result = await apiConnector("POST", LOGIN_API, form)
      console.log(result, "at LOGINN")

      const token = result.data.token
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(result.data.user))
      localStorage.setItem(
        "avatar",
        `https://api.dicebear.com/5.x/initials/svg?seed=${result.data.user.firstName} ${result.data.user.lastName}`
      )

      dispatch(setToken(token))
      dispatch(setUser(result.data.user))

      if (result.status !== 200) {
        toast.error(result.data.message)
        dispatch(setToken(null))
        return
      }
      toast.success(result.data.message)
      navigate("/dashboard/my-profile")
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(setLoading(false))
  }
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      })

      console.log("RESET PASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }

    dispatch(setLoading(false))
  }
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/login")
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}
