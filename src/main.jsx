import React from 'react'
import ReactDOM from 'react-dom/client'
import MainMenu from './main_menu'
import Root from "./routes/root"
import Ontologies from './routes/ml_models/ontologies'
import Embeddings from './routes/ml_models/embeddings'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/ml-models/ontologies",
    element: <Ontologies/>
  },
  {
    path: "/ml-models/embeddings",
    element: <Embeddings/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="dark:bg-slate-900 text-white min-h-screen">
    <MainMenu/>
    <div className="pt-4">
    <RouterProvider router={router} />
    </div>
    </div>
  </React.StrictMode>,
)
