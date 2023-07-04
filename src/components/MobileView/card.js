import React, { useState } from "react";
import "./card.css"; // Import the CSS file for styling
import logo from "./images/Frame 23359.png";

const Card = () => {
  const [showText, setShowText] = useState(false); // State to control text animation

  const handleCardClick = () => {
    setShowText(!showText); // Toggle the text animation on card click
  };

  return (
    <div
      style={{
        marginTop: "10em",
      }}
      className="card"
      onClick={handleCardClick}
    >
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-container">
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
    </div>
  );
};

export default Card;
