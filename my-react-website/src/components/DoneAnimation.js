import React, { useState } from "react";
import Lottie from "react-lottie"; // Assuming you're using React Lottie

function DoneAnimation({ onDone, opacity = 0.8, visible = false, speed = 1 }) {
  const [modalVisible, setModalVisible] = useState(visible);

  const onAnimationFinish = () => {
    setModalVisible(false);
    onDone();
  };

  return (
    <div
      className="modal"
      style={{
        display: modalVisible ? "block" : "none",
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        position: "fixed",
        top: 0,
        left: 0,
        width: 150, // Adjust width as needed
        zIndex: 1,
      }}
    >
      <Lottie
        animationData={require("../assets/animations/appointment_done.json")}
        loop={false}
        autoplay
        onComplete={onAnimationFinish}
        speed={speed}
        style={{
          alignSelf: "center",
          width: 150, // Adjust width as needed
        }}
      />
    </div>
  );
}

export default DoneAnimation;
