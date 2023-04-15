import React from "react";

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"; 
import Root from "./root"
import List from "./list";
import Details from "./details";
import Createnew from "./createNew";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "list",
      element: <List />,
    },
    {
      path: "details",
      element: <Details />,
    },
    {
      path: "createNew",
      element: <Createnew />,
    },
  ]); 
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);  