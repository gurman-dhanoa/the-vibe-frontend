import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from "./redux/Auth/Auth"
import studentsReducer from "./redux/Student/students"
import studentReducer from "./redux/Student/student"
export default configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    students : studentsReducer,
    student : studentReducer
  }
})