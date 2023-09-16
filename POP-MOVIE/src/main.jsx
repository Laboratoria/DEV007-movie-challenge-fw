import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter.jsx';

const Router = createBrowserRouter ([

<AppRouter/>
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
