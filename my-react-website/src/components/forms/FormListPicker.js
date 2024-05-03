import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppList from "../List";

function AppFormListPicker({
  icon,
  items,
  itemKeyField,
  name,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleSelectItem = (item) => {
    setFieldValue(name, item);
  };

  return (
    <>
      <AppList
        icon={icon}
        items={items}
        itemKeyField={itemKeyField}
        onSelectItem={handleSelectItem}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormListPicker;
