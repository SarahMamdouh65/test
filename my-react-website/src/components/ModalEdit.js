import React from "react";
import { Modal } from "react-bootstrap";
import Label from "./Label";
import AppListItemSeperator from "./ListItemSeperator";
import Text from "./Text";
import defaultStyles from "../config/styles";

function ModalEdit({
  children,
  editable,
  icon,
  placeholder,
  secureTextEntry,
  value,
  width = "100%",
  modalVisible = false,
  setModalVisible,
}) {
  if (secureTextEntry) value = "•••••••";

  return (
    <>
      <div onClick={() => setModalVisible(true)} style={{ width }}>
        <Label
          icon={icon}
          textColor={
            value ? defaultStyles.colors.dark : defaultStyles.colors.medium
          }
        >
          {value ? value : placeholder}
        </Label>
        {editable && (
          <i
            className="material-icons"
            style={{
              alignSelf: "center",
              right: 15,
              fontSize: 24,
              color: defaultStyles.colors.medium,
            }}
          >
            chevron-right
          </i>
        )}
      </div>

      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{placeholder}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppListItemSeperator
            backgroundColor={defaultStyles.colors.black}
            height={1}
          />
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEdit;
