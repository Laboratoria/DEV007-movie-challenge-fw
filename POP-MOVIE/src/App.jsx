import { useState } from "react";
import "./App.css";
import LogoPage from "./logo_page/LogoPage";
import HomePage from "./home_page/HomePage";
import { createRoot } from "react-router-dom/client";
import { createBrowserRouter, RouterProvider, Route, link } from "react-router-dom";

const router = createBrowserRouter ([
{
  path: "/",
  element: (
    
  )

}

])

function App() {
  const [logoPop, setLogo] = useState(true);
  // Esperar 5 segundos para que se vea la principal
  setTimeout(() => {
    setLogo(false);
  }, 5000);
  if (logoPop) {
    return <LogoPage />;
  }
  return <HomePage />;
}

export default App;
