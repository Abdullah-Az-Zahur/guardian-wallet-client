import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // Add routes here
      {
        path: "/",
        element: <h1>Home</h1>,
      }
    ],
  },
]);
