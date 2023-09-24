import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerAdmin = createAsyncThunk(
  'adminRegister',
  async (adminData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `/api/v1/admin/new`,
        adminData,
        config
      )
      localStorage.setItem('token', data.token)
      return data;
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

export const loginAdmin = createAsyncThunk(
  'adminLogin',
  async (adminData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `/api/v1/admin/login`,
        adminData,
        config
      )
      localStorage.setItem('token', data.token)
      return data;
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