/** @format */

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";
import { TruncateEmail } from "../../utils/Functions";
import Button from "../../components/Button";
import { AppContext } from "../../utils/AppContext";

const ConfirmCode = ({ route, navigation }) => {
  const [userCode, setUserCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [errortext, setErrortext] = useState("");
  const [resendButton, setResendButton] = useState(false);
  const [code, setCode] = useState(route.params.code);
  const [rerender, setRerender] = useState(false);
  let timer = null;

  const email = route.params.email;

  const sendCode = () => {
    setErrortext("");
    setLoading(true);
    let dataToSend = {
      formId: "sendCode",
      email,
    };

    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        // If server response message same as Data Matched
        if (json.output === "success") {
          setResendButton(false);
          setCode(json.code);
        } else {
          setErrortext(json.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitCode = () => {
    setErrortext("");
    if (!userCode) {
      alert("Please Enter Code");
      return;
    }

    if (userCode != code) {
      alert("Incorrect code supplied");
      return;
    } else {
      Storage.storeData("email", email);
      navigation.navigate("Tabs", {
        screen: "Accounts",
        params: {
          screen: "Home",
          params: {
            email: email,
          },
        },
      });
    }
  };

  // useEffect(() => {
  //   sendCode();
  // }, []);

  const start = () => {
    sendCode();
  };

  const resetTimer = () => {
    setResendButton(true);
    setTimeLeft(10);
    setRerender(true);
  };

  return (
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
          <TruncateEmail email={email} msg={"We sent a security code to"} />
        </Text>
      </View>
      <View style={styles.actions}>
        <Text>Enter Code</Text>
        <TextInput
          style={styles.input}
          onChangeText={(UserCode) => setUserCode(UserCode)}
          placeholderTextColor='#8b9cb5'
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          underlineColorAndroid='#f000'
          returnKeyType='next'
          textAlign={"center"}
        />

        {resendButton ? (
          <TouchableOpacity onPress={() => start()}>
            <Text style={styles.darkenText}>RESEND CODE</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.lightText}>RESEND CODE</Text>
        )}
      </View>
      <View style={styles.actions}>
        <Button text='Submit' size='large' onPress={submitCode} />
      </View>
      <View style={styles.finalPart}>
        <Text style={styles.faq}>Try a different method</Text>
        <TouchableOpacity>
          <FontAwesome5 name='chevron-right' size={20} color='#565656' />
        </TouchableOpacity>
      </View>
      <View style={styles.last}>
        <Text style={styles.faq}>2-Step FAQs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  last: {
    margin: 10,
  },
  finalPart: {
    backgroundColor: "#00000011",
    width: "100%",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  disclaimer: {
    fontSize: 16,
  },
  faq: {
    fontSize: 16,
    color: "#1434A4",
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
  darkenText: {
    fontWeight: "400",
    fontSize: 14,
    color: "black",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "400",
    padding: 20,
    textAlign: "center",
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00000066",
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    width: "50%",
    fontSize:22
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
    padding: 10,
    width: "100%",
    alignItems: "center",
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

export default ConfirmCode;
