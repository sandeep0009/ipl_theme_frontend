import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const store = configureStore({
  reducer: {
    userToken: userSlice.reducer, 
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
