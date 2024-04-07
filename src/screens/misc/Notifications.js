/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import styled from "styled-components";
import { Badge } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import Storage from "../../utils/Storage";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";

let ScreenWidth = Dimensions.get("window").width;
export default Notifications = ({ navigation }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Storage.getData("notifications")
      .then((data) => data)
      .then((value) => {
        setLoading(true);
        if (!value) {
          let dataToSend = {
            formId: "notifications",
          };

          Api(dataToSend)
            .then((json) => {
              json = JSON.parse(json);
              // If server response message same as Data Matched
              if (json.output === "success") {
                Storage.storeData("notifications", json.data);
                Storage.storeData("new-notification", false);
                setData(json.data);
              } else {
                setErrortext(json.msg);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        setLoading(false);
        setData(JSON.parse(value));
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Item = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.actions}>
        <View style={styles.leftText}>
          <View style={styles.iconLeft}>
            <Badge size={25} style={styles.badge}>
              <Feather
                name='info'
                size={24}
                color='#1434A4'
                style={styles.arrowIcon}
              />
            </Badge>
          </View>
          <View>
            <View style={styles.wrapText}>
              <Text style={styles.thickText}>{item.msg}</Text>
            </View>
            <Text style={styles.smallText}>{item.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Container>
      <Loader loading={loading} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.finalContainer}>
            <FlatList
              data={data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.id}
            />
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
  wrapText: { flexDirection: "row", width: 350 },
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
    flex: 1,
    flexWrap: "wrap",
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
  accountInfo: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
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
    marginBottom: 45,
  },
  card: {
    backgroundColor: "#fff",
    height: 300,
    alignItems: "center",
    padding: 20,
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
});
