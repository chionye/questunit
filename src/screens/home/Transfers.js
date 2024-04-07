/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";
import Storage from "../../utils/Storage";
import Loader from "../../components/Loader";
import TransferList from "../../components/TransferList";
import { TruncateAccountNo } from "../../utils/Functions";
import { Card } from "react-native-paper";

let ScreenWidth = Dimensions.get("window").width;
export default Transfers = ({ navigation }) => {
  const [data, setData] = useState("");
  const [transferLst, setTransferLst] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [transType, setTransType] = useState("");
  const [status, setStatus] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  function toggle(item) {
    setVisible(!visible);
    setName(item.reciever_name);
    setAmount(item.amount);
    setDate(item.Trans_time);
    setTransType(item.trans_type);
    setStatus(item.trans_status);
  }

  useEffect(() => {
    Storage.getData("account")
      .then((data) => data)
      .then((value) => {
        setLoading(true);
        setData(JSON.parse(value));
        Storage.getData("transferList")
          .then((data) => data)
          .then((value) => {
            console.log(value);
            value = JSON.parse(value);
            setLoading(false);
            setTransferLst(value);
            console.log(transferLst, "test");
          });
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSecureTextEntry = () => {
    let currentSecureEntry = secureTextEntry;
    setSecureTextEntry(!currentSecureEntry);
  };

  return (
    <Container>
      <Loader loading={loading} />
      <SafeAreaView style={{ flex: 1 }}>
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
        <TransferList
          data={transferLst}
          callback={toggle}
          name={name}
          amount={amount}
          date={date}
          transType={transType}
          visible={visible}
          status={status}
        />
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  availableBal: {
    fontSize: 10,
    textAlign: "center",
    color: "#FFFFFFBB",
    marginBottom: -30,
  },
  card: {
    backgroundColor: "#00308F",
    borderRadius: 8,
    margin: 10,
  },
  thickText1: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 15,
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
  titleContainer: {
    alignItems: "center",
  },
  accountContainer: {
    backgroundColor: "#00308F",
    padding: 20,
  },
  iconLeft: {
    marginRight: 10,
    marginTop: 10,
  },
  eye: {
    marginTop: 20,
  },
  accountInfo: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
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
  hide: { flexDirection: "row", justifyContent: "space-between" },
});
