/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Bills = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.imageCover}>
            <Image
              style={styles.image}
              source={require("../../assets/card.jpg")}
            />
            <Text style={styles.cardText}>... ... ... 7485</Text>
          </View>
        </View>
        <View style={styles.actions3}>
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>John Smith</Text>
            <Text style={styles.lightText}>Primary Cardholder</Text>
          </View>
          <View>
            <Text style={styles.thickText}>$447.11</Text>
            <Text style={styles.lightText}>Current Balance</Text>
          </View>
        </View>
        <View style={styles.actions4}>
          <View style={styles.otherPart}>
            <Text>ONLINE PAYMENTS & SUBSCRIPTIONS</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <View style={styles.actions3}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Card on File</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <View style={styles.actions4}>
          <View style={styles.otherPart}>
            <Text>SECURITY</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Freeze Card</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Report Fraud</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Report Lost Card</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Manage Notifications</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Set Travel Plans</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageCover: { width: 300, height: 200 },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    alignItems: "center",
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    fontSize: 18,
    color: "#fff",
    width: "70%",
    marginTop: 10,
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  heading2: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    fontWeight: "200",
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
  cardInner: {
    width: 185,
    alignItems: "center",
  },
  cards: {
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherPart: {
    marginLeft: 10,
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  lightText: {
    fontSize: 14,
    color: "#00000077",
  },
  normalText: {
    fontSize: 17,
    fontWeight: "500",
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions1: {
    marginTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions2: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions3: {
    padding: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actions4: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    backgroundColor: "#00000044",
  },
  actions5: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Bills;
