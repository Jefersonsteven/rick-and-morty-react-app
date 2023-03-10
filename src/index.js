import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Home } from './views/Home/Home'
import { About } from './views/About/About'
import { Detail } from './views/Detail/Detail'
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
