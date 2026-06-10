import { Children, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/Layout/MainLayout";
import Home from "./Page/Home";
import FetchOld from "./Page/FetchOld";
import FetchRQ from "./Page/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/trad",
          element:<FetchOld />,
        },
        {
          path:"/rq",
          element:<FetchRQ />,
        },
      ],
    },
  ]);

function App() {

  const queryClient = new QueryClient();

// return <RouterProvider router={router} />;
return(
  <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />;
  </QueryClientProvider>
) 
}

export default App;
