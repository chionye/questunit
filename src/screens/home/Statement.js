/** @format */

import React, { useState, useEffect, startTransition } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import styled from "styled-components";
import Storage from "../../utils/Storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";

export default Statement = ({ navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    Storage.getData("account")
      .then((data) => data)
      .then((value) => {
        setData(JSON.parse(value));
      })
      .catch((err) => console.log(err));
  }, []);

  const [mydate, setDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  const [startButton, setStartButton] = useState(false);
  const [endButton, setEndButton] = useState(false);
  const [end, setEnd] = useState("");
  const [displaymode, setMode] = useState("date");
  const [isDisplayDate, setShow] = useState(false);
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    console.log(event.type);
    if (startButton && event.type == "set") {
      console.log("START");
      setStart(currentDate);
    } else if (endButton && event.type == "set") {
      console.log("end");
      setEnd(currentDate);
    }
    setShow(false);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const displayDatepicker = () => {
    showMode("date");
  };

  const displayStartDateDialog = () => {
    setStartButton(true);
    setEndButton(false);
    displayDatepicker();
  };

  const displayEndDateDialog = () => {
    setEndButton(true);
    setStartButton(false);
    displayDatepicker();
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.availableBal}>Available Balance</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.amount}>{data.balance}</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              placeholder='Start date'
              defaultValue={start}
              onChangeText={(start) => setStart(start)}
              placeholderTextColor='#8b9cb5'
              autoCapitalize='none'
              returnKeyType='next'
              underlineColorAndroid='#f000'
              blurOnSubmit={false}
            />
            <TouchableOpacity onPress={displayStartDateDialog}>
              <AntDesign name='calendar' color='#20B2AA' size={35} />
            </TouchableOpacity>

            {isDisplayDate && (
              <DateTimePicker
                testID='dateTimePicker'
                value={mydate}
                mode={displaymode}
                is24Hour={true}
                display='default'
                onChange={changeSelectedDate}
              />
            )}
          </View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              placeholder='End date'
              defaultValue={end}
              onChangeText={(end) => setEnd(end)}
              placeholderTextColor='#8b9cb5'
              autoCapitalize='none'
              returnKeyType='next'
              underlineColorAndroid='#f000'
              blurOnSubmit={false}
            />
            <TouchableOpacity onPress={displayEndDateDialog}>
              <AntDesign name='calendar' color='#20B2AA' size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input1}
              placeholder='Email'
              keyboardType='email-address'
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholderTextColor='#8b9cb5'
              autoCapitalize='none'
              returnKeyType='next'
              underlineColorAndroid='#f000'
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.textContainer1}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Generate</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  finalContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  scrollview: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    padding: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "#00000044",
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer1: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
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
  input: {
    marginVertical: 10,
    width: "88%",
    marginRight: 5,
  },
  input1: {
    marginVertical: 10,
    width: "100%",
    marginRight: 5,
  },
});
