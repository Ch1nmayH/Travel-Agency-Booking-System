import React, { useEffect, useState } from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cookies from "js-cookie";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import UnauthenticatedPage from "./Pages/UnauthenticatedPage";
import UnauthorizedPage from "./Pages/UnauthorizedPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminPanel from "./Pages/AdminPanel";
import Package from "./Pages/Package";
import Packages from "./Pages/Packages";
import UserContext from "./utils/CreateContext";
import Book from "./Pages/Book";
import BookingSuccess from "./Pages/BookingSuccess";

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <NavBar />
    <main className="flex-grow">
      <Outlet /> {/* This renders the matched child route */}
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout to wrap routes with NavBar
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/package/:packageId",
        element: <Package />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/book/:packageId",
        element: <Book/>,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path : "/bookingSuccess/:bookingId",
        element : <BookingSuccess/>
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/notAuthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "/unauthenticated",
    element: <UnauthenticatedPage />,
  },
]);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  useEffect(() => {
    if (token) setToken(token);
    else setToken(null);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ token, setToken }}>
        <RouterProvider router={router} />;
      </UserContext.Provider>
    </>
  );
}

export default App;
