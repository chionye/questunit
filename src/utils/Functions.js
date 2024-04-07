/** @format */

import Storage from "./Storage";
import { Button, Pressable } from "react-native";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const TruncateAccountNo = ({ accountNo, msg }) => {
  let hideNum = [];
  let account = new String(accountNo);
  let hideAccountNo = "";
  if (account.length !== undefined) {
    for (let i = 0; i < account.length; i++) {
      if (i < account.length - 4) {
        hideNum.push("*");
      } else {
        hideNum.push(account[i]);
      }
    }

    hideAccountNo = hideNum.join("");
  }
  return `${msg} ${hideAccountNo}`;
};

export const TruncateEmail = ({ email, msg }) => {
  let mail = email.split("@");
  let emailCount = mail[0].length;
  let splitMail = mail[0].split("");
  let truncatedEmail = "";
  for (let i = 0; i < emailCount; i++) {
    if (i == 0 || i == emailCount - 1) {
      truncatedEmail += splitMail[i];
    } else {
      truncatedEmail += "*";
    }
  }
  truncatedEmail += `@${mail[1]}`;
  return `${msg} ${truncatedEmail}`;
};

export const Greetings = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return `Good ${greet}`;
};

export const LastLogin = () => {
  let d = new Date();
  return `Last sign in on ${d.toLocaleString()}`;
};

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let icon = "";
    let iconPackage = "";
    const color = focused ? "#1434A4" : "#828282";
    const size = 24;

    switch (route.name) {
      case "Accounts":
        iconPackage = (
          <MaterialIcons name={"account-balance"} size={size} color={color} />
        );
        break;

      case "Transfers":
        iconPackage = (
          <Ionicons
            name={"ios-document-text-outline"}
            size={size}
            color={color}
          />
        );
        break;

      case "Deposits":
        iconPackage = (
          <MaterialCommunityIcons
            name={"transfer-right"}
            size={size}
            color={color}
          />
        );
        break;

      case "More":
        iconPackage = (
          <Ionicons name={"grid-outline"} size={size} color={color} />
        );
        break;

      default:
        iconPackage = (
          <MaterialIcons name={"account-balance"} size={size} color={color} />
        );
    }

    return iconPackage;
  },
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: 10,
  },
});

export const StackScreenOptions = (status, title = null) => {
  return status
    ? {
        title: title,
        headerStyle: {
          backgroundColor: "#F6F8FA",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "200",
        },
        headerTitleAlign: "center",
      }
    : {
        headerShown: false,
      };
};

export const Logout = ({ key, redirectUrl }) => {
  Storage.deleteData(key);
  return redirectUrl.navigate("Login");
};
