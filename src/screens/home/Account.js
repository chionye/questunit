/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../../constants";
import Button from "../../components/Button";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Account = ({ navigation }) => {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.offwhite,
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/profile.png")}
            />
            <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                <Text style={styles.statsLabel}>Update profile photo</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                value={text}
                style={styles.form}
                onChangeText={(text) => setText(text)}
              />
            </View>
            <View>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                value={text}
                style={styles.form}
                onChangeText={(text) => setText(text)}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={text}
                style={styles.formEmail}
                onChangeText={(text) => setText(text)}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Phone number</Text>
              <TextInput
                value={text}
                style={styles.formEmail}
                onChangeText={(text) => setText(text)}
              />
            </View>
          </View>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderButtons}>
            <View style={styles.gender}>
              <View style={styles.active} onPress={(text) => setText(text)}>
                <Text style={styles.label}>Male</Text>
              </View>
            </View>
            <View style={styles.gender}>
              <View style={styles.inactive} onPress={(text) => setText(text)}>
                <Text style={styles.label}>Female</Text>
              </View>
            </View>
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              text='Save Changes'
              filled
              onPress={() => navigation.navigate("Home")}
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
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
  formInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  ButtonContainer: {
    marginTop: 30
  },
  genderButtons: {
    flexDirection: "row",
    backgroundColor: COLORS.secondaryGray,
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
  },
  gender: {
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 180,
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  active: {
    width: 180,
    height: 55,
    backgroundColor: COLORS.offwhite,
    borderColor: COLORS.offwhite,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inactive: {
    width: 180,
    height: 55,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 17,
    marginBottom: 10,
  },
  formEmail: {
    width: 375,
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
    padding: 2,
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
  },
  statsBox: {
    alignItems: "center",
  },
  statsLabel: {
    fontSize: 14,
    color: "#1DB954",
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
    padding: 10,
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
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  flex: {
    flexDirection: "row",
  },
});

export default Account;
