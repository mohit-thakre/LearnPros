import { useEffect, useState } from "react"
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

  const { user } = useSelector((state) => state.profile)
  const ACCOUNT_TYPE = user?.accountType
  // const { user } = useSelector((state) => state.profile)

  // const data = JSON.parse(localStorage.getItem("user")) || {}
  // const ACCOUNT_TYPE = data.accountType || user.accountType

  console.log("ACCOUNT_TYPE by redux", user, ACCOUNT_TYPE)

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
        <div className="flex flex-col">
          {ACCOUNT_TYPE &&
            sidebarLinks.map((link) => {
              if (!link.type || link.type === ACCOUNT_TYPE) {
                return (
                  <SidebarLink key={link.id} link={link} iconName={link.icon} />
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
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
