/** @format */

import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import { LastLogin, Greetings, TruncateEmail } from "../../utils/Functions";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";
import Button from "../../components/Button";
import * as LocalAuthentication from "expo-local-authentication";
import Storage from "../../utils/Storage";

export const RadioBtn = () => (RadioButton)