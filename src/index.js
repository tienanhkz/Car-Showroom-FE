import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Register from "./Authentication/Register";
import HomePage from "./Pages/Customer/HomePage";
import Contact from "./Pages/Customer/Contact";
import AdminPage from "./Pages/Admin/AdminPage";
import ForgetPassword from "./Authentication/ForgetPassword";
import MainBody from "./Components/MainBody";
import Introduce from "./Pages/Customer/Introduce";
import PriceTable from "./Pages/Customer/PriceTable";
import BuyingOnInstallment from "./Pages/Customer/BuyingOnInstallment";
import News from "./Pages/Customer/News";
import Dashboard from "./Pages/Admin/Dashboard";
import ProductAdminPage from "./Pages/Admin/ProductAdminPage";
import CustomerType2AdminPage from "./Pages/Admin/CustomerType2AdminPage";
import CustomerAdminPage from "./Pages/Admin/CustomerAdminPage";
import Posts from "./Pages/Admin/Posts";
import Revenue from "./Pages/Admin/Revenue";
import Message from "./Pages/Admin/Message";
import Statics from "./Pages/Admin/Statics";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import ProductDetail from "./Pages/Customer/ProductDetail";
import Accounts from "./Pages/Admin/Accounts";
import MyAccount from "./Pages/Admin/MyAccount";
import LoginForm from "./Components/LoginModal/LoginForm";
import HomePage2 from "./Pages/Customer/HomePage2";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forget",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <MainBody />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "priceTable",
        element: <PriceTable />,
      },
      {
        path: "buyCar",
        element: <BuyingOnInstallment />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "new",
        element: <News />,
      },
      {
        path: "carDetail/:ID",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/homePage",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <MainBody />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "priceTable",
        element: <PriceTable />,
      },
      {
        path: "buyCar",
        element: <BuyingOnInstallment />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "new",
        element: <News />,
      },
      {
        path: "carDetail/:ID",
        element: <ProductDetail />,
      },
    ],
  },
  ,
  {
    path: "/homePage2",
    element: <HomePage2 />,
    children: [
      {
        index: true,
        element: <MainBody />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "priceTable",
        element: <PriceTable />,
      },
      {
        path: "buyCar",
        element: <BuyingOnInstallment />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "new",
        element: <News />,
      },
      {
        path: "carDetail/:ID",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/adminPage",
    element: <AdminPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        Accounts,
      },
      {
        path: "MyAccounts",
        element: <MyAccount />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "listProduct",
        element: <ProductAdminPage />,
      },
      {
        path: "customerType1",
        element: <CustomerType2AdminPage />,
      },
      {
        path: "customerType2",
        element: <CustomerAdminPage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "revenue",
        element: <Revenue />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "statics",
        element: <Statics />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
