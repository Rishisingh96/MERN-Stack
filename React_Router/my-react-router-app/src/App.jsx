import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { GetApiMoveData } from "./api/GetApiMoveData";

function App() {
  //method one using new version
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element:  <Movie />,
          loader: GetApiMoveData
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  //method 2nd using old method
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="movie" element={<Movei />} />
  //       <Route path="contact" element={<Contact />} />
  //     </>
  //   )
  // );

  // return <RouterProvider router={router} />;
}

export default App;
