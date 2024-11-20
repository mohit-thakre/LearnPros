import React, { useEffect, useState } from "react"
import { FaAngleDown, FaCartArrowDown } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { TiThMenu } from "react-icons/ti"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/learnpros_dark1.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { fetchNotesCatagory } from "../../services/operations/notesAPI"
import { ACCOUNT_TYPE } from "../../utils/constants"

const NavigationBar = () => {
  const [activeBar, setActiveBar] = useState("Home")
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const avatar = localStorage.getItem("avatar")

  const [categoryLink, setCategoryLink] = useState([])
  const [categoryLink1, setCategoryLink1] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu)

  const location = useLocation()

  const fetchCategories = async () => {
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API)
      const response1 = await fetchNotesCatagory()
      if (response1) {
        setCategoryLink1(response1)
      }
      setCategoryLink(response.data.data)
    } catch (error) {
      // console.log(error, "nav bar")
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
        <Link to="/" className=" flex items-end justify-center">
          <img className=" h-14" src={logo} alt="Logo" />
          <span className="ml-[-5px] text-[10px] font-bold text-white">
            {/* .Tech */}
          </span>
        </Link>
      </div>

      <div className="hidden gap-5 text-[17px] font-medium lg:flex">
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
                    <div className=" absolute z-30 flex w-[300px]  translate-y-[-20px]  flex-col rounded-xl p-6  px-4 py-2 text-black">
                      <div
                        className="footer3 absolute z-30 flex  w-[300px] flex-col rounded-xl bg-white px-4 py-2 text-black"
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
                              className="footer my-1 block rounded-lg border border-richblack-600 px-4 py-2 text-center text-white hover:border-2 hover:border-yellow-200"
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
                    <div className=" absolute z-30 flex w-[300px]  translate-y-[-20px]  flex-col rounded-xl p-6  px-4 py-2 text-black">
                      <div
                        className="footer3 absolute z-30 flex  w-[300px] flex-col rounded-xl bg-white px-4 py-2 text-black"
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
                              className="footer my-1 block rounded-lg border border-richblack-600 px-4 py-2 text-center text-white hover:border-2 hover:border-yellow-200"
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
          <div className="hidden border-x border-richblack-700 lg:flex">
            <Link to="/login">
              <button className="mx-4 rounded-full  bg-blue-200 px-9 py-2 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-richblack-900">
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className=" hidden items-center justify-around lg:flex">
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

      <div className="relative text-4xl lg:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenu ? <ImCross className=" text-3xl" /> : <TiThMenu />}
        </button>

        {mobileMenu && (
          <div className="fixed inset-0 z-[1000] mt-0 flex min-h-screen w-full items-center justify-center overflow-scroll bg-opacity-75 backdrop-blur-xl transition-all duration-300">
            <h1
              onClick={toggleMobileMenu}
              className="footer absolute left-5 top-3 flex items-center justify-center gap-2 rounded-xl bg-richblack-700 p-2 text-lg font-bold"
            >
              close menu
              <ImCross className=" rounded-full text-lg" />
            </h1>
            <div className="flex w-3/4 max-w-xs flex-col items-center justify-center gap-6 rounded-lg p-4 shadow-lg">
              {NavbarLinks.map((item, index) => (
                <div key={index} className="w-full">
                  {item.title === "Notes" ? (
                    <div
                      onClick={() => {
                        setIsNotesOpen(!isNotesOpen)
                        setIsCatalogOpen(false)
                      }}
                      className={`relative w-full px-2 py-2 text-center text-lg font-bold capitalize text-white shadow-xl ${
                        activeBar === item.title ? "text-yellow-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span>{item.title}</span>
                        <FaAngleDown />
                      </div>
                      {isNotesOpen && (
                        <div className="absolute z-30 mt-2 w-[200px] rounded-xl bg-white px-4 py-2 text-black">
                          {categoryLink1.length > 0 ? (
                            categoryLink1.map((Item, index) => (
                              <Link
                                key={index}
                                to={`/notes/${Item.name.replace(/\s+/g, "-")}`}
                                className="block rounded-lg border-yellow-200 px-4 py-2 text-center hover:border-2"
                                onClick={() => {
                                  setActiveBar("Notes")
                                  setMobileMenu(false)
                                }}
                              >
                                {Item.name}
                              </Link>
                            ))
                          ) : (
                            <p className="text-center">
                              No categories available
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : item.title === "Catalog" ? (
                    <div
                      onClick={() => {
                        setIsCatalogOpen(!isCatalogOpen)
                        setIsNotesOpen(false)
                      }}
                      className={`relative w-full px-2 py-2 text-center text-lg font-bold capitalize text-white shadow-xl ${
                        activeBar === item.title ? "text-yellow-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span>{item.title}</span>
                        <FaAngleDown />
                      </div>
                      {isCatalogOpen && (
                        <div className="footer2 absolute z-30 mt-2 w-[200px] rounded-xl bg-white px-4 py-2 text-black">
                          {categoryLink.length > 0 ? (
                            categoryLink.map((Item, index) => (
                              <Link
                                key={index}
                                to={`/catalog/${Item.name.replace(
                                  /\s+/g,
                                  "-"
                                )}`}
                                className="footer my-1 block rounded-lg border border-richblack-600 px-4 py-2 text-center text-white hover:border-2 hover:border-yellow-200"
                                onClick={() => {
                                  setActiveBar("Catalog")
                                  setMobileMenu(false)
                                }}
                              >
                                {Item.name}
                              </Link>
                            ))
                          ) : (
                            <p className="text-center">
                              No categories available
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => {
                        handleActiveBar(item.title)
                        setMobileMenu(false)
                      }}
                      className="block w-full px-2 py-2 text-center text-lg font-bold capitalize text-white shadow-xl"
                    >
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
              {token === null ? (
                <Link to="/login" onClick={() => setMobileMenu(false)}>
                  <button className="mx-4 rounded-full bg-blue-200 px-9 py-2 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-richblack-900">
                    Login
                  </button>
                </Link>
              ) : (
                <div className="flex flex-col items-center justify-around gap-3">
                  {user && user?.accountType == ACCOUNT_TYPE.STUDENT ? (
                    <Link to="/dashboard/cart">
                      <button className="flex w-full items-center justify-center gap-2 px-2 py-2 text-center text-lg font-bold capitalize text-white shadow-xl">
                        Cart{" "}
                        <FaCartArrowDown className="  text-caribbeangreen-100" />
                      </button>
                    </Link>
                  ) : (
                    <Link to="/dashboard/instructor">
                      <button
                        onClick={() => {
                          setMobileMenu(false)
                        }}
                        className=" rounded-full border-b-2 border-r-2 bg-richblack-800 px-6 py-3 text-lg font-bold text-yellow-25 transition-all duration-300 hover:scale-105 hover:bg-richblack-900 sm:w-auto sm:px-9 sm:py-4 sm:text-xl"
                      >
                        Dashboard
                      </button>
                    </Link>
                  )}

                  <Link to="/dashboard/my-profile">
                    <button
                      onClick={() => {
                        setMobileMenu(false)
                      }}
                      className=" rounded-full border-b-2 border-r-2 bg-richblack-800 px-6 py-3 text-lg font-bold text-caribbeangreen-300 transition-all duration-300 hover:scale-105 hover:bg-richblack-900 sm:w-auto sm:px-9 sm:py-4 sm:text-xl"
                    >
                      MyProfile
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationBar
