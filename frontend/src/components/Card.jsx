import React from "react";
import "../style/Card.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="first-content">
          <span>{props.first}</span>
        </div>
        <div className="second-content">
          <span>{props.second}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
