/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.note}>
        <Text style={styles.bodyText}>
          Whether you're buying a new car or home, building your savings or just
          planning for every day spending, we have what you need to reach your
          financial goals.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageCover}>
          <Image
            style={styles.image}
            source={require("../../../assets/car.jpeg")}
          />
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Account")}>
          <Text style={styles.buttonText}>View Rates for All Products</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.finalPart}>
        <Card style={styles.card}>
          <Card.Cover
            style={styles.cardCover}
            source={require("../../../assets/cards.jpg")}
          />
          <Card.Content style={styles.cardContent}>
            <Text style={styles.thickText}>Credit Cards</Text>
            <Text variant='bodyMedium'>
              Find a card that best fits your lifestyle.
            </Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  finalPart: {
    backgroundColor: "#00000011",
    width: "100%",
    marginTop: 10,
    height: 280,
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
    marginTop: 50,
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
    fontSize: 17,
    fontWeight: "400",
    padding: 20,
    textAlign: "center",
  },
  card: {
    marginTop: 5,
  },
  cardCover: {
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#1434A4",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Products;
