/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../../constants";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const Support = ({ navigation }) => {
  const data = [
    {
      id: 1,
      image: () => <Entypo name='help-with-circle' size={20} color='#1DB954' />,
      username: "Frequently Asked Questions",
      redirect: "Account",
    },
    {
      id: 2,
      image: () => <Entypo name='text-document' size={20} color='#1DB954' />,
      username: "Our Policies",
      redirect: "Account",
    },
    {
      id: 3,
      image: () => (
        <FontAwesome5 name='headphones-alt' size={20} color='#1DB954' />
      ),
      username: "Call us",
      redirect: "Account",
    },
    {
      id: 4,
      image: () => (
        <Ionicons name='chatbox-ellipses' size={20} color='#1DB954' />
      ),
      username: "Chat with us",
      redirect: "Account",
    },
    {
      id: 5,
      image: () => <FontAwesome name='envelope' size={20} color='#1DB954' />,
      username: "Email us",
      redirect: "Account",
    },
    {
      id: 6,
      image: () => <AntDesign name='twitter' size={20} color='#1DB954' />,
      username: "Twitter",
      redirect: "Account",
    },
    {
      id: 7,
      image: () => <AntDesign name='instagram' size={20} color='#1DB954' />,
      username: "Instagram",
      redirect: "Account",
    },
  ];

  const [friends, setFriends] = useState(data);

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}>
      <MaterialIcons name={icon} size={24} color='#1DB954' />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}>
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.offwhite,
      }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={friends}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.redirect)}>
                  <View style={styles.box}>
                    <View style={styles.flex}>
                      <item.image />
                      <Text style={styles.options}>{item.username}</Text>
                    </View>
                    <MaterialIcons
                      name='arrow-forward-ios'
                      size={14}
                      color='#1DB954'
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
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
  container: {
    backgroundColor: COLORS.offwhite,
  },
  header: {
    alignItems: "center",
    padding: 30,
    marginTop: 20,
  },
  headerContent: {
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  statsBox: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  statsLabel: {
    fontSize: 18,
    color: "#999999",
  },
  imageContainer: {
    width: "33%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 120,
  },
  body: {
    padding: 18,
    backgroundColor: COLORS.offwhite,
  },
  box: {
    padding: 13,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  options: {
    color: "#20B2AA",
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 10,
  },
  flex: {
    flexDirection: "row",
  },
});

export default Support;
