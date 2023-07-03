import { createSlice } from '@reduxjs/toolkit'
import { register } from './Action'

const initialState = {
  value: 0,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },

  extraReducers: (builder)=>{
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer