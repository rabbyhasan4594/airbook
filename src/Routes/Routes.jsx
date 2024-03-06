import React from 'react';
import Home from '../components/Home/Home';
import Main from '../layout/main';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Offer from '../components/Offer/Offer';
import Airlines from '../components/Airlines/Airlines';
import About from '../components/About/About';





const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
           
            {
                path:"/blog",
                element:<Blog></Blog>,
              
            },
            {
                path:"/offer",
                element:<Offer></Offer>,
              
            },
            {
                path:"/airlines",
                element:<Airlines></Airlines>,
              
            },
            {
                path:"/about",
                element:<About></About>,
              
            },
          
        ]
    },
   
   
    
])

export default router;