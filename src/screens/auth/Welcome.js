/** @format */

import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../../constants/colors";
import Button from "../../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.black, COLORS.black]}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../../../assets/splash.png")}
            style={{
              height: 300,
              width: 300,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 60,
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: COLORS.white,
              }}>
              Request eases life
            </Text>
          </View>

          <View
            style={{
              marginTop: 120,
              fontWeight: 800,
              color: COLORS.white,
            }}>
            <Button
              text='Join Now'
              size='large'
              onPress={() => navigation.navigate("Signup")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 22,
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
