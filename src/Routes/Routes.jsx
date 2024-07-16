import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // Add routes here
      {
        path: "/",
        element: <Login></Login>,
      }
    ],
  },
]);
