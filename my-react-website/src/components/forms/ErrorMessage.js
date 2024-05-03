import React from "react";
import Label from "../Label";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Label style={styles.error}>{error}</Label>;
}

const styles = {
  error: { color: "red", fontSize: 14 },
};

export default ErrorMessage;

