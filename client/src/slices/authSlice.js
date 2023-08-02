/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialState = {
    userInfo: initialUserInfo
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state,action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
});

export default authSlice.reducer;
export const {setCredentials, logout} = authSlice.actions;

