/** @format */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants";

export default Messages = () => {

  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View>
          <Text style={styles.title}>Messages</Text>
        </View>
        <View style={styles.container}>
          <Feather name='mail' size={100} color={COLORS.secondary} />
          <Text style={styles.message}>
            There are no messages here yet, messages from renderers and offers
            from us will appear here
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    backgroundColor: COLORS.offwhite,
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign:"center"
  },
});
