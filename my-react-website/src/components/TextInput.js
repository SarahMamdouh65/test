import React from "react";

const AppTextInput = React.forwardRef(
  ({ containerStyle, icon, ...otherProps }, ref) => {
    return (
      <div ref={ref} style={{ ...styles.container, ...containerStyle }}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={defaultStyles.colors.medium}
            style={{ ...styles.icon }}
          />
        )}
        <input
          disabled
          placeholderTextColor={defaultStyles.colors.medium}
          style={{ ...styles.textInput, ...defaultStyles.text }}
          {...otherProps}
        />
      </div>
    );
  }
);

const styles = {
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 12,
    flexDirection: "row",
    marginVertical: 5,
    padding: 15,
    width: "100%",
  },
  icon: {
    alignSelf: "center",
  },
  textInput: {
    marginLeft: 10,
    width: "90%",
  },
};

export default AppTextInput;
