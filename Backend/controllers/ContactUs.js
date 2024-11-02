const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");
const ContactUs = require("../models/ContactUs");

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } =
    req.body;
  console.log(req.body);
  try {
    const user = await ContactUs.create({
      email,
      firstname,
      lastname,
      message,
      phoneNo,
      countrycode,
    });
    if (!user) {
      return res.json({
        success: false,
        message: "message sent failed",
      });
    }

    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    );

    console.log("Email Res ", emailRes);
    return res.json({
      success: true,
      message: "Message send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
