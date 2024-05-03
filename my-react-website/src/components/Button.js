import React from "react";
import defaultStyles from "../config/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function AppButton({
  icon,
  onPress,
  style,
  title,
  color = "primary",
  disabled = false,
  ...otherProps
}) {
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      className={`button ${color} ${disabled ? "disabled" : ""}`}
      style={style}
      {...otherProps}
    >
      {title && <span className="text">{title}</span>}
      {icon && <FontAwesomeIcon icon={faCircle} className="icon" />}
    </button>
  );
}

export default AppButton;
