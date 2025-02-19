import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, actions) => {
      state.user = actions.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;   