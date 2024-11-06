import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 8,
    name: "My Notes",
    path: "/dashboard/my-notes",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscArchive",
  },
  {
    id: 8,
    name: "Add Notes",
    path: "/dashboard/add-Notes",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
]

// import {
//   VscAccount,
//   VscAdd,
//   VscDashboard,
//   VscHistory,
//   VscMortarBoard,
//   VscVm,
// } from "react-icons/vsc"

// export const sidebarLinks = [
//   {
//     id: 1,
//     name: "My Profile",
//     path: "/dashboard/my-profile",

//     icon: VscAccount,
//   },
//   {
//     id: 2,
//     name: "Dashboard",
//     path: "/dashboard/instructor",
//     type: "Instructor",
//     icon: VscDashboard,
//   },
//   {
//     id: 3,
//     name: "My Courses",
//     path: "/dashboard/my-courses",
//     type: "Student",
//     icon: VscVm,
//   },
//   {
//     id: 4,
//     name: "Add Course",
//     path: "/dashboard/add-course",
//     type: "Instructor",
//     icon: VscAdd,
//   },
//   {
//     id: 5,
//     name: "Enrolled Courses",
//     path: "/dashboard/enrolled-courses",
//     type: "Student",
//     icon: VscMortarBoard,
//   },
//   {
//     id: 6,
//     name: "Purchase History",
//     path: "/dashboard/purchase-history",
//     type: "Student",
//     icon: VscHistory,
//   },
// ]
