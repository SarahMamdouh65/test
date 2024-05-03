import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import ModalEdit from "./ModalEdit";

function AppFormModalEdit({
  editable = true,
  children,
  icon,
  onSave,
  placeholder,
  value,
  validationSchema,
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (newValues) => {
    onSave(newValues);
    setModalVisible(false);
  };

  return (
    <>
      <ModalEdit
        editable={editable}
        icon={icon}
        modalVisible={modalVisible}
        placeholder={placeholder}
        setModalVisible={setModalVisible}
        value={value}
        width={width}
      >
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            {children}
            <button type="submit">Save</button>
          </Form>
        </Formik>
      </ModalEdit>
    </>
  );
}

export default AppFormModalEdit;
