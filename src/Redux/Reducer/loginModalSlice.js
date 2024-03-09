import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginModalSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    showLoginForm: (state) => {
      state.value = true;
    },
    closeLoginForm: (state) => {
      state.value = false;
    },
  },
});

export const { showLoginForm, closeLoginForm } = loginModalSlice.actions;
export default loginModalSlice.reducer;
