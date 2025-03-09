import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", userData);
  return response.data;
});

export const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
  const response = await axios.post("http://localhost:5000/api/auth/register", userData);
  return response.data;
});

const initialState = {
  user: null,  // Ensure initial state is not undefined
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
