/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Storage from "../../utils/Storage";

export default Success = ({ route, navigation }) => {
  const message = route.params.message;
  const [email, setEmail] = useState("");

  useEffect(() => {
    Storage.getData("login")
      .then((data) => data)
      .then((value) => {
        value = JSON.parse(value);
        setEmail(value.email);
        console.log(value.email);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Touch
        onLongPress={() =>
          navigation.navigate("Tabs", {
            screen: "Accounts",
            params: {
              screen: "Home",
              params: {
                email: email,
              },
            },
          })
        }
        delayPressIn={0}>
        <Circle bgColor='#5196f410'>
          <Circle bgColor='#5196f430'>
            <TouchButton>
              <AntDesign name='checkcircleo' size={64} color='#ffffff' />
            </TouchButton>
          </Circle>
        </Circle>
      </Touch>
      <Text style={styles.thickText}>Success</Text>
      <Text style={styles.followUpText}>{message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "Accounts",
            params: {
              screen: "Home",
              params: {
                email: email,
              },
            },
          })
        }>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <StatusBar barStyle='light-content' />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`;

const TouchButton = styled.View`
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;

const StatusBar = styled.StatusBar``;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1434A4",
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
  },
  thickText: {
    color: "#000",
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 22,
  },
  followUpText: {
    color: "#00000088",
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 17,
  },
});
