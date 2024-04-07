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
  AntDesign,
  SimpleLineIcons,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const data = [
    {
      id: 1,
      image: () => <AntDesign name='user' size={20} color='#1DB954' />,
      username: "Profile",
      redirect: "Account",
    },
    {
      id: 2,
      image: () => <AntDesign name='bells' size={20} color='#1DB954' />,
      username: "Notifications",
      redirect: "Account",
    },
    {
      id: 3,
      image: () => <MaterialIcons name='security' size={20} color='#1DB954' />,
      username: "Security",
      redirect: "Account",
    },
    {
      id: 4,
      image: () => (
        <MaterialCommunityIcons
          name='account-cog-outline'
          size={20}
          color='#1DB954'
        />
      ),
      username: "Accounts",
      redirect: "Account",
    },
    {
      id: 5,
      image: () => <SimpleLineIcons name='support' size={20} color='#1DB954' />,
      username: "Support",
      redirect: "Support",
    },
    {
      id: 6,
      image: () => <AntDesign name='logout' size={20} color='#1DB954' />,
      username: "Logout",
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/profile.png")}
              />
              <Text style={styles.name}>Blaise Anih</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                  <Text style={styles.statsLabel}>blaise.anih@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.tags}>
              <View style={styles.stars}>
                <AntDesign name='star' size={18} color='black' />
                <AntDesign name='star' size={18} color='black' />
                <AntDesign name='star' size={18} color='black' />
                <AntDesign name='star' size={18} color='black' />
                <AntDesign name='staro' size={18} color='black' />
                <Text style={styles.rating}>(4.5)</Text>
              </View>
              <View style={styles.balance}>
                <Foundation name='dollar' size={24} color='black' />
                <Text style={styles.rating}>0.00</Text>
              </View>
            </View>
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
                        <View style={styles.itemContainer}>
                          <View style={styles.icon1}>
                            <item.image />
                          </View>
                        </View>
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

            <View style={styles.statsBox}>
              <Text style={styles.statsLabel}>App Version 1.0.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    height: 50,
    width: 50,
    backgroundColor: COLORS.offwhite,
  },
  icon1: {
    borderRadius: 30,
    alignItems: "center",
  },
  balance: {
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
  },
  rating: {
    marginLeft: 7,
    fontWeight: "bold",
    fontSize: 15,
  },
  stars: {
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
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

export default Profile;
