import React from "react";

import defaultStyles from "../config/styles";

function AppListItemSeperator({
  backgroundColor = defaultStyles.colors.light,
  height = 2,
}) {
  return <div style={{ backgroundColor, height }} />;
}

export default AppListItemSeperator;
