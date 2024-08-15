import React from 'react'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productsid from './pages/Productsid';
import Layout from './components/Layout';
import Cart from './pages/Cart';



const router =createBrowserRouter([
  {
    path :"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:productid",
        element: <Productsid />
      },
    
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
]) 

function App() {
  return (
  <div>
    <RouterProvider router ={router}/>
  </div>
  
  )
}

export default App