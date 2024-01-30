import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Layout from './components/Layout'
import Index,{loader as clientsLoader} from './pages/Index'
import NewClient,{action as actionNewClient} from './pages/NewClient'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Index/>,
          loader: clientsLoader,
          errorElement: <ErrorPage/>
        },
        {
          path:'/clients/new',
          element: <NewClient/>,
          action: actionNewClient
        }
      ]
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
