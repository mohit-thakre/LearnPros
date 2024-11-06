const Category = require("../models/NotesCategory");
const Notes = require("../models/Notes");
const User = require("../models/User");
const {
  uploadImageToCloudinary,
  uploadPdfToCloudinary,
} = require("../utils/imageUploader");
exports.createNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    let { category, NotesName, NotesDescription } = req.body;
    const pdfFile = req.files?.NotesPdf;

    if (!NotesName || !NotesDescription || !category || !pdfFile) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    const instructorDetails = await User.findById(userId);
    if (!instructorDetails || instructorDetails.accountType !== "Instructor") {
      return res.status(404).json({
        success: false,
        message: "Instructor Details Not Found",
      });
    }

    const categoryDetails = await Category.findById(category);
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Details Not Found",
      });
    }

    const uploadedPdf = await uploadPdfToCloudinary(
      pdfFile,
      process.env.FOLDER_NAME
    );

    const newNotes = await Notes.create({
      category: categoryDetails._id,
      NotesName,
      NotesDescription,
      NotesPdf: uploadedPdf.secure_url,
      instructor: instructorDetails._id,
    });

    await User.findByIdAndUpdate(
      instructorDetails._id,
      { $push: { notes: newNotes._id } },
      { new: true }
    );

    await Category.findByIdAndUpdate(
      category,
      { $push: { notes: newNotes._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: newNotes,
      message: "Notes Created Successfully",
    });
  } catch (error) {
    console.error(error, "at notes");
    res.status(500).json({
      success: false,
      message: "An error occurred while creating notes",
    });
  }
};
exports.editNotes = async (req, res) => {
  try {
    const { notesId, NotesDescription, category, NotesName, NotesPdf } =
      req.body;
    const notes = await Notes.findById(notesId);
    if (!notes) {
      return res.status(404).json({
        success: false,
        message: "Notes not found",
      });
    }
    if (req.files) {
      const pdfFile = req.files?.NotesPdf;
      const uploadedPdf = await uploadImageToCloudinary(
        pdfFile,
        process.env.FOLDER_NAME
      );
      notes.NotesPdf = uploadedPdf.secure_url;
    }
    if (NotesDescription) {
      notes.NotesDescription = NotesDescription;
    }

    if (category) {
      notes.category = category;
    }
    if (NotesName) {
      notes.NotesName = NotesName;
    }
    await notes.save();
    res.status(200).json({
      success: true,
      data: notes,
      message: "Notes updated successfully",
    });
  } catch (error) {
    console.error(error, "at edit notes");
    res.status(500).json({
      success: false,
      message: "An error occurred while editing notes",
    });
  }
};
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find({})
      .populate("category")
      .populate("instructor");
    res.status(200).json({
      success: true,
      data: notes,
      message: "Notes fetched successfully",
    });
  } catch (error) {
    console.error(error, "at get all notes");
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching notes",
    });
  }
};
exports.deleteNotes = async (req, res) => {
  try {
    const { notesId } = req.body;

    if (!notesId) {
      return res.status(400).json({
        success: false,
        message: "notesId is required",
      });
    }

    // Find the note by ID
    const notes = await Notes.findById(notesId);
    console.log("Notes found:", notes);

    if (!notes) {
      return res.status(404).json({
        success: false,
        message: "Notes not found",
      });
    }

    // Delete the note
    await Notes.findByIdAndDelete(notesId);
    res.status(200).json({
      success: true,
      message: "Notes deleted successfully",
    });
  } catch (error) {
    console.error(error, "at delete notes");
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting notes",
    });
  }
};
exports.getInstructorNotes = async (req, res) => {
  try {
    const { id } = req.user;
    const instructorNotes = await Notes.find({ instructor: id })
      .sort({
        createdAt: -1,
      })
      .populate("category");

    res.status(200).json({
      success: true,
      data: instructorNotes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error at getInstructorNotes ",
    });
  }
};
exports.getSingleCourseDetails = async (req, res) => {
  try {
    const { notesID } = req.body;
    const notes = await Notes.findById(notesID)
      .populate("instructor")
      .populate("category");
    if (!notes) {
      return res.status(400).json({
        success: false,
        message: `Could not find notes with id: ${notesID}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error at single notes fetching",
    });
  }
};
exports.getFullNotesDetails = async (req, res) => {
  try {
    const { notesId } = req.body;
    const userId = req.user.id;
    const notesDetails = await Notes.findOne({
      _id: notesId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .exec();

    if (!notesDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find notes with id: ${notesId}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: notesDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
