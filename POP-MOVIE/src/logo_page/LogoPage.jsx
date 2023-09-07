//import React from 'react'
import logoPop from './images/logoPop.png';
import cuadroR from './images/cuadroR.png'
function LogoPage() {

return (

    <div>
        <div className="cuadroR">
        <img src={cuadroR} />
        </div>
        <div className="imgPop">
        <img src={logoPop} />
        </div>
    </div>
    );
}
export default LogoPage;