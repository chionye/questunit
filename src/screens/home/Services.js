/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

export default Services = ({ navigation }) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;

  const apps = [
    {
      id: 1,
      name: "Dishwashing",
      logo: require("../../../assets/washing-dishes.png"),
      link: "ServiceDetail",
    },
    {
      id: 2,
      name: "Carwashing",
      logo: require("../../../assets/carwash.png"),
      link: "Carwashing",
    },
    {
      id: 3,
      name: "Caregiving",
      logo: require("../../../assets/care.png"),
      link: "Caregiving",
    },
    {
      id: 4,
      name: "Laundry",
      logo: require("../../../assets/washer.png"),
      link: "Laundry",
    },
    {
      id: 5,
      name: "Babysitting",
      logo: require("../../../assets/babysitting.png"),
      link: "Babysitting",
    },
    {
      id: 6,
      name: "Pet Walking",
      logo: require("../../../assets/petwalking.png"),
      link: "Petwalking",
    },
    {
      id: 7,
      name: "Massaging",
      logo: require("../../../assets/massaging.png"),
      link: "Massaging",
    },
    {
      id: 8,
      name: "Fitness Training",
      logo: require("../../../assets/fitness_training.png"),
      link: "FitnessTraining",
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Services</Text>
        <Text style={styles.subtitle}>Request anytime, anywhere</Text>
      </View>
      <View style={styles.sectionCard}>
        <FlatList
          data={apps}
          numColumns={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ServiceDetail")}>
              <View style={styles.itemContainer}>
                <View style={styles.icon1}>
                  <Image source={item.logo} />
                  <Text
                    style={styles.name}
                    numberOfLines={2}
                    ellipsizeMode='tail'>
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: COLORS.secondary1,
    color: "#fff",
  },
  title: {
    backgroundColor: COLORS.offwhite,
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  subtitle: {
    backgroundColor: COLORS.offwhite,
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 30,
  },
  innerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    marginTop: 15,
  },
  lastInner: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 1,
    borderRadius: 30,
    padding: 10,
    marginEnd: 10,
    backgroundColor: "rgb(237, 221, 246)",
  },
  icon1: {
    marginTop: 1,
    borderRadius: 30,
    alignItems: "center",
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionCard: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: "center",
    color: "#fff",
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionCardContent: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  contentContainer: {
    width: "100%",
  },
  welcome: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
  },
  user: {
    color: "#fff",
    fontSize: 35,
  },
  searchBar: {
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 90,
    width: 90,
    backgroundColor: "rgb(237, 221, 246)",
  },
  logo: {
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  recentLists: {
    padding: 1,
  },
  recentCards: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 5,
    color: "#fff",
  },
});
