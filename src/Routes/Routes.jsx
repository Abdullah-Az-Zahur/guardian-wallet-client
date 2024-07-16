import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage status={404}></ErrorPage>,
    children: [
      // Add routes here
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }
    ],
  },
]);
