import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type UserToken=string |null;
const userSlice=createSlice({
    name:"userToken",
    initialState:null as UserToken,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
            return action.payload

        },
        getToken:(state)=>{

            return state;

        }
    }
});

export const { setToken, getToken } = userSlice.actions;

export default userSlice;