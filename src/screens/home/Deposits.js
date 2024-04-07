/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";
import { TextInput, Card } from "react-native-paper";
import Storage from "../../utils/Storage";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";
import { TruncateAccountNo } from "../../utils/Functions";

const screenHeight = Dimensions.get("window").height;
export default Deposits = ({ navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    Storage.getData("account")
      .then((data) => data)
      .then((value) => {
        setData(JSON.parse(value));
      })
      .catch((err) => console.log(err));
  }, []);

  const [amount, setAmount] = useState("");
  const [bname, setBname] = useState("");
  const [receipient, setReceipient] = useState("");
  const [rname, setRname] = useState("");
  const [routNo, setRoutNo] = useState("");
  const [swift, setSwift] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmitPress = () => {
    setLoading(true);
    if (!amount) {
      alert("Please enter Amount");
      return;
    }
    if (!bname) {
      alert("Please enter Bank name");
      return;
    }
    if (!receipient) {
      alert("Please enter Account Number");
      return;
    }
    if (!swift) {
      alert("Please enter Swift code");
      return;
    }
    if (!routNo) {
      alert("Please enter Routing number");
      return;
    }
    if (!rname) {
      alert("Please enter Receiver Account name");
      return;
    }
    let dataToSend = {
      formId: "getTransferCode",
      accountNo: data.account_number,
    };
    console.log(dataToSend);

    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        // If server response message same as Data Matched
        if (json.output === "success") {
          let code = json.data.code;
          navigation.navigate("Otp", {
            formId: "makeTransfer",
            amount,
            bname,
            receipient,
            accName:"",
            swift,
            routNo,
            desc,
            rname,
            accountNo: data.account_number,
            code,
          });
        } else {
          alert(json.msg);
          console.log(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const updateSecureTextEntry = () => {
    let currentSecureEntry = secureTextEntry;
    setSecureTextEntry(!currentSecureEntry);
  };

  return (
    <Container>
      <Loader loading={loading} />
      <View style={{ flex: 1, height: screenHeight }}>
        <ScrollView style={styles.scrollview}>
          <Card style={styles.card}>
            <Card.Content>
              <View>
                <Text style={styles.thickText1}>
                  <TruncateAccountNo
                    msg={"Silver Credit Account"}
                    accountNo={data.account_number}
                  />
                </Text>
              </View>
              <View style={styles.hide}>
                <View>
                  <Text style={styles.largeText}>
                    $
                    {secureTextEntry
                      ? parseFloat(data.bal).toFixed(2).toLocaleString()
                      : "xxxxxxxx"}
                  </Text>
                  <Text style={styles.label}>Current Balance</Text>
                </View>
                <View style={styles.eye}>
                  <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                    {secureTextEntry ? (
                      <Feather name='eye-off' color='#ffffff' size={20} />
                    ) : (
                      <Feather name='eye' color='#ffffff' size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Content>
          </Card>
          <View>
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.textContainer}>
                <TextInput
                  label='Amount to send'
                  value={amount}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  keyboardType='numeric'
                  onChangeText={(text) => setAmount(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Bank name'
                  value={bname}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setBname(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Recipients account number'
                  value={receipient}
                  mode={"outlined"}
                  keyboardType='numeric'
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setReceipient(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Recipients account name'
                  value={rname}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setRname(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Routing number'
                  value={routNo}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setRoutNo(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Swift code'
                  value={swift}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setSwift(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Description'
                  value={desc}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setDesc(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmitPress()}>
                  <Text style={styles.buttonText}>Transfer</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1434a4;
`;

const StatusBar = styled.StatusBar``;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#00308F",
    borderRadius: 8,
  },
  thickText1: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  availableBal: {
    fontSize: 10,
    textAlign: "center",
    color: "#FFFFFFBB",
    marginBottom: -30,
  },
  amount: {
    fontSize: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
  spacingTop: {
    marginTop: 40,
    flexDirection: "row",
  },
  spacing: {
    marginTop: 10,
    marginLeft: 10,
  },
  actions: {
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 15,
    width: 400,
    flexDirection: "row",
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
  amountContainer: {
    alignItems: "center",
    height: 100,
    flexDirection: "row",
  },
  dollar: {
    fontSize: 13,
    color: "#FFFFFF",
  },
  badge: {
    fontSize: 13,
    backgroundColor: "#E5E4E2",
  },
  leftText: {
    flexDirection: "row",
  },
  hideText: {
    color: "#FFFFFFAA",
  },
  hideButtonContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  titleContainer: {
    alignItems: "center",
  },
  accountContainer: {
    backgroundColor: "#00308F",
    padding: 20,
  },
  accountInfo: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  label: {
    color: "#fff",
    fontSize: 15,
  },
  largeText: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
  },
  regularText: {
    color: "#000",
    fontSize: 18,
  },
  smallText: {
    color: "#000",
    fontSize: 13,
  },
  finalContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  scrollview: {
    backgroundColor: "#FFFFFF",
    padding: 5,
  },
  textContainer: {
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
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
  hide: { flexDirection: "row", justifyContent: "space-between" },
  eye: {
    marginTop: 20,
  },
});
