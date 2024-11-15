import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  course: null,
  editCourse: false,
  editNotes: false,
  paymentLoading: false,
}

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setCourse: (state, action) => {
      state.course = action.payload
    },
    setEditCourse: (state, action) => {
      state.editCourse = action.payload
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload
    },
    resetCourseState: (state) => {
      state.step = 1
      state.course = null
      state.editCourse = false
    },
    updateCourseStatus: (state, action) => {
      if (state.course) {
        state.course.status = action.payload
      }
    },
    setEditNotes: (state, action) => {
      state.editNotes = action.payload
    },
  },
})

export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
  updateCourseStatus, // Exporting the new action
} = courseSlice.actions

export default courseSlice.reducer