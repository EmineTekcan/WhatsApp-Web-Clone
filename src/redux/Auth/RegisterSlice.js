import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_API_URL } from "../../config/api";

const initialState = {
    data: null,
    isLoading: false,
    error: false
}

export const register = createAsyncThunk(
    'register',
    async (data) => {
        try {
            const response = await axios.post(`${BASE_API_URL}auth/signup`, data);
            return response.data;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})

export default registerSlice.reducer;