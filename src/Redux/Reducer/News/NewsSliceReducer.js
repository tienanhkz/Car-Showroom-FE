import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_NEW_NEWS,
  DELETE_NEWS,
  FETCH_NEWS_LIST,
  UPDATE_NEWS,
} from "../../ActionType/actionType";
import {
  addNewsAPI,
  deleteNewsAPI,
  getListNewsAPI,
  updateNewsAPI,
} from "./../../../API/News/NewsAPI";

const initialState = {
  listNews: [],
  totalPages: 0,
};

// action
export let actionFetchListNewsAPI_MDW = createAsyncThunk(
  FETCH_NEWS_LIST,
  async (params) => {
    let listNewsAPI = await getListNewsAPI(params);
    return listNewsAPI;
  }
);

// action : add new news api
export let actionAddNewsAPI = createAsyncThunk(
  ADD_NEW_NEWS,
  async (news_New) => {
    let newsNew_API = await addNewsAPI(news_New); //action api
    return newsNew_API; //payload
  }
);
// action : delete a news api
export let actionDeleteNewsAPI = createAsyncThunk(
  DELETE_NEWS,
  async (id_delete) => {
    let news_deleted = await deleteNewsAPI(id_delete); //action api
    alert("Deleted successfully !");
    return news_deleted; //payload
  }
);
// action : update news
export let actionUpdateNewsAPI = createAsyncThunk(
  UPDATE_NEWS,
  async (newsUpdate, { getState }) => {
    // get state
    const state = getState();
    const listNews = state.NewsSliceReducer.listNews;
    // console.log("listCar : ", listCar);
    // console.log("carUpdate : ", carUpdate);
    // update car API
    let newsUpdate_API = await updateNewsAPI(newsUpdate); //action api

    const _lst = listNews.map((news) => {
      if (news.id == newsUpdate_API.id) {
        return newsUpdate_API;
      }
      return news;
    });

    alert("Chỉnh sửa successfully !");

    return _lst; //payload
  }
);

export const NewsSliceReducer = createSlice({
  name: "NewsSliceReducer",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  //,
  extraReducers: (builder) => {
    builder.addCase(actionFetchListNewsAPI_MDW.fulfilled, (state, action) => {
      state.listNews = action.payload.content;
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(actionUpdateNewsAPI.fulfilled, (state, action) => {
      state.listNews = action.payload;
      //   console.log("action.payload update :", action.payload);
    });
    builder.addCase(actionAddNewsAPI.fulfilled, (state, action) => {
      state.listNews.push(action.payload);
    });
    builder.addCase(actionDeleteNewsAPI.fulfilled, (state, action) => {
      state.listNews.splice(
        state.listNews.findIndex((news) => news.id == action.payload.id),
        1
      );
    });
  },
});

export default NewsSliceReducer.reducer;
