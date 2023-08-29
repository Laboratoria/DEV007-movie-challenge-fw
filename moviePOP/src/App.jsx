const nombre = 'Nelly';
let num = 1

function App() {

  const sumar = ()=>{
    num+=1
    console.log(num);
  }
  return (
      <div className="App">
        <h1> HOLAAAAAA {nombre} !</h1>
        <button onClick={sumar}> +1 </button>
        <p>{num}</p>
        </div>
  )
}

export default App
