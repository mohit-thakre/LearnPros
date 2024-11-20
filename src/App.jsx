import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Components
// import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import AddCourse from "./components/core/Dashboard/AddCourse"
import Cart from "./components/core/Dashboard/Cart"
import EditCourse from "./components/core/Dashboard/EditCourse"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import Instructor from "./components/core/Dashboard/Instructor"
import MyCourses from "./components/core/Dashboard/MyCourses"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import ViewCourse from "./pages/ViewCourse"
import { getUserDetails } from "./services/operations/profileAPI"
import { ACCOUNT_TYPE } from "./utils/constants"
import AboutPage from "./pages/AboutPage"
import NavigationBar from "./components/Common/NavigationBar"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import VerifyOtp from "./pages/VerifyOtp"
import ForgetPassword from "./pages/ForgetPassword"
import Resetpassword from "./pages/Resetpassword"
import UnderDevelopmentPage from "./components/Common/UnderDevelopmentPage"
import NotesBuilder from "./components/core/Dashboard/AddNotes/NotesBuilder"
import NotesCatalog from "./pages/NotesCatalog"
import EditNotes from "./components/core/Dashboard/AddNotes/EditNotes"
import ScrollToTop from "./components/core/ScrollToTop"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import NotesCategoryPage from "./pages/NotesCategoryPage"
import CoursesCategorypage from "./pages/CoursesCategorypage"
import ResumePage from "./pages/ResumePage"
import PurchasedResume from "./pages/PurchasedResume"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token")
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
    

        <NavigationBar />
  
     
        <ScrollToTop/>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/terms" element={<Terms />} />
         <Route path="/notescategory/notes" element={<NotesCategoryPage/>}/>
          <Route path="/coursescategory/courses" element={<CoursesCategorypage/>}/>
        <Route path="/privacy&policy" element={<Privacy />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="notes/:notesName" element={<NotesCatalog/>} />
        <Route path="/underdevelopment" element={<UnderDevelopmentPage />} />
        <Route path="/catalog/view-course" element={<CoursesCategorypage />} />
        <Route path="/category/:courseName" element={<UnderDevelopmentPage />} />
        <Route path="/roadmaps/view" element={<UnderDevelopmentPage/>}/>
        <Route path="/resume/template" element={<ResumePage/>}/>

        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword/>
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <Resetpassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <SignupPage />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyOtp />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/my-notes" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/add-notes" element={<NotesBuilder/>} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
              <Route path="dashboard/edit-notes/:notesId" element={<EditNotes/>}/>
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/My-courses" element={<PurchasedResume/>} />
              {/* // <Route path="dashboard/settings" element={<Settings />} /> */}
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
          
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
