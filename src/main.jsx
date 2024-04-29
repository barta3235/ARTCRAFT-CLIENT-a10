import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import Error from './pages/Error'
import { HelmetProvider } from 'react-helmet-async'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './provider/AuthProvider';
import AddCrafts from './pages/AddCrafts';
import Allcrafts from './pages/Allcrafts';
import CraftDetails from './pages/CraftDetails';
import MyCrafts from './pages/MyCrafts'
import Update from './pages/Update'
import ProtectedRoute from './provider/ProtectedRoute'
import CategorySubDetails from './pages/CategorySubDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://m10m57-art-craft-server.vercel.app/items')
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addcrafts',
        element: <ProtectedRoute><AddCrafts></AddCrafts></ProtectedRoute>
      },
      {
        path: '/allcrafts',
        element: <Allcrafts></Allcrafts>,
        loader: () => fetch('https://m10m57-art-craft-server.vercel.app/items')
      },
      {
        path: '/craftDetails/:id',
        element: <ProtectedRoute><CraftDetails></CraftDetails></ProtectedRoute>,
        loader: ({ params }) => fetch(`https://m10m57-art-craft-server.vercel.app/items/${params.id}`)
      },
      {
        path: '/mycrafts/:email',
        element: <ProtectedRoute><MyCrafts></MyCrafts></ProtectedRoute>,
        loader: ({ params }) => fetch(`https://m10m57-art-craft-server.vercel.app/itemsbyemail/${params.email}`)
      },
      {
        path: '/update/:id',
        element: <ProtectedRoute><Update></Update></ProtectedRoute>,
        loader: ({ params }) => fetch(`https://m10m57-art-craft-server.vercel.app/items/${params.id}`)
      },
      {
        path: '/subcatdetails/:cat',
        element: <CategorySubDetails></CategorySubDetails>,
        loader: ({ params }) => fetch(`https://m10m57-art-craft-server.vercel.app/subcatitem/${params.cat}`)

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
