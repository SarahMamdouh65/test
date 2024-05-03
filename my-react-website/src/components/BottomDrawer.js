import React, { useState, useEffect } from "react";
import defaultStyles from "../config/styles";
import "./BottomDrawer.css"; // Import CSS file for styling

const DRAWER_OFFSET = 70;

const BottomDrawer = ({ children, drawerState, setDrawerState }) => {
  const DrawerState = {
    Open: window.innerHeight - DRAWER_OFFSET,
    Peek: 280,
    Closed: 0,
  };

  useEffect(() => {
    animateMoveSpring(DrawerState[drawerState]);
  }, [drawerState]);

  const [y, setY] = useState(DrawerState.Closed);
  const margin = 0.05 * window.innerHeight;
  const movementValue = (moveY) => window.innerHeight + DRAWER_OFFSET - moveY;

  const onPanResponderMove = (_, { moveY }) => {
    const val = movementValue(moveY);
    val > DrawerState.Open ? null : animateMoveSpring(val);
  };

  const onPanResponderRelease = (_, { moveY }) => {
    const valueToMove = movementValue(moveY);
    const nextState = getNextState(y, valueToMove, margin);
    setDrawerState(getKeyByValue(DrawerState, nextState));
    animateMoveSpring(nextState);
  };

  const onMoveShouldSetPanResponder = (_, { dy }) => {
    return Math.abs(dy) >= 10;
  };

  const animateMoveSpring = (toValue, callback) => {
    setY(toValue);
    callback && callback();
  };

  const getNextState = (currentState, val, margin) => {
    switch (currentState) {
      case DrawerState.Peek:
        return val >= currentState + margin
          ? DrawerState.Open
          : val <= DrawerState.Peek - margin
          ? DrawerState.Closed
          : DrawerState.Peek;
      case DrawerState.Open:
        return val >= currentState
          ? DrawerState.Open
          : val <= DrawerState.Peek
          ? DrawerState.Closed
          : DrawerState.Peek;
      case DrawerState.Closed:
        return val >= currentState + margin
          ? val <= DrawerState.Peek + margin
            ? DrawerState.Peek
            : DrawerState.Open
          : DrawerState.Closed;
      default:
        return currentState;
    }
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  return (
    <div
      className="drawer"
      onTouchStart={() => true}
      onTouchMove={onPanResponderMove}
      onTouchEnd={onPanResponderRelease}
    >
      <div className="line"></div>
      {children}
    </div>
  );
};

export default BottomDrawer;
