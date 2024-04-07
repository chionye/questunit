/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

const ShadowBox = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 5, // Android shadow
    shadowColor: "black", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
    backgroundColor: "white", // Background color of the shadow box
  },
});

export default ShadowBox;
