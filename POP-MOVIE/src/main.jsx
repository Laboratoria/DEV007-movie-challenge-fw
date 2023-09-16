import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-router-dom/client";
import { createBrowserRouter, RouterProvider, Route, link, BrowserRouter } from "react-router-dom";

const router = createBrowserRouter ([


])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
