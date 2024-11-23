import React, { useEffect, useState } from "react"
import * as pdfjsLib from "pdfjs-dist/webpack"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { table, tbody, td, th, thead, tr } from "react-super-responsive-table"

import ConfirmationModal from "../components/Common/ConfirmationModal"
import PDFopener from "../components/Common/PDFopener"
import UnderDevelopmentPage from "../components/Common/UnderDevelopmentPage"
import { formatDate } from "../services/formatDate"
import {
  fetchFullDetailsNotes,
  fetchNotesCatagory,
  fetchNotesCatalogDetails,
} from "../services/operations/notesAPI"
import FooterPage from "./FooterPage"

function NotesCatalog() {
  const token = localStorage.getItem("token")
  const { notesName } = useParams()
  const navigate = useNavigate()

  const [catalogPageData, setCatalogPageData] = useState(null)
  const [selectedNoteDetails, setSelectedNoteDetails] = useState(null)
  const [categoryId, setCategoryId] = useState("")
  const [pdfPreview, setPdfPreview] = useState(null)
  const [notes, setNotes] = useState([])
  const [instructorDetailModal, setInstructorDetailModal] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [loading, setLoading] = useState(false)

  // Fetch All Categories
  // console.log(notesName,"akjbnfjasdbfjb")
  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      try {
        const res = await fetchNotesCatagory()
        if (!res) return <UnderDevelopmentPage />
        // console.log(res)

        const category_id = res.find(
          (ct) =>
            ct.name.split(" ").join("-").toLowerCase() ===
            notesName.toLowerCase()
        )

        setCategoryId(category_id)
        // console.log(category_id)
      } catch (error) {
        // console.error("Could not fetch Categories.", error);
      }
    }
    fetchCategories()
    setLoading(false)
  }, [notesName])

  // Fetch catalog data for the selected category
  useEffect(() => {
    if (categoryId) {
      setLoading(true)
      const fetchCatalogDetails = async () => {
        try {
          const res = await fetchNotesCatalogDetails({ categoryId }, token)
          setCatalogPageData(res)
          setNotes(res?.selectedCategory?.notes || [])
        } catch (error) {
          // console.error("Error fetching catalog details:", error);
        }
      }
      fetchCatalogDetails()
    }
    setLoading(false)
  }, [categoryId, token])

  // Fetch full details of a selected note
  const fetchNotesFullDetails = async (noteId) => {
    try {
      const res = await fetchFullDetailsNotes({ notesId: noteId }, token)
      setSelectedNoteDetails(res)
      setInstructorDetailModal(true)

      // console.log("Fetched note details:", selectedNoteDetails.instructor.firstName);
    } catch (error) {
      // console.error("Error fetching note details:", error);
    }
  }

  // Generate PDF Preview
  const handlePdfPreview = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl)
      const pdfData = await response.arrayBuffer()
      const pdf = await pdfjsLib.getDocument(pdfData).promise
      const page = await pdf.getPage(1)

      const scale = 1.5
      const viewport = page.getViewport({ scale })
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")

      canvas.width = viewport.width
      canvas.height = viewport.height

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise

      setPdfPreview(canvas.toDataURL())
    } catch (error) {
      // console.error("Error generating PDF preview:", error);
    }
  }

  useEffect(() => {
    notes.forEach((note) => {
      if (note.NotesPdf && note.NotesPdf.includes("pdf")) {
        handlePdfPreview(note.NotesPdf)
      }
    })
  }, [notes])

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!categoryId || catalogPageData?.success === false) {
    return <UnderDevelopmentPage />
  }
  const handleViewNotesDetail = (notesId) => {
    if (token) {
      fetchNotesFullDetails(notesId)
    } else {
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to View Notes Details.",
        btn1Text: "Login",
        btn1Handler: () => navigate("/login"),
        btn2Text: "Close",
        btn2Handler: () => setConfirmationModal(null),
      })
    }
  }
  const handlePDFOpener = () => {
    if (!token) {
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to Access Notes.",
        btn1Text: "login",
        btn1Handler: () => navigate("/login"),
        btn2Text: "Close",
        btn2Handler: () => setConfirmationModal(null),
      })
    }
  }

  return (
    <>
      <div className="box-content bg-richblack-800 px-4">
        <div className="max-w-maxContenttab mx-auto flex min-h-[260px] flex-col justify-center gap-4 lg:max-w-maxContent ">
          <p className="text-sm text-richblack-300">
            {`Home / notes / `}
            <span className="text-yellow-25">
              {catalogPageData?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl text-richblack-5">
            {catalogPageData?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.selectedCategory?.description}
          </p>
        </div>
      </div>

      <div className="mx-auto  w-full px-4 py-12">
        <div className="section_heading p-auto lg:pl-32 ">
          Notes to get you started
        </div>
        <div className="my-4 flex items-center justify-center overflow-auto">
          <table className="w-full rounded-xl border border-richblack-800 text-white lg:max-w-maxContent">
            <thead>
              <tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
                <th className="hidden text-left text-sm font-medium uppercase text-richblack-100 lg:block">
                  Notes
                </th>
                <th className="hidden text-center text-sm font-medium uppercase text-richblack-100 lg:block">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {notes.length === 0 ? (
                <tr>
                  <td className="py-10 text-center text-2xl font-medium text-richblack-100">
                    No Notes found
                  </td>
                </tr>
              ) : (
                notes.map((note) => (
                  <tr
                    key={note._id}
                    className="flex flex-wrap gap-x-10 border-b border-richblack-800 px-6 py-8"
                  >
                    <td className="flex flex-1 gap-x-4">
                      <img
                        src={pdfPreview}
                        alt={note.NotesName}
                        className="h-[148px] w-[220px] rounded-lg object-cover"
                      />
                      <div className="flex flex-col justify-between">
                        <p className="text-lg font-semibold text-richblack-5">
                          {note.NotesName}
                        </p>
                        <p className="text-xs text-richblack-300">
                          Description: {note.NotesDescription?.substr(0, 30)}
                        </p>
                        <p className="text-[12px] text-white">
                          Created: {formatDate(note.createdAt)}
                        </p>
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                          Published
                        </p>
                      </div>
                    </td>
                    <td className="mt-4 flex w-full gap-x-4 lg:mt-0 lg:w-auto">
                      <div className="flex items-center justify-center gap-4">
                        <button className="rounded-xl border-2 border-white px-6 py-3 text-white">
                          {token ? (
                            <PDFopener pdfUrl={note.NotesPdf} />
                          ) : (
                            <button onClick={handlePDFOpener}>Open pdf</button>
                          )}
                        </button>
                        <button
                          className="rounded-xl border-2 border-white px-6 py-3 text-white"
                          onClick={() => handleViewNotesDetail(note._id)}
                        >
                          View Notes Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {instructorDetailModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="border-gray-600 w-full max-w-md rounded-lg border bg-richblack-800 p-6 shadow-lg">
              <button
                onClick={() => setInstructorDetailModal(null)}
                className="text-gray-400 hover:text-gray-200 absolute right-4 top-4"
              >
                &times;
              </button>

              <div className="space-y-4">
                <p className="text-xl font-semibold capitalize text-richblack-5">
                  {selectedNoteDetails.NotesName}
                </p>

                <p className="text-sm text-richblack-300">
                  Description: {selectedNoteDetails.NotesDescription}
                </p>

                <p className="inline-block rounded-md bg-richblack-700 px-2 py-1 text-sm font-medium text-yellow-100">
                  Category: {selectedNoteDetails?.category?.name || "N/A"}
                </p>

                <p className="text-gray-300 text-xs text-white">
                  Created: {formatDate(selectedNoteDetails.createdAt)}
                </p>

                <p className="inline-block rounded-md bg-richblack-700 px-2 py-1 text-xs text-yellow-100">
                  Published
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={`https://api.dicebear.com/5.x/initials/svg?seed=${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
                    alt={`${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
                    className="h-12 w-12 rounded-full border object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {`${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
                    </p>
                    <p className="text-xs text-white">Instructor</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setInstructorDetailModal(null)}
                  className=" hover:bg-red-500 rounded-md px-4 py-2 font-medium text-white transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <FooterPage />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default NotesCatalog
