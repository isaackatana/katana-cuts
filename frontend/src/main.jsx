import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './pages/Store.jsx'
import Contact from './pages/Contact.jsx'
import ProductInfo from './ProductInfo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPage/>,
    
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/store",
        element: <Store/>,
      },
      {
        path: "/products/product/:slug",
        element: <ProductInfo/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "*",
        element: <NotFoundPage/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
