import { useEffect, useState } from "react"
import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

import { resetCourseState } from "../../../slices/courseSlice"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName]
  const location = useLocation()
  const dispatch = useDispatch()

 
  const [activeBar, setActiveBar] = useState(location.pathname)

  useEffect(() => {
    setActiveBar(location.pathname)
  }, [location])

  if (location.pathname === "/dashboard") {
    return <h1>404 route not found</h1>
  }

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-3 text-sm font-medium ${
      activeBar === link.path
          ? "bg-richblack-600  text-yellow-50"
          : "bg-opacity-0 text-richblack-300 "
      } transition-all duration-200`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.30rem] bg-yellow-25 ${
          activeBar === link.path ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}
