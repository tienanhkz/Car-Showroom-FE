import { api } from "./api";

export let getListCarAPI = (params) => {
  //return api("GET", "BmwCars", null);
  return api("GET", "cars", null, params);
};

// delete
export const deleteCarAPI = (Id_delete) => {
  let url = "cars/" + Id_delete;
  return api("DELETE", url);
};

// create new car API
export let addNewCarAPI = (car_New) => {
  return api("POST", "cars/create", car_New);
};

// update car API
export const updateCarAPI = (car) => {
  let url = "cars/" + car.id;
  return api("PUT", url, car);
};
