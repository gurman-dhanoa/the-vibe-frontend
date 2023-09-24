import { createSlice } from "@reduxjs/toolkit";
import {
  fetchStudents,
  // createNewStudent,
  // deleteStudent,
} from "./studentAction";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

const student = createSlice({
  name: "students",
  initialState,
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchStudents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.students = payload.students;
    },
    [fetchStudents.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default student.reducer;
