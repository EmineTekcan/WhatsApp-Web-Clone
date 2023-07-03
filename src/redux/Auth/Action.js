import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from '../../config/api';

export const register = createAsyncThunk("REGISTER", async (requestData) => {
    try {
        const response = await axios.post(`${BASE_API_URL}auth/signup`, JSON.stringify(requestData), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const user = await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const login = createAsyncThunk("LOGIN", async (requestData) => {
    try {
        const response = await axios.post(`${BASE_API_URL}auth/signin`, JSON.stringify(requestData), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const user = await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


export const currentUser = createAsyncThunk("REQ_USER", async (token) => {
    try {
        const response = await axios.get(`${BASE_API_URL}users/profile`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        const user = await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const searchUser = createAsyncThunk("SEARCH_USER", async (data) => {
    try {
        const response = await axios.get(`${BASE_API_URL}users/search?name=${data.keyword}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`
            },
        });

        const user = await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})