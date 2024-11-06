const NotesCategory = require("../models/NotesCategory");

exports.createNotesCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const notesCategory = await NotesCategory.create({ name, description });
    return res.status(200).json({
      success: true,
      message: "Notes category created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in creating notes category",
    });
  }
};
exports.getAllNotesCategory = async (req, res) => {
  try {
    const notesCategory = await NotesCategory.find();
    return res.status(200).json({
      success: true,
      message: "Notes category fetched successfully",
      data: notesCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in fetching notes category",
    });
  }
};
exports.getNotesCategoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const selectedCategory = await NotesCategory.findById(categoryId);

    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Notes category not found",
      });
    }
    const totalNotes = selectedCategory?.notes?.length;
    if (totalNotes === 0) {
      return res.status(404).json({
        success: false,
        message: "No notes found in this category",
      });
    }
    const result = {
      selectedCategory,
      //   totalNotes,
    };
    return res.status(200).json({
      success: true,
      message: "Notes category page details fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in fetching notes category page details",
    });
  }
};
exports.notesCategoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const selectedCategory = await NotesCategory.findById(categoryId)
      .populate("notes")
      .exec();
    if (!selectedCategory) {
      console.log("Category not found.");
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    if (selectedCategory.notes.length === 0) {
      console.log("No courses found for the selected category.");
      return res.status(404).json({
        success: false,
        message: "No notes found for the selected category.",
      });
    }
    res.status(200).json({
      success: true,
      message: "category notes fetched successfull",
      data: {
        selectedCategory,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in fetching notes category page details",
    });
  }
};
