import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Home } from './routes/Home/Home'
import { About } from './routes/About/About'
import { Detail } from './routes/Detail/Detail'
import { Error } from './routes/Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Login } from './routes/Login/Login';



const router = createBrowserRouter([
   {
      path: '/',
      element: (
      <AppProvider>
         <Login />
      </AppProvider>
      ),
      errorElement:(
         <AppProvider>
            <Error />
         </AppProvider>
         )
   },
   {
      path: '/home',
      element: (
         <AppProvider>
            <Home />
         </AppProvider>
         ),
   },
   {
      path: '/detail/:id',
      element: (
         <AppProvider>
            <Detail />
         </AppProvider>
         ),
   },
   {
      path: '/about',
      element: (
         <AppProvider>
            <About />
         </AppProvider>
         )
   }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Fragment>
         <RouterProvider router={router} />
   </Fragment>
)
