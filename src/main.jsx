import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AllMovies from './components/AllMovies/AllMovies';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import AddMovie from './components/AddMovie/AddMovie';
import MyFavorites from './components/MyFavorites/MyFavorites';
import PrivateRoutes from './Routs/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch('http://localhost:5000/movie'),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addmovie",
        element: <PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>
      },
      {
        path: "myfavorite",
        element: <PrivateRoutes><MyFavorites></MyFavorites></PrivateRoutes>
      },


    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
