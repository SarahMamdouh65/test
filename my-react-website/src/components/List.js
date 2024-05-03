import React, { useState } from "react";
import { Overlay } from "react-native-elements";

import AppListItemSeperator from "./ListItemSeperator";
import Label from "./Label";
import Text from "./Text";

import defaultStyles from "../config/styles";

function AppList({
  containerStyle,
  emptyPlaceholder = "Empty result",
  icon,
  iconColor,
  items,
  itemKeyField = "id",
  itemNameField = "name",
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item) => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <div style={[styles.container, containerStyle]}>
        <Label
          icon={icon}
          iconColor={iconColor}
          textColor={
            selectedItem
              ? defaultStyles.colors.dark
              : defaultStyles.colors.medium
          }
        >
          {selectedItem ? selectedItem[itemNameField] : placeholder}
        </Label>
        <button onClick={() => setModalVisible(true)} style={styles.chevron}>
          <span>&#8250;</span>
        </button>
      </div>

      {modalVisible && (
        <Overlay
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          overlayStyle={styles.overlay}
        >
          <Text style={styles.overlayTitle}>{placeholder}</Text>
          <AppListItemSeperator
            backgroundColor={defaultStyles.colors.black}
            height={1}
          />
          {items.length < 1 && (
            <Text style={styles.emptyPlaceholderText}>{emptyPlaceholder}</Text>
          )}
          <ul>
            {items.map((item) => (
              <li key={item[itemKeyField]} style={styles.listItem}>
                <button onClick={() => handleSelect(item)}>
                  {item[itemNameField]}
                </button>
              </li>
            ))}
          </ul>
        </Overlay>
      )}
    </>
  );
}

const styles = {
  chevron: {
    alignSelf: "center",
    right: 15,
  },
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 12,
    flexDirection: "row",
    marginVertical: 5,
    padding: 15,
    width: "100%",
  },
  emptyPlaceholderText: {
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    marginVertical: 10,
    fontSize: 18,
    color: defaultStyles.colors.medium,
  },
  listItem: { padding: 10 },
  overlay: {
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 80,
    padding: 10,
    width: "95%",
  },
  overlayTitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    padding: 10,
    paddingHorizontal: 20,
  },
};

export default AppList;
