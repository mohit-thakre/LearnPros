import toast from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { contactusEndpoint } from "../apis"

export function contactUS(form) {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        form
      )
      console.log(response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Message Sent Successful")
    } catch (error) {
      console.log("contact us............", error)
      toast.error("Failed To Send Message")
    }
  }
}
