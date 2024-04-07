/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";
import Button from "../../components/Button";
import { LastLogin } from "../../utils/Functions";

const Confirm = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const email = route.params.email;
  const ElipseEmail = () => {
    let mail = email.split("@");
    let emailCount = mail[0].length;
    let splitMail = mail[0].split("");
    let str = "";
    for (let i = 0; i < emailCount; i++) {
      if (i == 0 || i == emailCount - 1) {
        str += splitMail[i];
      } else {
        str += "*";
      }
    }
    str += `@${mail[1]}`;
    return <Text style={styles.lightText}>{str.toUpperCase()}</Text>;
  };

  const handleSubmitPress = () => {
    setLoading(true);
    let dataToSend = {
      formId: "sendMail",
      email,
    };

    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        console.log(json);
        // If server response message same as Data Matched
        if (json.output === "success") {
          navigation.replace("ConfirmCode", {
            email,
            code:json.data.code
          });
        } else {
          setErrortext(json.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Loader loading={loading} />
        <View style={styles.header}>
          <Text style={styles.heading}>2-Step Verification</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.heading1}>cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.note}>
          <Text style={styles.bodyText}>
            To keep you even more secure, we've added 2-Step Verification to
            your sign in. Please select a method to complete this process
          </Text>
        </View>
        <View style={styles.actions}>
          <RadioButton
            value='first'
            status={"unchecked"}
            disabled={true}
            onPress={() => setChecked("first")}
          />
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>Text Message*</Text>
            <Text style={styles.lightText}>***-***-2825</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <RadioButton
            value='first'
            status={"unchecked"}
            disabled={true}
            onPress={() => setChecked("first")}
          />
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>Push Notification</Text>
            <Text style={styles.blueText}>You aren't using this device</Text>
            <Text style={styles.lightText}>
              Last sign in on <LastLogin />
            </Text>
          </View>
        </View>
        <View style={styles.actions}>
          <RadioButton
            value='first'
            status={"checked"}
            onPress={() => setChecked("first")}
          />
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>Email</Text>
            <ElipseEmail />
          </View>
        </View>
        <View style={styles.actions}>
          <Button text='Send' size='large' onPress={handleSubmitPress} />
        </View>
        <View style={styles.finalPart}>
          <Text style={styles.faq}>2-Step FAQs</Text>
          <Text style={styles.disclaimer}>
            *By providing a mobile number, you're granting Navy Federal
            permission to place automated, prerecorded or artificial-voice
            non-marketing calls and text messages to that number. Messaging and
            data rates from your carrier may apply. Message frequency may vary.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  finalPart: {
    backgroundColor: "#00000011",
    width: "100%",
    padding: 15,
    marginTop: 10,
    height: 280,
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
    fontSize: 20,
    color: "#fff",
    width: "85%",
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  note: {
    marginTop: 10,
  },
  otherPart: {
    marginLeft: 10,
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  lightText: {
    fontWeight: "400",
    fontSize: 14,
    color: "lightgrey",
  },
  bodyText: {
    fontSize: 20,
    fontWeight: "400",
    padding: 20,
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF66",
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    width: "100%",
  },
  input1: {
    width: "95%",
  },
  passwordSection: {
    borderWidth: 1,
    borderColor: "#FFFFFF66",
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#20B2AA",
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: "#20B2AA",
    fontSize: 12,
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "row",
  },
  btn1: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonLink: {
    width: 200,
  },
  buttonLink1: {
    width: 200,
    alignContent: "flex-end",
    textAlign: "right",
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: "100%",
    flexDirection: "row",
  },
  button2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 120,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  stretch: {
    height: 150,
  },
  contain: {
    height: 150,
    marginBottom: -150,
    justifyContent: "center",
  },
});

export default Confirm;
