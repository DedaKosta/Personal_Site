import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-body">
          Card content, something to do, something to tell. Card content,
          something to do, something to tell.
        </p>
        <a href="#aaa" className="card-button">
          Button
        </a>
      </div>
    </div>
  );
};

export default Card;
