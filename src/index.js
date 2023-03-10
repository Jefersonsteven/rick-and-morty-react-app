import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Nav } from './components/Nav/Nav';
import { Home } from './routes/Home/Home'
import { About } from './routes/About/About'
import { Detail } from './routes/Detail/Detail'
import { Error } from './Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext';



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
   <Fragment>
      <AppProvider>
         <div className="UI" >
             <Nav/>
         </div>
         <RouterProvider router={router}/>
      </AppProvider>
   </Fragment>
)
