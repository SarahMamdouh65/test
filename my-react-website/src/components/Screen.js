import React from "react";

function Screen({ children, contentContainerStyle, onRefresh, refreshing, style }) {
  return (
    <div style={styles.screen}>
      <div
        style={{
          ...contentContainerStyle,
          overflowY: "auto",
          height: "100%",
          width: "100%",
        }}
      >
        {onRefresh && (
          <div>
            <button onClick={onRefresh} disabled={refreshing}>
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

const styles = {
  screen: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Screen;
