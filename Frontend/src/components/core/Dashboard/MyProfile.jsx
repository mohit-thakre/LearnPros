import { RiEditBoxLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { apiConnector } from "../../../services/apiConnector"
import { endpoints, profileEndpoints } from "../../../services/apis"


export default function MyProfile() {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const avatar = localStorage.getItem("avatar")
 const [user, setUser] = useState({});
const [loading,setLoading] = useState(false)
  const fetchUser = async () => {
    
setLoading(true)
    if (!token) {
      toast.error("Login again, and try");
      return;
    }

    try {
      const response = await apiConnector("GET", profileEndpoints.GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      
      });
      console.log(response,"AT MYPROFILE ");
      setUser(response.data.data);
      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {

    fetchUser();
    
  }, []);

  if(loading){
    return <h1 className=" text-4xl font-extrabold mx-auto">Loading..</h1>
  }


  return (
   <>
  <h1 className="mb-14 text-3xl font-medium text-richblack-5">My Profile</h1>

  {/* Profile Section */}
  <div className="categorysec flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-900 p-8 px-12 flex-col sm:flex-row">
    <div className="flex items-center gap-x-4 mb-6 sm:mb-0">
      <img
        src={user && user?.image ? user?.image : avatar}
        alt={`profile-${user?.firstName}`}
        className="aspect-square w-[78px] rounded-full object-cover"
      />
      <div className="space-y-1">
        <p className="text-lg font-semibold text-richblack-5">
          {user?.firstName + " " + user?.lastName}
        </p>
        <p className="text-sm text-richblack-300">{user?.email}</p>
      </div>
    </div>

    <IconBtn
      text="Edit"
      onclick={() => {
        navigate("/dashboard/settings");
      }}
      className="self-center sm:self-auto"
    >
      <RiEditBoxLine />
    </IconBtn>
  </div>

  {/* About Section */}
  <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
    <div className="flex w-full items-center justify-between">
      <p className="text-lg font-semibold text-richblack-5">About</p>
      <IconBtn
        text="Edit"
        onclick={() => {
          navigate("/dashboard/settings");
        }}
      >
        <RiEditBoxLine />
      </IconBtn>
    </div>
    <p
      className={`${
        user?.additionalDetails?.about
          ? "text-richblack-5"
          : "text-richblack-400"
      } text-sm font-medium`}
    >
      {user?.additionalDetails?.about
        ? user?.additionalDetails?.about
        : "Write Something About Yourself"}
    </p>
  </div>

  {/* Personal Details Section */}
  <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
    <div className="flex w-full items-center justify-between">
      <p className="text-lg font-semibold text-richblack-5">Personal Details</p>
      <IconBtn
        text="Edit"
        onclick={() => {
          navigate("/dashboard/settings");
        }}
      >
        <RiEditBoxLine />
      </IconBtn>
    </div>

    <div className="flex flex-col sm:flex-row justify-between gap-y-6 sm:gap-y-0 max-w-[500px]">
      {/* Left Column */}
      <div className="flex flex-col gap-y-5 w-full sm:w-1/2">
        <div>
          <p className="mb-2 text-sm text-richblack-600">First Name</p>
          <p className="text-sm font-medium text-richblack-5">
            {user?.firstName}
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-richblack-600">Email</p>
          <p className="text-sm font-medium text-richblack-5">
            {user?.email}
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-richblack-600">Gender</p>
          <p
            className={`${
              user?.additionalDetails?.gender
                ? "text-richblack-5"
                : "text-richblack-400"
            } text-sm font-medium`}
          >
            {user?.additionalDetails?.gender
              ? user?.additionalDetails?.gender
              : "Add Gender"}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-y-5 w-full sm:w-1/2">
        <div>
          <p className="mb-2 text-sm text-richblack-600">Last Name</p>
          <p className="text-sm font-medium text-richblack-5">
            {user?.lastName}
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
          <p className="text-sm font-medium text-richblack-5">
            {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
          <p className="text-sm font-medium text-richblack-5">
            {formattedDate(user?.additionalDetails?.dateOfBirth) ??
              "Add Date Of Birth"}
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
