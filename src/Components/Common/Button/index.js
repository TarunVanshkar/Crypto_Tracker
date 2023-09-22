import React from "react";
import "./style.css";

const Button = ({ text, outlined, onClick }) => {
  return (
    <div className={outlined ? "outline-btn" : "btn"} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
