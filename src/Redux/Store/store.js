import { configureStore } from "@reduxjs/toolkit";
import carSliceReducer from "../Reducer/CarSliceReducer";
import CreateNewFormReducer from "../Reducer/CreateNewFormReducer";
import formSlice from "../Reducer/formSlice";
import formSlice2 from "../Reducer/formSlice2";
import CreateUpdateFormReducer from "../Reducer/CreateUpdateFormReducer";
import customerSlice from "../Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer";
import CreateNewCustomerFormReducer from "../Reducer/CustomerReceiveAlertPrice/CreateNewCustomerFormReducer";
import CreateUpdateCustomerFormReducer from "../Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer";
import customerTestDrivingSlice from "../Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer";
import CreateNewCustomerTestFormReducer from "../Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer";
import CreateUpdateCustomerTestDrivingFormReducer from "../Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer";
import loginModalSlice from "../Reducer/loginModalSlice";
import CreateNewNewsFormReducer from "../Reducer/News/CreateNewNewsFormReducer";
import CreateUpdateNewsFormReducer from "../Reducer/News/CreateUpdateNewsFormReducer";
import CreateNewAccountFormReducer from "../Reducer/Account/CreateNewAccountFormReducer";
import CreateUpdateAccountFormReducer from "../Reducer/Account/CreateUpdateAccountFormReducer";
import NewsSliceReducer from "../Reducer/News/NewsSliceReducer";
import accountSliceReducer from "../Reducer/Account/accountSliceReducer";

export const store = configureStore({
  reducer: {
    carReducer: carSliceReducer,
    formSlice: CreateNewFormReducer,
    loginModalSlice: loginModalSlice,
    formUpdateSlice: CreateUpdateFormReducer,
    formReducer: formSlice,
    formSlice2: formSlice2,
    customerReceiveAlertPrice: customerSlice,
    CreateNewCustomerFormReducer: CreateNewCustomerFormReducer,
    CreateUpdateCustomerFormReducer: CreateUpdateCustomerFormReducer,
    customerTestDriving: customerTestDrivingSlice,
    CreateNewCustomerTestFormReducer: CreateNewCustomerTestFormReducer,
    CreateUpdateCustomerTestDrivingFormReducer:
      CreateUpdateCustomerTestDrivingFormReducer,
    CreateNewNewsFormReducer: CreateNewNewsFormReducer,
    CreateUpdateNewsFormReducer: CreateUpdateNewsFormReducer,
    CreateNewAccountFormReducer: CreateNewAccountFormReducer,
    CreateUpdateAccountFormReducer: CreateUpdateAccountFormReducer,
    NewsSliceReducer: NewsSliceReducer,
    accountSliceReducer: accountSliceReducer,
  },
});
