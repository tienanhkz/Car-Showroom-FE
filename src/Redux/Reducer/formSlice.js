import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    showForm: (state) => {
      state.value = true;
    },
    closeForm: (state) => {
      state.value = false;
    },
  },
});

export const { showForm, closeForm } = formSlice.actions;

export default formSlice.reducer;
