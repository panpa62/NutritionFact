import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import store from "./store/store.js";
import Nutrition from "./features/nutrientList/Nutrition.jsx";
import Home from "./features/home/Home.jsx";
import NutritionDetails from "./features/nutrientList/NutritionDetails.jsx";
import { SearchedIngredientDetails } from "./features/searchFunction/SearchedIngredientDetails.jsx";
import Resources from "./features/resource/Resources.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "nutrition", element: <Nutrition /> },
      { path: "nutrition/:id", element: <NutritionDetails /> },
      {
        path: "searchedIngredient/:id",
        element: <SearchedIngredientDetails />,
      },
      { path: "resources", element: <Resources /> },
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
