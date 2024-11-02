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
import { category } from "../../services/apis"

const NavBar = () => {
  const [activeBar, setActiveBar] = useState("Home")
  const { token } = useSelector((state) => state.authSlice)
  const { user } = useSelector((state) => state.profileSlice)
  const { totalItems } = useSelector((state) => state.cartSlice)
  const [categoryLink, setCategoryLink] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()

  const fetchCategories = async () => {
    try {
      const response = await apiConnector("GET", category.showCategory)
      setCategoryLink(response.data.data)
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
                            to={`/category/${Item.name}`}
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
                )}
              </div>
            ) : (
              <Link to={item.path} onClick={() => handleActiveBar(item.title)}>
                <span
                  className={`cursor-pointer ${
                    activeBar === item.title ? "text-yellow-50" : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>

      <div>
        {token === null ? (
          <div className="border-x border-pure-greys-400">
            <Link to="/login">
              <button className="mx-4 rounded-full border-b-2 border-r-2 bg-yellow-50 px-9 py-2 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-richblack-900">
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/dashboard/cart">
              <button className="mx-4 text-2xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                <FaCartArrowDown />
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="mx-4 text-2xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                <MdOutlineSpaceDashboard />
              </button>
            </Link>
            <Link to="/dashboard/profile">
              <button className="mx-4 text-2xl transition-all duration-300 hover:scale-125 hover:bg-richblack-900">
                <LuUserCircle2 />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
