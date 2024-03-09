import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  accountUpdate: {},
};

export const CreateUpdateAccountFormReducer = createSlice({
  name: "CreateUpdateAccountFormReducer",
  initialState,
  reducers: {
    showUpdateAccountForm: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.accountUpdate = action.payload;
    },
    closeUpdateAccountForm: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showUpdateAccountForm, closeUpdateAccountForm } =
  CreateUpdateAccountFormReducer.actions;

export default CreateUpdateAccountFormReducer.reducer;
