/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { Badge } from "react-native-paper";
import { Octicons, Feather } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";

let ScreenWidth = Dimensions.get("window").width;

const TransferList = ({
  data,
  callback,
  name,
  amount,
  date,
  transType,
  visible,
  status,
}) => {
  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => callback(item)}>
      <View style={styles.actions}>
        <View style={styles.leftText}>
          <View style={styles.iconLeft}>
            <Badge size={25} style={styles.badge}>
              {item.trans_status == "1" ? (
                item.trans_type == "Debit" ? (
                  <Feather
                    name='check-circle'
                    size={24}
                    color='red'
                    style={styles.arrowIcon}
                  />
                ) : (
                  <Feather
                    name='check-circle'
                    size={24}
                    color='green'
                    style={styles.arrowIcon}
                  />
                )
              ) : (
                <Octicons
                  name='stop'
                  size={24}
                  color='#FF0000'
                  style={styles.arrowIcon}
                />
              )}
            </Badge>
          </View>
          <View>
            <Text style={styles.thickText}>{item.reciever_name}</Text>
            <Text style={styles.smallText}>
              {item.trans_type} - {item.Trans_time}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[styles.thickText, styles.spacing]}>${item.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.finalContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.user_id}
          />
        </View>
      </ScrollView>
      <BottomSheet
        visible={visible}
        onBackButtonPress={callback}
        onBackdropPress={callback}>
        <View style={styles.card}>
          <View style={styles.innerCardTop}>
            {status == "1" ? (
              transType == "Debit" ? (
                <Feather
                  name='check-circle'
                  size={24}
                  color='red'
                  style={styles.arrowIcon}
                />
              ) : (
                <Feather
                  name='check-circle'
                  size={24}
                  color='green'
                  style={styles.arrowIcon}
                />
              )
            ) : (
              <Octicons
                name='stop'
                size={24}
                color='#FF0000'
                style={styles.arrowIcon}
              />
            )}
            <Text>{status == "1" ? "Completed" : "Failed"}</Text>
          </View>
          <View style={styles.innerCardMid}>
            <Text>Name</Text>
            <Text style={styles.thickText}>{name}</Text>
          </View>
          <View style={styles.innerCardMid}>
            <Text>Amount</Text>
            <Text style={styles.thickText}>${amount}</Text>
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
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 15,
    width: ScreenWidth,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  arrowIcon: {
    marginTop: 10,
    fontSize: 18,
  },
  spacing: {
    marginRight: 10,
  },
  badge: {
    fontSize: 13,
    backgroundColor: "#E5E4E2",
  },
  leftText: {
    flexDirection: "row",
  },
  iconLeft: {
    marginRight: 10,
    marginTop: 10,
  },
  smallText: {
    color: "#000",
    fontSize: 11.5,
  },
  finalContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  scrollview: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    marginBottom: 45,
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
  card: {
    backgroundColor: "#fff",
    height: 300,
    alignItems: "center",
    padding: 20,
  },
});

export default TransferList;
