import React from "react";
import "./coin/Coindata.css"
function Coin(props) {
  return (
      
    <div className="container">
    <div className="coin">
        <img src={props.icon}/>
        <h1> Name:{props.name}</h1>
        <h3> Price:{props.price}</h3>
        <h3> Symbol:{props.symbol}</h3>   
    </div>
    </div>
  );
}

export default Coin;
