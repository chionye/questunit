/** @format */

import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { Card, Badge } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Storage from "../../utils/Storage";

export default AccountDetails = ({ route, navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    Storage.getData("account")
      .then((data) => data)
      .then((value) => {
        setData(JSON.parse(value));
      })
      .catch((err) => console.log(err));
  }, []);
  const accountNo = new String(data.account_number);
  const hiddenAccountNo = accountNo.replace(/.(?=.{4})/g, "x");
  const [accountStat, setAccountStat] = useState(false);

  return (
    <Container>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.availableBal}>Available Balance</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.amount}>{data.balance}</Text>
          </View>
        </View>
        <View style={styles.hideButtonContainer}>
          <Text style={styles.hideText}>HIDE DETAILS</Text>
          <View style={styles.hideIcon}>
            <TouchableOpacity>
              <Badge size={25} style={styles.badge}>
                <Ionicons
                  name='chevron-up-outline'
                  size={20}
                  color='#ffffffaa'
                />
              </Badge>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.accountContainer}>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Current Balance</Text>
          <Text style={styles.info}>${data.balance}</Text>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Averge Daily Balance</Text>
          <Text style={styles.info}>${data.balance}</Text>
        </View>
        <View style={styles.accountInfo}>
          <View>
            <Text style={styles.label}>Last Statement Balance</Text>
            <Text style={styles.hideText}>Ending {data.last}</Text>
          </View>
          <Text style={styles.info}>${data.balance}</Text>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Routing Number</Text>
          <Text style={styles.info}>{data.routing}</Text>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Account Number</Text>
          <View style={styles.accountNumber}>
            {accountStat ? (
              <Text style={styles.info}>{accountNo}</Text>
            ) : (
              <Text style={styles.info}>{hiddenAccountNo}</Text>
            )}
            <TouchableOpacity
              style={{ marginLeft: 35 }}
              onPress={() => setAccountStat(!accountStat)}>
              <Text style={styles.hideText}>
                {accountStat ? "HIDE" : "SHOW"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Everday Checking</Text>
          <TouchableOpacity>
            <Text style={styles.hideText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Joint Owner</Text>
          <TouchableOpacity>
            <Text style={styles.hideText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.label}>Direct Deposit Form</Text>
          <TouchableOpacity>
            <Text style={styles.hideText}>CREATE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacingTop}>
          <Ionicons
            name='help-circle-outline'
            size={24}
            color='lightgrey'
            style={styles.arrowIcon}
          />
          <Text style={[styles.hideText, styles.spacing]}>
            Current Vs Available Balance
          </Text>
        </View>
      </View>
      <View style={styles.finalContainer}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate("CardScreen")}>
            <Card mode='outlined'>
              <Card.Content style={styles.cardInner}>
                <Ionicons name='card-outline' size={20} color='#1434A4' />
                <Text style={styles.smallText}>Manage Card</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate("Statement")}>
            <Card mode='outlined'>
              <Card.Content style={styles.cardInner}>
                <Ionicons
                  name='document-text-outline'
                  size={20}
                  color='#1434A4'
                />
                <Text style={styles.smallText}>Statements</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate("Deposits")}>
            <Card mode='outlined'>
              <Card.Content style={styles.cardInner}>
                <Ionicons name='cash-outline' size={20} color='#1434A4' />
                <Text style={styles.smallText}>Send Money</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Transfers")}>
          <View style={styles.actions}>
            <View>
              <Text style={styles.thickText}>Scheduled Transactions</Text>
              <Text style={styles.smallText}>
                View scheduled payments, transfers.
              </Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
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
    marginTop: 5,
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
    fontSize: 18,
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
    backgroundColor: "#1434A4",
  },
  hideIcon: {
    position: "absolute",
    top: 17,
    zIndex: 10,
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
  info: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
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
    padding: 10,
  },
  regularText: {
    color: "#000",
    fontSize: 18,
  },
  smallText: {
    color: "#000",
    fontSize: 13,
  },
  coverPlus: {
    flexDirection: "row",
    marginRight: 10,
    fontSize: 18,
  },
  coverIcon: {
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  finalContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
  },
  cardInner: {
    width: 123,
    alignItems: "center",
  },
  cards: {
    margin: 5,
  },
});
