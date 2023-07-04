import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API_URL } from "../../config/api";

const initialState = {
    data: null,
    isLoading: false,
    error: false
}

export const login = createAsyncThunk("login", async (data) => {
    try {
        const res=await axios.post(`${BASE_API_URL}auth/signin`,data);
        const {jwt}=await res.data;
        localStorage.setItem("token",jwt);
    } catch (error) {
        console.log("error "+error)
    }
})

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})

export default loginSlice.reducer