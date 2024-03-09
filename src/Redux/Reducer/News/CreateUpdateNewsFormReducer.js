import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  newsUpdate: {},
};

export const CreateUpdateNewsFormReducer = createSlice({
  name: "CreateUpdateNewsFormReducer",
  initialState,
  reducers: {
    showUpdateNewsForm: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.newsUpdate = action.payload;
    },
    closeUpdateNewsForm: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showUpdateNewsForm, closeUpdateNewsForm } =
  CreateUpdateNewsFormReducer.actions;

export default CreateUpdateNewsFormReducer.reducer;
