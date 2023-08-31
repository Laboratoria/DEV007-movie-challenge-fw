import logoPop from "../img/logoPop";
import "../home_page/home_page.css";

function HomePage() {
    return (
    <div className="App">
        <h1> HOLAAAAAA {nombre} !</h1>
        <button onClick={sumar}> +1 </button>
        <p>{num}</p>
    </div>
    );
}

export default App;
