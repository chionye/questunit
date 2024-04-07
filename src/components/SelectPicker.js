/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const SelectPicker = ({ items, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        value={selectedValue}
        placeholder={{
          label: "Select an option...",
          value: null,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default SelectPicker;
