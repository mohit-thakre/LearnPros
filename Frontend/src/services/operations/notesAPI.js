import toast from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { notesEndpoints } from "../apis"

const {
  CREATE_NOTES_API,
  DELETE_NOTES_API,
  EDIT_NOTES_API,
  GET_NOTES_API,
  NOTES_CATEGORIES_API,
  NOTES_CATALOGPAGEDATA_API,
  GET_INSTRUCTOR_NOTES_API,
  GET_SINGLE_NOTES_API,
  GET_FULL_NOTES_DETAILS,
} = notesEndpoints

export const createNotes = async (data, token) => {
  let result = null
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("POST", CREATE_NOTES_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE NOTES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add NOTES Details")
    }
    toast.success("nOTES Details Added Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE NOTES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastID)
  return result
}

export const editNotes = async (data, token) => {
  let result = null
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("PUT", EDIT_NOTES_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT NOTES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update NOTES Details")
    }
    toast.success("NOTES UPDATED Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE NOTES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastID)
  return result
}

export const deleteNotes = async (data, token) => {
  let result = null
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_NOTES_API, data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    })
    console.log("delete NOTES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not delete NOTES Details")
    }
    toast.success("NOTES DELETED Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("delete NOTES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastID)
  return result
}

export const getNotes = async (token) => {
  let result = []
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("GET", GET_NOTES_API, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET NOTES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not delete NOTES Details")
    }
    toast.success("NOTES FETCHED Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("GET NOTES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastID)
  return result
}

export const fetchNotesCatagory = async () => {
  let result = []
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("GET", NOTES_CATEGORIES_API)
    if (!response?.data?.data) {
      throw new Error("Could Not Fetch Notes Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("NOTES_CATEGORY_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastID)
  return result
}

export const fetchNotesCatalogDetails = async (data, token) => {
  let result = []
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector(
      "POST",
      NOTES_CATALOGPAGEDATA_API,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("NOTES_FULL_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
  } catch (error) {
    console.log("notes_FULL_DETAILS_API API ERROR............", error)
    result = error.response.data
  }
  toast.dismiss(toastID)
  return result
}

export const fetchInstructorNotes = async (token) => {
  let result = []
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector(
      "POST",
      GET_INSTRUCTOR_NOTES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log(
      "INSTRUCTOR_NOTES_FULL_DETAILS_API API RESPONSE............",
      response
    )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log(
      "INSTRUCTOR_NOTES_FULL_DETAILS_API API RESPONSE............",
      error
    )
    result = error.response.data
  }
  toast.dismiss(toastID)
  return result
}

export const fetchSingleNotes = async (data, token) => {
  let result = null
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("POST", GET_SINGLE_NOTES_API, data, {
      Authorization: `Bearer ${token}`,
    })
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
    toast.success("NOTES FOUND")
  } catch (error) {
    console.log("_NOTES_FULL_DETAILS_API API RESPONSE............", error)
    result = error.response?.data
  }
  toast.dismiss(toastID)
  return result
}
export const fetchFullDetailsNotes = async (data, token) => {
  let result = null
  const toastID = toast.loading("loading...")
  try {
    const response = await apiConnector("POST", GET_FULL_NOTES_DETAILS, data, {
      Authorization: `Bearer ${token}`,
    })
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
    toast.success("NOTES FOUND")
  } catch (error) {
    console.log("GET_NOTES_FULL_DETAILS_API API RESPONSE............", error)
    result = error.response?.data
  }
  toast.dismiss(toastID)
  return result
}
