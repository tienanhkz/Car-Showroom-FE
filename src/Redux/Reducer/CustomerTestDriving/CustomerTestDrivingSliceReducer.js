import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ADD_NEW_CUSTOMER_REGISTER_TEST_DRIVING,
  DELETE_CUSTOMER_REGISTER_TEST_DRIVING,
  FETCH_CUSTOMER_REGISTER_TEST_DRIVING,
  UPDATE_CUSTOMER_REGISTER_TEST_DRIVING,
} from "../../ActionType/actionType";
import {
  addNewCustomerTestDrivingAPI,
  deleteCustomerTestDrivingAPI,
  getListCustomerTestDrivingAPI,
  updateCustomerTestDrivingAPI,
} from "../../../API/CustomerRegisterTestDriving/CustomerAPI";

const initialState = {
  listCustomer: [],
  totalPages: 0,
};

// action : get all customer from api
export let actionGetListCustomerTestDrivingAPI = createAsyncThunk(
  FETCH_CUSTOMER_REGISTER_TEST_DRIVING,
  async (params) => {
    let listCustomerAPI = await getListCustomerTestDrivingAPI(params); //action api
    return listCustomerAPI;
  }
);

// action : add new customer api
export let actionAddCustomerTestDrivingAPI = createAsyncThunk(
  ADD_NEW_CUSTOMER_REGISTER_TEST_DRIVING,
  async (customerNew) => {
    let customerNew_API = await addNewCustomerTestDrivingAPI(customerNew); //action api
    return customerNew_API; //payload
  }
);

// action : delete a car api
export let actionDeleteCustomerTestDrivingAPI = createAsyncThunk(
  DELETE_CUSTOMER_REGISTER_TEST_DRIVING,
  async (id_delete) => {
    let customer_deleted = await deleteCustomerTestDrivingAPI(id_delete); //action api
    return customer_deleted; //payload
  }
);

// action : update Customer
export let actionUpdateCustomerAPI = createAsyncThunk(
  UPDATE_CUSTOMER_REGISTER_TEST_DRIVING,
  async (customerUpdate, { getState }) => {
    const state = getState();
    const listCustomer = state.customerTestDriving.listCustomer;
    let customerUpdate_API = await updateCustomerTestDrivingAPI(customerUpdate); //action api
    const _listCustomer = listCustomer.map((customer) => {
      if (customer.id == customerUpdate_API.id) {
        customer = customerUpdate_API;
      }
      return customer;
    });

    return _listCustomer; //payload
  }
);

export const customerTestDrivingSlice = createSlice({
  name: "customerReceiveAlertPrice",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: (builder) => {
    // handle reducers  relate to middleware
    // handle when call API succesfully
    builder.addCase(
      actionGetListCustomerTestDrivingAPI.fulfilled,
      (state, action) => {
        state.listCustomer = action.payload.content;
        state.totalPages = action.payload.totalPages;
      }
    );
    builder.addCase(
      actionAddCustomerTestDrivingAPI.fulfilled,
      (state, action) => {
        state.listCustomer.push(action.payload);
      }
    );
    builder.addCase(
      actionDeleteCustomerTestDrivingAPI.fulfilled,
      (state, action) => {
        state.listCustomer.splice(
          state.listCustomer.findIndex(
            (customer) => customer.id === action.payload.id
          ),
          1
        );
      }
    );
    builder.addCase(actionUpdateCustomerAPI.fulfilled, (state, action) => {
      state.listCustomer = action.payload;
    });
  },
});

export let { actions } = customerTestDrivingSlice;
export default customerTestDrivingSlice.reducer;
