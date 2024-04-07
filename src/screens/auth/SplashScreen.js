/** @format */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { VideoBackground } from "../../components/VideoBackground";
import Button from "../../components/Button";

const SplashScreen = () => {
  return (
    <>
      <VideoBackground />
      <View style={styles.overlay} />
      <SafeAreaView style={styles.contentWrapper}>
        <StatusBar
          backgroundColor='transparent'
          translucent={true}
          hidden={false}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Start your journey now</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => console.log("Sign in")} text={"Sign in"} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => console.log("Sign up")} text={"Sign up"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
