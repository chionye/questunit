/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import Storage from "../../utils/Storage";
import * as LocalAuthentication from "expo-local-authentication";

const Security = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    Storage.getData("biometrics")
      .then((data) => data)
      .then((value) => {
        value = JSON.parse(value);
        setIsSwitchOn(!value);
        console.log(value);
      });
  }, []);

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    Storage.storeData("biometrics", isSwitchOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.actions1}>
          <View style={styles.leftSide}>
            <Ionicons name='finger-print' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Log in with biometrics</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.actions}>
            <MaterialIcons name='report' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Make a Report</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions}>
            <AntDesign name='logout' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Log out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  disclaimer: {
    fontSize: 16,
  },
  faq: {
    fontSize: 16,
    color: "#1434A4",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#1434A4",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginBottom: 5,
  },
  heading: {
    fontSize: 18,
    color: "#fff",
    width: "70%",
    marginTop: 10,
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  heading2: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    fontWeight: "200",
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
  cardInner: {
    width: 185,
    alignItems: "center",
  },
  cards: {
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherPart: {
    marginLeft: 10,
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions1: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    paddingLeft: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions2: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  leftSide: {
    flexDirection: "row",
  },
});

export default Security;
