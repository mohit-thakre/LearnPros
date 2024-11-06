const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  console.log("OPTIONS", options);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
exports.uploadPdfToCloudinary = async (file, folder) => {
  try {
    const options = {
      folder,
      resource_type: "auto",
      format: "pdf",
      secure: true,
    };

    console.log("PDF Upload Options:", options);
    const response = await cloudinary.uploader.upload(
      file.tempFilePath,
      options
    );

    // Return the secure URL and other response data
    return {
      secure_url: response.secure_url,
      public_id: response.public_id,
      asset_id: response.asset_id,
    };
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
};
