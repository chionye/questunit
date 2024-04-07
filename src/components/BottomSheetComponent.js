/** @format */

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";

const BottomSheetComponent = ({
  name,
  amount,
  date,
  transType,
  status,
  toggle,
  visible,
}) => {
  <BottomSheet
    visible={visible}
    onBackButtonPress={visible}
    onBackdropPress={visible}>
    <View style={styles.card}>
      <View style={styles.innerCardTop}>
        {status == "success" ? (
          <Feather
            name='check-circle'
            size={24}
            color='#1434A4'
            style={styles.arrowIcon}
          />
        ) : (
          <Octicons
            name='stop'
            size={24}
            color='#FF0000'
            style={styles.arrowIcon}
          />
        )}
        <Text>{status == "success" ? "Completed" : "Failed"}</Text>
      </View>
      <View style={styles.innerCardMid}>
        <Text>Name</Text>
        <Text style={styles.thickText}>{name}</Text>
      </View>
      <View style={styles.innerCardMid}>
        <Text>Amount</Text>
        <Text style={styles.thickText}>{amount}</Text>
      </View>
      <View style={styles.innerCardMid}>
        <Text>Date</Text>
        <Text style={styles.thickText}>{date}</Text>
      </View>
      <View style={styles.innerCardMid}>
        <Text>Transaction Type</Text>
        <Text style={styles.thickText}>{transType}</Text>
      </View>
    </View>
  </BottomSheet>;
};

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 10,
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    height: 300,
    alignItems: "center",
    padding: 20,
  },
  innerCardTop: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  innerCardMid: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BottomSheetComponent;
