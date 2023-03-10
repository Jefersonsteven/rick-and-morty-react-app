import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Home } from './routes/Home/Home'
import { About } from './routes/About/About'
import { Detail } from './routes/Detail/Detail'
import { Error } from './Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Menu } from './components/Menu/Menu';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <Error />
   },
   {
      path: '/detail/:id',
      element: <Detail />,
   },
   {
      path: '/About',
      element: <About />
   }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}/>
)
