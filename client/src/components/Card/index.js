import React from "react";
import CardBody from "../CardBody";

import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card() {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      
        style={{ opacity: 1 }}
        data-value="back"
      
      
        style={{ opacity: 1 }}
        data-value="next"
    
    </div>
  );
}

export default Card;
