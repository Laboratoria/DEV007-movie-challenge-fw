import { useState } from 'react'
import './App.css';
import HomePage from './home_page/HomePage';


function App() {
  const [logoPop, setLogo] = useState(true)
// Esperar 5 segundos para que se vea la principal
setTimeout(() => {
  setLogo (false);
  }, 5000);

  if (logoPop) {
    return (
      <HomePage />
      );
  }
  }
export default App
