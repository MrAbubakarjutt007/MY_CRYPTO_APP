import React from "react";
import "./coin/Coindata.css"


function Coin({ name, icon, price, symbol }) {
  const settings = {
    infinite:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      }
      
    ]
  };


  return (
      
    <div className="container">
    <div className="coin">
        <img src={icon} />
        <h1> Name:{name}</h1>
        <h3> Price:{price}</h3>
        <h3> Symbol:{symbol}</h3>   
    </div>
    </div>
  );
}

export default Coin;
