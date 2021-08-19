import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-body">
          Link to {props.name} profile.
        </p>
        <a href={props.link} className="card-button">
          GO
        </a>
      </div>
    </div>
  );
};

export default Card;
