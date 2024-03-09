import { api } from "./api";

// get list customer API
export let getListCustomerAlertPriceAPI = (params) => {
  return api("GET", "customerReceiveAlertPrice", null, params);
};

// delete
export const deleteCustomerAlertPriceAPI = (Id_delete) => {
  let url = "customerReceiveAlertPrice/" + Id_delete;
  return api("DELETE", url);
};

// create new customer API
export let addNewCustomerAlertPriceAPI = (customer_New) => {
  return api("POST", "customerReceiveAlertPrice", customer_New);
};

// update customer API
export const updateCustomerAlertPriceAPI = (customer) => {
  let url = "customerReceiveAlertPrice/" + customer.id;
  return api("PUT", url, customer);
};
