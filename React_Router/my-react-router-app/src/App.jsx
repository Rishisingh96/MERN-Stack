import { useState } from 'react'
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movei } from './pages/Movie';
import { Contact } from './pages/Contact';


function App() {
  //method one using new version 
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/about",
  //     element:<About />
  //   },
  //   {
  //     path:"/movie",
  //     element:<Movei />
  //   },
  //   {
  //     path:"/contact",
  //     element:<Contact />
  //   }
  // ]);

  // return <RouterProvider router={router}/>
  
  //method 2nd using old method
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movie" element={<Movei />} />
        <Route path="contact" element={<Contact />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}


export default App
