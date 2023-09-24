import { createSlice } from "@reduxjs/toolkit";
import {
  createNewStudent,
  deleteStudent,
} from "./studentAction";

const initialState = {
  loading: false,
  errors: "",
  success: false,
};

const student = createSlice({
  name: "student",
  initialState,
  extraReducers: {
    [createNewStudent.pending]: (state) => {
      state.loading = true;
      state.errors = null;
    },
    [createNewStudent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [createNewStudent.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    [deleteStudent.pending]: (state) => {
      state.loading = true;
      state.errors = null;
    },
    [deleteStudent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [deleteStudent.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export default student.reducer;