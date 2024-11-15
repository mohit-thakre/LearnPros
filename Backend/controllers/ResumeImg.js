const ResumeImg = require("../models/ResumeImg");
const { uploadPdfToCloudinary1 } = require("../utils/imageUploader");

exports.createImage = async (req, res) => {
  try {
    const img = req.files.image;
    if (!img) {
      return res.status(400).json({
        success: false,
        message: "image required",
      });
    }
    const res = await ResumeImg.create({
      image: img,
    });
    return res.status(200).json({
      success: true,
      message: "image added successfull",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "unable to add image",
    });
  }
};

exports.resume = async (req, res) => {
  try {
    const { imageId } = req.body;
    const PDF = req.files.pdf;
    const pdf = await uploadPdfToCloudinary1(PDF, process.env.FOLDER_NAME1);

    const newResume = await resume.create({
      pdf: pdf.secure_url,
    });
    res.status(200).json({
      success: true,
      data: newResume,
      message: "Resume Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
