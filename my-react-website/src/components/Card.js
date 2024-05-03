import React from "react";
import "./Card.css"; // Import the CSS file for styling

function Card({ children, onClick, className }) {
  return (
    <div
      className={`card ${className}`} // Use className instead of style for styling
      onClick={onClick}
      role="button" // Add role="button" for accessibility
      tabIndex="0" // Add tabIndex="0" for accessibility
    >
      {children}
    </div>
  );
}

export default Card;
