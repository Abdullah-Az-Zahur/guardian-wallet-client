import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Common from "../pages/Dashbord/Common/Common";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashbord/Admin/ManageUser";
import SentMoney from "../pages/SentMoney/SentMoney";
import CashOut from "../pages/CashOut/CashOut";
import CashIn from "../pages/CashIn/CashIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/SentMoney",
        element: <SentMoney></SentMoney>,
      },
      {
        path: "/CashOut",
        element: <CashOut></CashOut>,
      },
      {
        path: "/CashIn",
        element: <CashIn></CashIn>,
      },
    ],
  },

  // Dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Common></Common>,
      },
      // admin dashboard
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      // Add more dashboard routes here
    ],
  },
]);
