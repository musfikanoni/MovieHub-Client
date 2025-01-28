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
import SeeDetails from './components/SeeDetails/SeeDetails';
import UpdateMovie from './components/UpdateMovie/UpdateMovie';
import FeaturedMovies from './components/FeaturedMovies/FeaturedMovies'
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <FeaturedMovies></FeaturedMovies>,
            loader: () => fetch('https://assignment-10-server-plum-eight.vercel.app/'),
          }
        ]

      },
      {
        path: "allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://assignment-10-server-plum-eight.vercel.app/movie'),
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
        element: <PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>,
      },
      {
        path: "myfavorites",
        element: <PrivateRoutes><MyFavorites></MyFavorites></PrivateRoutes>,
        loader: () => fetch('https://assignment-10-server-plum-eight.vercel.app/myfavorites'),
      },
      {
        path: "seeDetails/:id",
        element: <PrivateRoutes><SeeDetails></SeeDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://assignment-10-server-plum-eight.vercel.app/${params.id}`),
      },
      {
        path: "updateMovie/:id",
        element: <PrivateRoutes><UpdateMovie></UpdateMovie></PrivateRoutes>,
        loader: ({params}) => fetch(`https://assignment-10-server-plum-eight.vercel.app/${params.id}`)
      }

    ],

  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
