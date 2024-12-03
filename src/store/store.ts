import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const store =configureStore({
    reducer:{
        userToken:userSlice.reducer
    }
})

export default store;