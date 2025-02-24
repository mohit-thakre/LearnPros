const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  // COURSE_PAYMENT_API: BASE_URL + "/payment/create-order",
  // COURSE_VERIFY_API: BASE_URL + "/payment/verify-payment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",

  RESUME_PAYMENT_API: BASE_URL + "/payment/create-order",
  RESUME_VERIFY_API: BASE_URL + "/payment/verify-payment",
}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
}
export const notesEndpoints = {
  CREATE_NOTES_API: BASE_URL + "/notes/createNotes",
  EDIT_NOTES_API: BASE_URL + "/notes/editNotes",
  GET_NOTES_API: BASE_URL + "/notes/getAllNotes",
  DELETE_NOTES_API: BASE_URL + "/notes/deleteNotes",
  NOTES_CATEGORIES_API: BASE_URL + "/notes/getAllNotesCategory",
  NOTES_CATALOGPAGEDATA_API: BASE_URL + "/notes/notesCategoryPageDetails",
  GET_INSTRUCTOR_NOTES_API: BASE_URL + "/notes/getInstructorNotes",
  GET_SINGLE_NOTES_API: BASE_URL + "/notes/getSingleCourseDetails",
  GET_FULL_NOTES_DETAILS: BASE_URL + "/notes/getFullNotesDetails",
  FETCH_RESUME_API: BASE_URL + "/notes/getResume",
  FETCH_PURCHASED_RESUME_API: BASE_URL + "/profile/getPurchasedResume",
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  NOTES_CATEGORIES_API: BASE_URL + "/notes/getAllNotesCategory",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
  NOTES_CATALOGPAGEDATA_API: BASE_URL + "/notes/notesCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
// RESUME API
export const resumeEndpoints = {
  FETCH_RESUME_API: BASE_URL + "/notes/getResume",
}
