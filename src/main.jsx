import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs  from './components/AboutUs.jsx'
import ContactUs  from './components/ContactUs.jsx'
import Body  from './components/body.jsx'
import Error  from './components/Error.jsx'
import Login from './components/Login.jsx'
import RestaurantMenu  from './components/RestaurantMenu.jsx'
import "./index.css"


const AppRouter = createBrowserRouter([
  {
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <RouterProvider router={AppRouter} />
)