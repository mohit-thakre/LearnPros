import React, { useEffect, useState } from "react"
import { FaAngleDown, FaCartArrowDown } from "react-icons/fa"
import { LuUserCircle2 } from "react-icons/lu"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo-Full-Light.png"
// Add useLocation to track current URL
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { fetchNotesCatagory } from "../../services/operations/notesAPI"
import { ACCOUNT_TYPE } from "../../utils/constants"

const NavigationBar = () => {
  const [activeBar, setActiveBar] = useState("Home")
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const avatar = localStorage.getItem("avatar")

  const [categoryLink, setCategoryLink] = useState([])
  const [categoryLink1, setCategoryLink1] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const location = useLocation()

  const fetchCategories = async () => {
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API)
      const response1 = await fetchNotesCatagory()
      if (response1) {
        setCategoryLink1(response1)
        console.log("===>===>REd", response1)
      }
      setCategoryLink(response.data.data)
      console.log("===>===>cat", response.data.data)
    } catch (error) {
      console.log(error, "nav bar")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    const currentPath = location.pathname
    const activeLink = NavbarLinks.find((item) => item.path === currentPath)
    if (activeLink) {
      setActiveBar(activeLink.title)
    } else {
      setActiveBar(null)
    }
  }, [location])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleActiveBar = (title) => {
    setActiveBar(title)
  }

  return (
    <div className=" z-40 flex h-20 w-full items-center justify-around bg-richblack-900 text-white shadow-sm shadow-caribbeangreen-900">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="flex gap-5 text-[17px] font-medium">
        {NavbarLinks.map((item, index) => (
          <div key={index}>
            {item.title === "Notes" ? (
              <div
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                className={`relative ${
                  activeBar === item.title ? "text-yellow-50" : ""
                }`}
              >
                <div className=" flex flex-row items-center justify-center gap-1">
                  <span>{`${item.title}`}</span>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
                {isHovered1 && (
                  <div className="">
                    <div
                      className="absolute z-30 h-10 w-10 bg-white"
                      style={{
                        left: "89.3%",
                        top: "10%",
                        transform: "translateX(-50%) rotate(45deg)",
                        top: "99%",
                        backgroundColor: "#f0f0f0",
                      }}
                    ></div>
                    <div className=" absolute z-30 flex w-[200px]  translate-y-[-20px]  flex-col rounded-xl p-6  px-4 py-2 text-black">
                      <div
                        className="absolute z-30 flex  w-[200px] flex-col rounded-xl bg-white px-4 py-2 text-black"
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: "100%",
                          marginTop: "8px",
                        }}
                      >
                        {categoryLink1.length > 0 ? (
                          categoryLink1.map((Item, index) => (
                            <Link
                              key={index}
                              to={`/notes/${Item.name.replace(/\s+/g, "-")}`}
                              className="rounded-lg border-yellow-200 px-4 py-2 text-center hover:border-2"
                              onClick={() => setActiveBar("Catalog")}
                            >
                              {Item.name}
                            </Link>
                          ))
                        ) : (
                          <p>No categories available</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {item.title === "Catalog" ? (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative ${
                  activeBar === item.title ? "text-yellow-50" : ""
                }`}
              >
                <div className=" flex flex-row items-center justify-center gap-1">
                  <span>{`${item.title}`}</span>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
                {isHovered && (
                  <div className="">
                    <div
                      className="absolute z-30 h-10 w-10 bg-white"
                      style={{
                        left: "89.3%",
                        top: "10%",
                        transform: "translateX(-50%) rotate(45deg)",
                        top: "99%",
                        backgroundColor: "#f0f0f0",
                      }}
                    ></div>
                    <div className=" absolute z-30 flex w-[200px]  translate-y-[-20px]  flex-col rounded-xl p-6  px-4 py-2 text-black">
                      <div
                        className="absolute z-30 flex  w-[200px] flex-col rounded-xl bg-white px-4 py-2 text-black"
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: "100%",
                          marginTop: "8px",
                        }}
                      >
                        {categoryLink.length > 0 ? (
                          categoryLink.map((Item, index) => (
                            <Link
                              key={index}
                              to={`/catalog/${Item.name.replace(/\s+/g, "-")}`}
                              className="rounded-lg border-yellow-200 px-4 py-2 text-center hover:border-2"
                              onClick={() => setActiveBar("Catalog")}
                            >
                              {Item.name}
                            </Link>
                          ))
                        ) : (
                          <p>No categories available</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.path} onClick={() => handleActiveBar(item.title)}>
                <span
                  className={`cursor-pointer ${
                    activeBar === item.title ? "text-yellow-50" : ""
                  }`}
                >
                  {item.title === "Notes" ? "" : item.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>

      <div>
        {token === null ? (
          <div className="border-x border-richblack-700">
            <Link to="/login">
              <button className="mx-4 rounded-full  bg-blue-200 px-9 py-2 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-richblack-900">
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className=" flex items-center justify-around">
            {user && user?.accountType == ACCOUNT_TYPE.STUDENT ? (
              <Link to="/dashboard/cart">
                <button className="mx-4 text-3xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                  <FaCartArrowDown />
                </button>
              </Link>
            ) : (
              <Link to="/dashboard/instructor">
                <button className="mx-4 text-3xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                  <MdOutlineSpaceDashboard />
                </button>
              </Link>
            )}

            <Link to="/dashboard/my-profile">
              <button className="mx-4 text-2xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                <img
                  className=" h-[30px] w-[30px] rounded-full border-[2px] border-yellow-25"
                  src={user && user?.image ? user?.image : avatar}
                  alt="profileImage"
                ></img>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationBar
