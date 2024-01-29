import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import store from "./store/store.js";
import Nutrition from "./features/Nutrition.jsx";
import NutritionDetails from "./features/NutritionDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Nutrition /> },
      { path: "nutrition", element: <Nutrition /> },
      { path: "nutrition/:id", element: <NutritionDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
