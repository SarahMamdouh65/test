import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading_wave.json";
import findingAnimation from "../assets/animations/finding_location.json";
import "./ActivityIndicator.css"; // Import the CSS file for styling

function ActivityIndicator({ name = "loading", visible = false }) {
  if (!visible) return null;

  let animation = null;

  if (name === "loading") animation = loadingAnimation;
  else if (name === "finding") animation = findingAnimation;

  return (
    <div className="overlay">
      <div className="indicator">
        <Lottie
          animationData={animation}
          autoPlay
          loop
          className="lottie"
        />
      </div>
    </div>
  );
}

export default ActivityIndicator;

