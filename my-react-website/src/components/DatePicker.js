import React, { useState } from "react";
import dayjs from "dayjs";

import Label from "./Label";

import defaultStyles from "../config/styles";

function AppDatePicker({
  icon,
  onSelectDate,
  placeholder,
  selectedDate,
  width = "100%",
  ...otherProps
}) {
  const [pickerVisible, setPickerVisible] = useState(false);

  const onChange = (event) => {
    const newDate = event.target.value;

    setPickerVisible(false);

    if (!newDate) return;

    onSelectDate(dayjs(newDate).format("YYYY-MM-DD"));
  };

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: defaultStyles.colors.white }}
      >
        <Label
          icon={icon}
          textColor={
            selectedDate
              ? defaultStyles.colors.dark
              : defaultStyles.colors.medium
          }
        >
          {selectedDate ? selectedDate : placeholder}
        </Label>
        <button className="chevron" onClick={() => setPickerVisible(true)}>
          <span>&#x25B6;</span>
        </button>
      </div>

      {pickerVisible && (
        <input
          type="date"
          value={selectedDate ? selectedDate : ""}
          onChange={onChange}
          {...otherProps}
        />
      )}
    </>
  );
}

export default AppDatePicker;
