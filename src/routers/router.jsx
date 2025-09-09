import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/Layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetailsPage from "../pages/AdventureDetailsPage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage.JSX";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPass from "../pages/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/adventuredetails/:id",
        element: (
          <PrivateRoute>
            <AdventureDetailsPage></AdventureDetailsPage>
          </PrivateRoute>
        ),
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      },
      {
        path: "/auth/login/forgetPass",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path:"/update-profile",
        element:<PrivateRoute>
            <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;
