import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './assets/Layouts/Root';
import Home from './Home/Home';
import Register from './Register/Register';
import LogIn from './LogIn/LogIn';
import AuthProvider from './Contexts/AuthProvider';
import Orders from './Orders/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:'Register',
        Component: Register
      },
      {
        path:'LogIn',
        Component: LogIn
      },
      {
        path:'Orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'Profile',
       element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
