import React from "react";

function AppText({ children, style, ...otherProps }) {
  return (
    <span style={{ ...defaultStyles.text, ...style }} {...otherProps}>
      {children}
    </span>
  );
}

export default AppText;
