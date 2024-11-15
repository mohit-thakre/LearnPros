import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UnderDevelopmentPage from "../components/Common/UnderDevelopmentPage";
import { fetchFullDetailsNotes, fetchNotesCatagory, fetchNotesCatalogDetails } from "../services/operations/notesAPI";
import FooterPage from "./FooterPage";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import * as pdfjsLib from "pdfjs-dist/webpack";
import { formatDate } from "../services/formatDate";
import PDFopener from "../components/Common/PDFopener";
import ConfirmationModal from "../components/Common/ConfirmationModal";

function NotesCatalog() {
  const token = localStorage.getItem("token");
  const { notesName } = useParams();
  const navigate = useNavigate()

  const [catalogPageData, setCatalogPageData] = useState(null);
  const [selectedNoteDetails, setSelectedNoteDetails] = useState(null); 
  const [categoryId, setCategoryId] = useState("");
  const [pdfPreview, setPdfPreview] = useState(null);
  const [notes, setNotes] = useState([]);
  const [instructorDetailModal,setInstructorDetailModal] = useState(null)
  const [confirmationModal,setConfirmationModal] = useState(null)
  const [loading,setLoading] = useState(false)
  

  // Fetch All Categories
  // console.log(notesName,"akjbnfjasdbfjb")
  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      try {
        const res = await fetchNotesCatagory();
        if (!res) return <UnderDevelopmentPage />;
        // console.log(res)
        
        const category_id = res.find(
  (ct) => ct.name.split(" ").join("-").toLowerCase() === notesName.toLowerCase()
);


        setCategoryId(category_id);
        // console.log(category_id)
      } catch (error) {
        // console.error("Could not fetch Categories.", error);
      }
    };
    fetchCategories();
    setLoading(false)
  }, [notesName]);

  // Fetch catalog data for the selected category
  useEffect(() => {
    
    if (categoryId) {
      setLoading(true)
      const fetchCatalogDetails = async () => {
        try {
          const res = await fetchNotesCatalogDetails({ categoryId }, token);
          setCatalogPageData(res);
          setNotes(res?.selectedCategory?.notes || []);
          
             
        } catch (error) {
          // console.error("Error fetching catalog details:", error);
        }
      };
      fetchCatalogDetails();
    }
     setLoading(false)
  }, [categoryId, token]);

  // Fetch full details of a selected note
  const fetchNotesFullDetails = async (noteId) => {
    try {
      const res = await fetchFullDetailsNotes({ notesId: noteId }, token);
      setSelectedNoteDetails(res); 
      setInstructorDetailModal(true)
    
      // console.log("Fetched note details:", selectedNoteDetails.instructor.firstName);
    } catch (error) {
      // console.error("Error fetching note details:", error);
    }
  };

  // Generate PDF Preview
  const handlePdfPreview = async (pdfUrl) => {
    try {
      const response = await fetch(pdfUrl);
      const pdfData = await response.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(pdfData).promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      setPdfPreview(canvas.toDataURL());
    } catch (error) {
      // console.error("Error generating PDF preview:", error);
    }
  };

  useEffect(() => {
    notes.forEach((note) => {
      if (note.NotesPdf && note.NotesPdf.includes("pdf")) {
        handlePdfPreview(note.NotesPdf);
      }
    });
  }, [notes]);

  // Render loading state
  if (loading ) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  // Handle case where no notes are found
  if (!categoryId || catalogPageData?.success === false) {
    return <UnderDevelopmentPage />;
  }
  const handleViewNotesDetail = (notesId)=>{
    if(token){
      fetchNotesFullDetails(notesId)
    }
    else{
setConfirmationModal({
  text1:"You are not logged in!",
  text2:"Please login to View Notes Details.",
  btn1Text:"Login",
  btn1Handler:()=>navigate("/login"),
  btn2Text:"Close",
  btn2Handler:()=>setConfirmationModal(null),
})
    }

  }
  const handlePDFOpener = ()=>{
  
    setConfirmationModal({
  text1:"You are not logged in!",
  text2:"Please login to Access Notes.",
  btn1Text:"Login",
  btn1Handler:()=>navigate("/login"),
  btn2Text:"Close",
  btn2Handler:()=>setConfirmationModal(null),
})
    

  }

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
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

      {/* Notes Section */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading">Notes to get you started</div>
        <Table className="text-white rounded-xl border border-richblack-800">
          <Thead>
            <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
              <Th className=" hidden lg:flex-1 text-left  text-sm font-medium uppercase text-richblack-100">
                Notes
              </Th>
              <Th className="hidden lg:block text-center text-sm font-medium uppercase text-richblack-100">
                View
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {notes.length === 0 ? (
              <Tr>
                <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                  No Notes found
                </Td>
              </Tr>
            ) : (
              notes.map((note) => (
                <Tr key={note._id} className="flex gap-x-10 border-b border-richblack-800 px-6 py-8">
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
                        Description: {note.NotesDescription?.substr(0, 30)}
                      </p>
                      <p className="text-[12px] text-white">
                        Created: {formatDate(note.createdAt)}
                      </p>
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        Published
                      </p>
                    </div>
                  </Td>
                  <Td className="flex flex-1 gap-x-4">
                    <div className="flex justify-center items-center gap-4">
                      <button className="px-6 py-3 border-2 border-white text-white mt-4 rounded-xl"  >
                        {
                          token ? <button><PDFopener pdfUrl={note.NotesPdf} /></button> : <button onClick={handlePDFOpener}>Open pdf</button>
                        }

                      
                     </button>
                      <button
                        className="px-6 py-3 border-2 border-white text-white mt-4 rounded-xl"
                        onClick={() => handleViewNotesDetail(note._id)} 
                      >
                        View Notes Details
                      </button>
                    </div>
                  </Td>
                  <Td>
                    
                  </Td>
                </Tr>
                                   
                
              ))
          
            )}
          </Tbody>
        </Table>

      {
  instructorDetailModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg border border-gray-600 bg-richblack-800 p-6 shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={() => setInstructorDetailModal(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          &times;
        </button>
        
        {/* Modal Content */}
        <div className="space-y-4">
          <p className="text-xl font-semibold text-richblack-5 capitalize">{selectedNoteDetails.NotesName}</p>
          
          <p className="text-sm text-richblack-300">
            Description: {selectedNoteDetails.NotesDescription}
          </p>
          
          <p className="text-sm font-medium text-yellow-100 bg-richblack-700 rounded-md px-2 py-1 inline-block">
            Category: {selectedNoteDetails?.category?.name || "N/A"}
          </p>

          <p className="text-xs text-gray-300 text-white">
            Created: {formatDate(selectedNoteDetails.createdAt)}
          </p>

          <p className="text-xs text-yellow-100 bg-richblack-700 rounded-md px-2 py-1 inline-block">
            Published
          </p>

          {/* Instructor Info */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
              alt={`${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
              className="h-12 w-12 rounded-full object-cover border border-gray-500"
            />
            <div>
              <p className="text-lg font-semibold text-white">
                {`${selectedNoteDetails.instructor.firstName} ${selectedNoteDetails.instructor.lastName}`}
              </p>
              <p className="text-xs text-white">Instructor</p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setInstructorDetailModal(null)}
            className="px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
 
       
      </div>

      <FooterPage />
      {
        confirmationModal && <ConfirmationModal modalData={confirmationModal} />
      }
    </>
  );
}

export default NotesCatalog;
