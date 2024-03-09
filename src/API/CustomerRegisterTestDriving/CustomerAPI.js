import { api } from "./api";

// get list customer API
export let getListCustomerTestDrivingAPI = (params) => {
  return api("GET", "customerTestDriving", null, params);
};

// delete
export const deleteCustomerTestDrivingAPI = (Id_delete) => {
  let url = "customerTestDriving/" + Id_delete;
  return api("DELETE", url);
};

// create new customer API
export let addNewCustomerTestDrivingAPI = (customer_New) => {
  return api("POST", "customerTestDriving/create", customer_New);
};

// update customer API
export const updateCustomerTestDrivingAPI = (customer) => {
  let url = "customerTestDriving/update/" + customer.id;
  return api("PUT", url, customer);
};
