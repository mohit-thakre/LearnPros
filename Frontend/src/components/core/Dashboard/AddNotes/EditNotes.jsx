import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import {
  fetchCourseDetails,
  getFullDetailsOfCourse,
} from "../../../../services/operations/courseDetailsAPI"
import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
import RenderSteps from "../AddCourse/RenderSteps"
import { fetchSingleNotes } from "../../../../services/operations/notesAPI"
import RenderNotes from "./RenderNotes"

export default function EditNotes() {
  const dispatch = useDispatch()
  const { notesId } = useParams()
  // const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)
  const [temNotes,setTemNotes] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await fetchSingleNotes({notesID:notesId},token)
      console.log("result=>",result)
       console.log("notesID=>",notesId)
      if (result) {
       setTemNotes(result)
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Notes
      </h1>
      <div className="mx-auto max-w-[600px]">
        {temNotes ? (
         <RenderNotes notes={temNotes} />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Notes not found
          </p>
        )}
      </div>
    </div>
  )
}
