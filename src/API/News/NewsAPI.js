import { api } from "./api";

// get list customer API
export let getListNewsAPI = (params) => {
  return api("GET", "news", null, params);
};

// delete
export const deleteNewsAPI = (Id_delete) => {
  let url = "news/" + Id_delete;
  return api("DELETE", url);
};

// create new customer API
export let addNewsAPI = (news_New) => {
  return api("POST", "news", news_New);
};

// update customer API
export const updateNewsAPI = (news) => {
  let url = "news/" + news.id;
  return api("PUT", url, news);
};
