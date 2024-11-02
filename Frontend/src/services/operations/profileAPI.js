import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
  GET_USER_DETAILS_API,
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API,
} = profileEndpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
   
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        toast.error(response.data.message)
        return
      }

      dispatch(setUser(response.data.data))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
   
    dispatch(setLoading(false))
  }
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    // console.log(
    //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
    //   response
    // )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }
  toast.dismiss(toastId)
  return result
}

export async function getInstructorData(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    })
    console.log("GET_INSTRUCTOR_DATA_API API RESPONSE............", response)
    result = response?.data?.courses
  } catch (error) {
    console.log("GET_INSTRUCTOR_DATA_API API ERROR............", error)
    toast.error("Could Not Get Instructor Data")
  }
  toast.dismiss(toastId)
  return result
}
