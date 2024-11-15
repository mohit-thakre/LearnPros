import { useEffect, useState } from "react"
import { ImCross } from "react-icons/im"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { TiThMenu } from "react-icons/ti"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../Common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function SideBarCom() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [desktopClass, setDesktopClass] = useState(true)
  const { user } = useSelector((state) => state.profile)
  const ACCOUNT_TYPE = user?.accountType

  const handleSidebarClose = () => {
    setMobileMenu(!mobileMenu)
    setDesktopClass(!desktopClass)
  }

  return (
    <>
      <div className=" relative">
        <button
          className="  hover:bg-gray-700 absolute left-0 z-30  flex items-center  justify-center rounded-full bg-richblack-600 p-3 text-white shadow-lg transition-colors lg:hidden"
          onClick={() => {
            setMobileMenu(!mobileMenu)
            setDesktopClass(!desktopClass)
          }}
        >
          {mobileMenu ? (
            <>
              <IoMdCloseCircleOutline className="text-3xl" />
            </>
          ) : (
            <>
              <TiThMenu className="text-3xl" />
            </>
          )}
        </button>
        <div
          className={`${
            desktopClass
              ? "hidden lg:flex"
              : "bg-gray-900 fixed inset-0 top-20 z-10 flex bg-opacity-75 backdrop-blur-[2px] transition-all duration-300 ease-in-out"
          }`}
        >
          <div className="footer flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-700  py-10">
            <div className="flex flex-col">
              {ACCOUNT_TYPE &&
                sidebarLinks.map((link) => {
                  if (!link.type || link.type === ACCOUNT_TYPE) {
                    return (
                      <SidebarLink
                        key={link.id}
                        link={link}
                        iconName={link.icon}
                        onClick={handleSidebarClose}
                      />
                    )
                  } else {
                    return null
                  }
                })}
            </div>
            <div className="mx-auto mb-6 mt-6 h-[1px] w-10/12 bg-richblack-700" />
            <div className="flex flex-col">
              <SidebarLink
                link={{ name: "Settings", path: "/dashboard/settings" }}
                iconName="VscSettingsGear"
                onClick={handleSidebarClose}
              />
              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="px-8 py-2 text-sm font-medium text-richblack-300"
              >
                <div className="flex items-center gap-x-2">
                  <VscSignOut className="text-lg" />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
