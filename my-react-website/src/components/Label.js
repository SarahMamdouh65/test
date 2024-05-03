import React from "react";
import { MaterialCommunityIcons } from "react-icons/md";
import TextTicker from "react-ticker";

import defaultStyles from "../config/styles";
import Text from "./Text";

function Label({
  children,
  containerStyle,
  icon,
  iconColor = defaultStyles.colors.medium,
  onPress,
  overflowAnimated = false,
  textColor = defaultStyles.colors.medium,
  textStyle,
  ...otherProps
}) {
  return (
    <div
      onClick={onPress}
      style={[styles.container, containerStyle]}
      disabled={onPress ? false : true}
    >
      {icon && (
        <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
      )}

      {!overflowAnimated && (
        <Text
          style={[
            defaultStyles.text,
            styles.text,
            { color: textColor },
            textStyle,
          ]}
          {...otherProps}
        >
          {children}
        </Text>
      )}

      {overflowAnimated && (
        <TextTicker
          style={[
            defaultStyles.text,
            styles.text,
            { color: textColor },
            textStyle,
          ]}
          direction="toLeft"
          loop
          marqueeDelay={1000}
        >
          {children}
        </TextTicker>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
  },
};

export default Label;
