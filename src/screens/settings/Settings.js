/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Card, Switch } from "react-native-paper";

const Settings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    Storage.getData("darkmode")
      .then((data) => data)
      .then((value) => {
        if (value) {
          setIsSwitchOn(value);
          console.log(value + " there");
        }
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

  const Logout = () => {
    Storage.deleteData("login");
    navigation.replace("Login");
  };

  const onToggleSwitch = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback to default authentication method (password) if Fingerprint is not available
    if (!isBiometricAvailable) {
      return alertComponent(
        "Sorry",
        "Biometric Authentication not supported",
        "OK",
        () => {
          setIsSwitchOn(false);
        }
      );
    } else {
      let message = !isSwitchOn
        ? "Biometric Authentication turned on"
        : "Biometric Authentication turned off";
      return alertComponent("Done", message, "OK", () => {
        setIsSwitchOn(true);
        console.log(isSwitchOn);
        Storage.storeData("biometrics", true);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate("Profile")}>
            <Card mode='outlined'>
              <Card.Content style={styles.cardInner}>
                <Ionicons
                  name='person-circle-outline'
                  size={20}
                  color='#1434A4'
                />
                <Text variant='bodyMedium'>Profile & Settings</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate("Security")}>
            <Card mode='outlined'>
              <Card.Content style={styles.cardInner}>
                <Ionicons name='shield-outline' size={20} color='#1434A4' />
                <Text variant='bodyMedium'>Security</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.actions}>
            <Ionicons name='document-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Account & Tax Statements</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Deposits")}>
          <View style={styles.actions}>
            <Ionicons name='cash-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Send Money</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions2}>
            <Ionicons
              name='information-circle-outline'
              size={24}
              color='#1434A4'
            />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Notification Settings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions1}>
            <Ionicons name='cart-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Products & Rates</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions}>
            <Ionicons name='document-text-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>My Application Forms</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions2}>
            <Ionicons name='calculator-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Tools & Calculators</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Legal")}>
          <View style={styles.actions1}>
            <Ionicons name='briefcase-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Legal</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions}>
            <Ionicons name='call-outline' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Contact Us</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Logout}>
          <View style={styles.actions}>
            <SimpleLineIcons name='logout' size={24} color='#1434A4' />
            <View style={styles.otherPart}>
              <Text style={styles.thickText}>Sign out</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.actions}>
          <Ionicons name='help-circle-outline' size={24} color='#1434A4' />
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>App Version 1.11.0 (1303223)P</Text>
          </View>
        </View>
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
    fontSize: 16,
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
    marginTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
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
  actions11: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    paddingLeft: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
  },
});

export default Settings;
