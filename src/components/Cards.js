import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <div className="cards-grid">
        <Card name='Facebook' link='https://www.facebook.com/nikola.jovanovic.129142' />
        <Card name='LinkedIn' link='https://www.linkedin.com/in/nikola-jovanovic-0113a720b/' />
        <Card name='GitHub' link='https://github.com/DedaKosta' />
        <Card name='BitBucket' link='https://bitbucket.org/nikolajovanovic3579/' />
      </div>
    </div>
  );
};

export default Cards;
