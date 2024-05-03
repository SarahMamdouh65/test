import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Text from "../Text";

import defaultStyles from "../../config/styles";

function AppFormCheck({ children, name }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <div style={styles.container}>
        <input
          type="checkbox"
          style={styles.checkbox}
          checked={values[name]}
          onChange={(e) => setFieldValue(name, e.target.checked)}
          onBlur={() => setFieldTouched(name)}
        />
        <label style={styles.text}>{children}</label>
      </div>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = {
  checkbox: {
    alignSelf: "center",
    margin: 10,
  },
  container: { display: "flex", flexDirection: "row" },
  text: {
    flex: 1,
    alignSelf: "center",
    color: defaultStyles.colors.medium,
    fontSize: 14,
  },
};

export default AppFormCheck;
