import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createNotes, editNotes, fetchNotesCatagory } from '../../../../services/operations/notesAPI'
import Upload from '../AddCourse/Upload'
import IconBtn from '../../../Common/IconBtn'
import { useParams } from 'react-router-dom'
import UploadPdf from './UploadPdf'

const RenderNotes = ({ notes = null }) => {
  const [loading, setLoading] = useState(false)
  const [notesCategories, setNotesCategories] = useState([])
  const { notesId } = useParams()
  const fetchCategories = async () => {
    try {
      const response1 = await fetchNotesCatagory()
      if (response1) {
        setNotesCategories(response1)
      }
    } catch (error) {
      console.log(error, "render notes")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      NotesName: notes ? notes.NotesName : '',
      NotesDescription: notes ? notes.NotesDescription : '',
      category: notes?.category?._id || '',
      NotesPdf: notes ? notes.NotesPdf : null,
    }
  })

  const token = localStorage.getItem("token")

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("NotesName", data.NotesName)
    formData.append("NotesDescription", data.NotesDescription)
    formData.append("category", data.category)
    formData.append("NotesPdf", data.NotesPdf)

    
   
    if(notes){
       formData.append("notesId", notesId)
     console.log(notes,"===\\\===?>")
     console.log(notesId)
      const res = await editNotes(formData,token)
    }
    else{
const response = await createNotes(formData, token)
    }
  }

  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Notes Builder</p>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* NOTES NAME */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="NotesName">
            Notes Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="NotesName"
            disabled={loading}
            placeholder="Add a Notes Name"
            {...register("NotesName", { required: true })}
            className="form-style w-full"
          />
          {errors.NotesName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Notes name is required
            </span>
          )}
        </div>

        {/* NOTES DESCRIPTION */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="NotesDescription">
            Notes Description <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="NotesDescription"
            placeholder='Add a Notes Description'
            disabled={loading}
            {...register("NotesDescription", { required: true })}
            className="form-style w-full"
          />
          {errors.NotesDescription && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Notes Description is required
            </span>
          )}
        </div>

        {/* NOTES CATEGORY */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="Category">
            Notes Category <sup className="text-pink-200">*</sup>
          </label>
          <select
            {...register("category", { required: true })}
            id="Category"
            className="form-style w-full"
            disabled={loading}
          >
            <option value="" disabled>
              Choose a Category
            </option>
            {loading ? "wait" : notesCategories.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Notes Category is required
            </span>
          )}
        </div>

        {/* NOTES PDF */}
        <UploadPdf
          name="NotesPdf"
          label="Notes PDF"
          register={register}
          setValue={setValue}
          errors={errors}
          editData={notes ? notes.NotesPdf : null}
          pdf={true}
          defaultValue={notes && notes.NotesPdf}
        />

        <IconBtn
          type="submit"
          disabled={loading}
          text="Submit"
        />
      </form>
    </div>
  )
}

export default RenderNotes
