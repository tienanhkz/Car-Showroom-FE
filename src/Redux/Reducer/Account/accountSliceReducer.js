import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ADD_NEW_ACCOUNT,
  DELETE_ACCOUNT,
  FETCH_ACCOUNTS_LIST,
  UPDATE_ACCOUNT,
} from "../../ActionType/actionType";
import {
  addAccountsAPI,
  deleteAccountsAPI,
  getListAccountsAPI,
  updateAccountAPI,
} from "../../../API/Account/AccountsAPI";

const initialState = {
  listAccounts: [],
  totalPages: 0,
};

// action : get all customer from api
export let actionGetListAccountsAPI = createAsyncThunk(
  FETCH_ACCOUNTS_LIST,
  async (params) => {
    let listAccountAPI = await getListAccountsAPI(params); //action api
    return listAccountAPI;
  }
);

// action : add new account api
export let actionAddAccountAPI = createAsyncThunk(
  ADD_NEW_ACCOUNT,
  async (accountNew) => {
    let customerNew_API = await addAccountsAPI(accountNew); //action api
    return customerNew_API; //payload
  }
);

// action : delete a account api
export let actionDeleteAccountAPI = createAsyncThunk(
  DELETE_ACCOUNT,
  async (id_delete) => {
    let account_deleted = await deleteAccountsAPI(id_delete); //action api
    return account_deleted; //payload
  }
);

// action : update account
export let actionUpdateAccountAPI = createAsyncThunk(
  UPDATE_ACCOUNT,
  async (accountUpdate, { getState }) => {
    const state = getState();

    const listAccount = state.accountSliceReducer.listAccounts;
    let accountUpdate_API = await updateAccountAPI(accountUpdate); //action api
    const _listAccount = listAccount.map((account) => {
      if (account.id == accountUpdate_API.id) {
        account = accountUpdate_API;
      }
      return account;
    });

    return _listAccount; //payload
  }
);

export const accountSliceReducer = createSlice({
  name: "accountReducer",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: (builder) => {
    // handle reducers  relate to middleware
    // handle when call API succesfully
    builder.addCase(actionGetListAccountsAPI.fulfilled, (state, action) => {
      state.listAccounts = action.payload.content;
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(actionAddAccountAPI.fulfilled, (state, action) => {
      state.listAccounts.push(action.payload);
    });
    builder.addCase(actionDeleteAccountAPI.fulfilled, (state, action) => {
      state.listAccounts.splice(
        state.listAccounts.findIndex(
          (account) => account.id == action.payload.id
        ),
        1
      );
    });
    builder.addCase(actionUpdateAccountAPI.fulfilled, (state, action) => {
      state.listAccounts = action.payload;
    });
  },
});

export let { actions } = accountSliceReducer;
export default accountSliceReducer.reducer;
