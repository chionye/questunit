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
import { SelectList } from "react-native-dropdown-select-list";

const Carwashing = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
  ];

  const data1 = [
    { key: "1", value: "Bike" },
    { key: "2", value: "Tricycle" },
    { key: "3", value: "Sedan/SUV" },
    { key: "4", value: "Van" },
    { key: "5", value: "Limousine" },
    { key: "6", value: "Truck/Bus" },
  ];

  const data2 = [
    { key: "1", value: "Auto-detailing(interior)" },
    { key: "2", value: "Bodywash(Exterior only)" },
    { key: "3", value: "Full Service(both in and out)" },
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
              <Text style={styles.label}>How many vehicle(s)</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
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
              <Text style={styles.label}>Car type</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data1}
                save='value'
                boxStyles={{
                  width: 375,
                }}
              />
            </View>
          </View>
          <View style={styles.formInput}>
            <View>
              <Text style={styles.label}>Service type</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
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
                value={text2}
                style={styles.formNote}
                onChangeText={(text) => setText2(text)}
              />
            </View>
          </View>

          <View style={styles.ButtonContainer}>
            <Button
              text='Next'
              filled
              onPress={() => navigation.navigate("Location")}
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

export default Carwashing;
