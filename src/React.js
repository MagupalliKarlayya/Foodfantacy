import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Menuitems from "./components/menupage";
import { Errors } from "./components/ErrorRoutepage";
import ErrorMessage from "./components/ErrorMessage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./components/profile";
import { Loader } from "./components/loader";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./components/AuthContext";
const Contacts = lazy(() => import("./components/contacts"));
const Aboutus = lazy(() => import("./components/aboutus"));

const root = ReactDOM.createRoot(document.querySelector(".container"));

const APPlayout = () => {
  return (
    <div className="min-h-screen flex items-center bg-custom-gradient flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <APPlayout />,
    errorElement: <Errors />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/menus/:id",
        element: <Menuitems />,
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<Loader />}>
            <Aboutus />,
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contacts",
        element: (
          <Suspense fallback={<Loader />}>
            <Contacts />,
          </Suspense>
        ),
      },

      {
        path: "/cards",
        element: <Cards />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
