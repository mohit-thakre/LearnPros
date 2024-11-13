import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../Common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"
import { fetchInstructorNotes } from "../../../services/operations/notesAPI"
import NotesTable from "./AddNotes/NotesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [notes,setNotes] = useState([])
const location = useLocation()

   const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      const result1 = await fetchInstructorNotes(token)
      if(result1){
      
        setNotes(result1)
        console.log("result🔐🔐🔐",result1)
       
      }
       
      if (result) {
        setCourses(result)

      }
      console.log("result====>===>",result)
      console.log(location.pathname)
    }
  useEffect(() => {
   
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">{location.pathname==="/dashboard/my-notes" ?"My Notes" :"My Courses"}</h1>
        {location.pathname==="/dashboard/my-notes" ? <IconBtn
          text="Add Notes"
          onclick={() => navigate("/dashboard/add-notes")}
        >
          <VscAdd />
        </IconBtn> : <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>}
       
      </div>
      {
        location.pathname==="/dashboard/my-notes" ?
        (notes && <NotesTable notes={notes} setNotes={setNotes} />) :(courses && <CoursesTable courses={courses} setCourses={setCourses} />)
      }
      
     

    </div>
  )
}
