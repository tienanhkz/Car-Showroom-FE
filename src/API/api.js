import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});

export const api = (method, endpoint, data, params) => {
  return axiosClient(endpoint, { method, data, params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
