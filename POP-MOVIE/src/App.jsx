import { useState } from 'react'
import './App.css';


function App() {
  const [logoPop, setLogo] = useState(true)
// Esperar 5 segundos para que se vea la principal
setTimeout(() => {
  setLogo (false);
  }, 5000);

  if (logoPop) {
    return (
      <LogoPage />
      );
  }
  }
export default App
