import React from "react";
import "../App.css";
import { useState } from "react";

const Header = (props) => {
  const [curClass, setClass] = useState("topnav");

  const toggle = () => {
    if (curClass === "topnav") {
      setClass(curClass + " responsive");
    } else {
      setClass("topnav");
    }
  };

  return (
    <>
      <div className={curClass}>
        <a href="#home" className="active" onClick={() => props.onSelect('main')}>
          Home
        </a>
        <a href="#profile" onClick={() => props.onSelect('profile')}>Profile</a>
        <a href="#contact" onClick={() => props.onSelect('message')}>Contact</a>
        <a href="#about">About</a>
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="icon" onClick={toggle}>
            <i className="fa fa-bars"></i>
          </a>
        }
      </div>
    </>
  );
};

export default Header;
