import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Describe } from './pages/Describe'
import { Home } from './pages/Home'
import {Landing} from './pages/Landing'
import { Github } from './pages/MyGithub'
import './styles/global.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/describe',
    element: <Describe />
  },
  {
    path: '/github-perfil',
    element: <Github />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
