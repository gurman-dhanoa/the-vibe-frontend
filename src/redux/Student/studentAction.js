import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createNewStudent = createAsyncThunk(
    'createStudent',
    async (studentData, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        await axios.post(
          `/api/v1/admin/new/student`,
          studentData,
          config
        )
      } catch (error) {
      // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

export const deleteStudent = createAsyncThunk(
    'deleteStudent',
    async (studentId, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        await axios.put(
          `/api/v1/admin/delete/student/${studentId}`,
          config
        )
      } catch (error) {
      // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const fetchStudents = createAsyncThunk('fetchStudents',()=>{
    return axios
        .get('/api/v1/getStudents',{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.data)
})