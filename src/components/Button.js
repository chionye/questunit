/** @format */

import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import {COLORS} from "../../constants/";

const width = Dimensions.get("window").width;

const Button = ({
  text,
  onPress,
  type = "filled",
  bordered = false,
  size = "large",
}) => {
  const large = "100%";
  const small = width / 2;
  const smaller = 150;
  const btnSize =
    size === "large" ? large : size === "smaller" ? smaller : small;
  const btnBgColor =
    type === "filled" ? "#1DB954" : type === "cancel" ? "#CC5500" : "#1434A4";
  const btnTextColor =
    type === "filled" ? "#ffffff" : type === "cancel" ? "#ffffff" : "#6371c2";
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 18,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
  };

  const border = type === "outlined" && {
    borderColor: "#e7e7e7",
    borderWidth: 2,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ width: "100%" }}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
