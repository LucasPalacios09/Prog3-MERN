import React from "react";
import "./GameCard.scss";

export default function GameCard(props) {
  return (
    <div
      className="card-main-container"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {/* <div>
        <img src={props.img} alt="Game-img" />
      </div> */}
      <div id="card-header">{props.title}</div>
      <div id="card-body">
        <p>{props.description}</p>
      </div>
      <div id="card-footer">
        <button>Jugar</button>
      </div>
    </div>
  );
}
