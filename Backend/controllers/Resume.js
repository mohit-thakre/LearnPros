const resume = require("../models/Resume")
const {
  uploadPdfToCloudinary,
  uploadPdfToCloudinary1,
  uploadImageToCloudinary,
} = require("../utils/imageUploader")

exports.resume = async (req, res) => {
  try {
    const PDF = req.files.pdf
    const { image, price } = req.body

    if (!PDF || !image || !price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    const pdf = await uploadPdfToCloudinary1(PDF, process.env.FOLDER_NAME1) //docx

    const newResume = await resume.create({
      pdf: pdf.secure_url,
      image: image,
      price,
    })

    return res.status(200).json({
      success: true,
      data: newResume,
      message: "Resume Uploaded Successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while uploading the resume",
    })
  }
}

exports.editResume = async (req, res) => {
  try {
    const { id } = req.body
    const IMG = req.files.image

    if (!id || !IMG) {
      return res.status(400).json({
        success: false,
        message: "ID or image file is missing",
      })
    }

    const img = await uploadImageToCloudinary(IMG, process.env.FOLDER_NAME1)

    const updatedResume = await resume.findByIdAndUpdate(
      id,
      { image: img.secure_url },
      { new: true }
    )

    if (!updatedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      })
    }

    res.status(200).json({
      success: true,
      data: updatedResume,
      message: "Resume Uploaded Successfully",
    })
  } catch (error) {
    console.error("Error updating resume:", error)
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Some Error in editing the resume",
    })
  }
}

exports.getResume = async (req, res) => {
  try {
    const resume1 = await resume.find({})
    if (!resume1) {
      return res.json({
        success: false,
        message: "resume not found",
      })
    }
    return res.status(200).json({
      success: true,
      message: "resume found",
      data: resume1,
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Fetching the resume`,
    })
  }
}
