import { api } from "./api";

// get list account API
export let getListAccountsAPI = (params) => {
  return api("GET", "accounts/all", null, params);
};

// delete
export const deleteAccountsAPI = (Id_delete) => {
  let url = "accounts/delete/" + Id_delete;
  return api("DELETE", url);
};

// create new account API
export let addAccountsAPI = (accounts_New) => {
  return api("POST", "accounts/create", accounts_New);
};

// update account API
export const updateAccountAPI = (accounts) => {
  let url = "accounts/update/" + accounts.id;
  return api("PUT", url, accounts);
};
