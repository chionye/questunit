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
// import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../../constants";
import Button from "../../components/Button";
import { SelectList } from "react-native-dropdown-select-list";

const Massaging = ({ navigation }) => {
  const [selected, setSelected] = React.useState({
    service: "",
    note: "",
    duration: "",
  });

  const handleSelection = (value, key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const data = [
    { key: "1", value: "Male Masseuse" },
    { key: "2", value: "Female Masseuse" },
  ];

  const data2 = [
    { key: "1", value: "30 mins" },
    { key: "2", value: "1 hr" },
    { key: "3", value: "2 hrs" },
    { key: "4", value: "3 hrs" },
    { key: "5", value: "4 hrs" },
    { key: "6", value: "5 hrs" },
    { key: "7", value: "6 hrs" },
    { key: "8", value: "7 hrs" },
    { key: "9", value: "8 hrs" },
    { key: "10", value: "9 hrs" },
    { key: "11", value: "10 hrs" },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.offwhite,
      }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Service type</Text>
              <SelectList
                setSelected={(val) => handleSelection(val, "service")}
                data={data}
                save='value'
                boxStyles={{
                  width: 375,
                }}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Duration</Text>
              <SelectList
                setSelected={(val) => handleSelection(val, "duration")}
                data={data2}
                save='value'
                boxStyles={{
                  width: 375,
                }}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Note</Text>
              <TextInput
                value={selected.note}
                style={styles.formNote}
                onChangeText={(text) => handleSelection(text, "note")}
              />
            </View>
          </View>

          <View style={styles.ButtonContainer}>
            <Button
              text='Next'
              filled
              onPress={() =>
                navigation.navigate("Location", {
                  service: selected,
                })
              }
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
  warning: {
    paddingHorizontal: 10,
  },
  formInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  formNote: {
    width: 375,
    height: 155,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  ButtonContainer: {
    marginTop: 30,
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

export default Massaging;
