const express = require("express");
const router = express.Router();

const {
  createNotes,
  editNotes,
  getAllNotes,
  deleteNotes,
  getInstructorNotes,
  getSingleCourseDetails,
  getFullNotesDetails,
} = require("../controllers/Notes");
const { auth, isInstructor, isAdmin } = require("../middleware/auth");
const {
  createNotesCategory,
  getAllNotesCategory,
  getNotesCategoryPageDetails,
  notesCategoryPageDetails,
} = require("../controllers/NotesCategory");
router.post("/createNotes", auth, isInstructor, createNotes);
router.post("/getInstructorNotes", auth, isInstructor, getInstructorNotes);
router.put("/editNotes", auth, isInstructor, editNotes);
router.get("/getAllNotes", getAllNotes);
router.delete("/deleteNotes", auth, isInstructor, deleteNotes);
router.post("/createNotesCategory", auth, isAdmin, createNotesCategory);
router.get("/getAllNotesCategory", getAllNotesCategory);
router.post("/getNotesCategoryPageDetails", getNotesCategoryPageDetails);
router.post("/notesCategoryPageDetails", notesCategoryPageDetails);
router.post("/getSingleCourseDetails", getSingleCourseDetails);
router.post("/getFullNotesDetails", auth, getFullNotesDetails);

module.exports = router;
