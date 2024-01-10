import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
const initialState ={
    authState: false,
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
    setAuthUsers: (state, action) => {
      return {
        ...state,
        users: action.payload
      }
    },
  },

});

export const { setAuthState,setAuthUsers } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;