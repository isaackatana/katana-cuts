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
import Artists from './pages/Artists.jsx'
import ArtistInfo from './pages/ArtistInfo.jsx'
import Store from './pages/Store.jsx'

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
        path: "/artists",
        element: <Artists/>,
      },
      {
        path: "/artists/artist/:slug",
        element: <ArtistInfo/>,
      },
      {
        path: "/store",
        element: <Store/>,
      },
      {
        path: "/about",
        element: <About/>,
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
