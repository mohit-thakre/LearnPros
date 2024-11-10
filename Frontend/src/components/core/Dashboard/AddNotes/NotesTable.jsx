import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../services/formatDate";
import ConfirmationModal from "../../../Common/ConfirmationModal";
import { deleteNotes, fetchInstructorNotes } from "../../../../services/operations/notesAPI";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import * as pdfjsLib from "pdfjs-dist/webpack";


export default function NotesTable({ notes, setNotes }) {
  
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const TRUNCATE_LENGTH = 30;
  const [pdfPreview, setPdfPreview] = useState(null);


  const handleNotesDelete = async (notesId) => {
    setLoading(true);
    await deleteNotes({ notesId }, token);
    const result = await fetchInstructorNotes(token);
    if (result) {
      setNotes(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };
  
  const handlePdfPreview = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const pdfData = await response.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(pdfData).promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      setPdfPreview(canvas.toDataURL());
    } catch (error) {
      console.error("Error generating PDF preview:", error);
    }
  };

  useEffect(() => {
    if (notes?.length > 0) {
      notes.forEach(note => {
        if (note.NotesPdf && note.NotesPdf.includes('pdf')) {
          handlePdfPreview(note.NotesPdf);
        }
      });
    }
  }, [notes]);

  return (
    <>
      <Table className="rounded-xl border text-white border-richblack-800">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Notes
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {notes?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                No Notes found
              </Td>
            </Tr>
          ) : (
            notes.map((note) => (
            
              <Tr
                key={note._id}
                className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
              >
                <Td className="flex flex-1 gap-x-4">
                 
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
                      category: {note.category.name}
                    </p>
                    <p className="text-xs text-richblack-300">
                      Description: {note.NotesDescription.substr(0, TRUNCATE_LENGTH)}
                    </p>
                    <p className="text-[12px] text-white">
                      Created: {formatDate(note.createdAt)}
                    </p>
                    <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                        <FaCheck size={8} />
                      </div>
                      Published
                    </p>
                  </div>
                </Td>
                <Td className="text-sm font-medium text-richblack-100">
                  <button
                    disabled={loading}
                    onClick={() => navigate(`/dashboard/edit-notes/${note._id}`)}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() =>
                      setConfirmationModal({
                        text1: "Do you want to delete this note?",
                        text2: "All data related to this note will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleNotesDelete(note._id)
                          : () => {},
                        btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                      })
                    }
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </Td>
               
              </Tr>
            ))
          )}
        </Tbody>
        
      </Table>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
