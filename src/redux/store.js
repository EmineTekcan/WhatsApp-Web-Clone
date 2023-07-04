import CurrentUserSlice from "./Auth/CurrentUserSlice";
import LoginSlice from "./Auth/LoginSlice";
import RegisterSlice from "./Auth/RegisterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        register:RegisterSlice,
        login:LoginSlice,
        currentUser:CurrentUserSlice
    }
})

export default store