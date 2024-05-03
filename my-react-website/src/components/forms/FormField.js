import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";

function AppFormField({ onEndEditing = () => {}, name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  const handleChangeText = (event) => {
    const { text } = event.target;
    setFieldValue(name, text);
  };

  const handleBlur = () => {
    setFieldTouched(name);
  };

  const handleEndEditingValidated = async (event) => {
    const { text } = event.target;
    if (!errors[name]) onEndEditing(text);
  };

  return (
    <>
      <TextInput
        onBlur={handleBlur}
        onChange={handleChangeText}
        onEndEditing={handleEndEditingValidated}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
