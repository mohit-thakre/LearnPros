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
      // console.log(response, "of send otp")
      if (form.password !== form.confirmPassword) {
        toast.error("Passwords do not match.")
        dispatch(setLoading(false))
        return
      }
      if (form.password.length < 8) {
        toast.error("Password must be at least 8 characters long.")
        dispatch(setLoading(false))
        return
      }
      if (response.status !== 200) {
        toast.error(response.data.message)
      }
      // console.log("form data -", form)
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

    // Client-side validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.")
      dispatch(setLoading(false))
      return
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.")
      dispatch(setLoading(false))
      return
    }

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

      // console.log("SIGNUP API RESPONSE:", response)

      if (!response.data.success) {
        toast.error(response?.data?.message || "Signup failed.")
        throw new Error(response.data.message)
      }

      toast.success("Signup successful!")
      navigate("/login")
    } catch (error) {
      // console.log("SIGNUP API ERROR:", error)

      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      )
      navigate("/signup")
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export function login(form, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const result = await apiConnector("POST", LOGIN_API, form)

      if (result.status === 401) {
        toast.error("Password is incorrect. Please try again.")
        dispatch(setLoading(false))
        return
      }

      if (result.status !== 200) {
        toast.error(result.data.message)
        dispatch(setToken(null))
        dispatch(setLoading(false))
        return
      }

      const token = result.data.token
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(result.data.user))
      localStorage.setItem(
        "avatar",
        `https://api.dicebear.com/5.x/initials/svg?seed=${result.data.user.firstName} ${result.data.user.lastName}`
      )

      dispatch(setToken(token))
      dispatch(setUser(result.data.user))
      toast.success(result.data.message)
      navigate("/dashboard/my-profile")
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error(
          error.response.data.message ||
            "Password is incorrect. Please try again."
        )
      } else {
        toast.error(
          error.message || "An error occurred. Please try again later."
        )
      }
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

      // console.log("RESET PASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      // console.log("RESETPASSTOKEN ERROR............", error)
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

      // console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/login")
    } catch (error) {
      // console.log("RESETPASSWORD ERROR............", error)
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
