import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
const initialState ={
    authState: false,
    isLoginTab:true,
    isRegTab: false,
    userInfo:[],
    users: []
}
// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState: (state, action) => {
      return {
        ...state,
        authState: action.payload
      }
    },
    setIsLoginTab: (state, action) => {
      return {
        
        isLoginTab: action.payload
      }
    },
    setIsRegTab: (state, action) => {
      return {
        
        isRegTab: action.payload
      }
    },
    setUserInfo: (state, action) => {
      return {
       
        userInfo: action.payload
      }
    },
    updateUserInfo: (state, action) => {
      return {
       userInfo:{...state.userInfo,[action.payload]: action.updateData}
      }
    },
    setAuthUsers: (state, action) => {
      return {
        ...state,
        users: action.payload
      }
    },
  },

});

export const { setAuthState,setAuthUsers,setIsLoginTab,setIsRegTab,setUserInfo,updateUserInfo } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;