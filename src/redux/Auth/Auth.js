import { createSlice } from '@reduxjs/toolkit'
import {loginAdmin, registerAdmin} from './authAction'
const adminToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null
const initialState = {
  loading: false,
  adminInfo: {}, // for user object
  adminToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const adminAuth = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token') // deletes token from storage
      state.loading = false
      state.adminInfo = null
      state.adminToken = null
      state.error = null
    },
  },
  extraReducers: {
    [registerAdmin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerAdmin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.adminToken = payload.token
      state.adminInfo = payload.admin
    },
    [registerAdmin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [loginAdmin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginAdmin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.adminToken = payload.token
      state.adminInfo = payload.admin
    },
    [loginAdmin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export const { logout } = adminAuth.actions
export default adminAuth.reducer