import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API_URL } from "../../config/api";


const initialState = {
    data: null,
    isLoading: false,
    error: false
}


export const currentUser = createAsyncThunk("getcurrentUser", async (token) => {

    try {
        const res= await axios.get("http://localhost:8080/api/users/profile",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        })

        const resData=await res.data;

    } catch (error) {
        console.log("error "+error)
    }
})

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(currentUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(currentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(currentUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export default currentUserSlice.reducer