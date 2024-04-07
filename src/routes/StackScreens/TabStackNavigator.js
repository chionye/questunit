/** @format */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenOptions } from "../../utils/Functions";
import Messages from "../../screens/home/Messages";
import HomeScreen from "../../screens/home/HomeScreen";
import Profile from "../../screens/home/Profile";
import Services from "../../screens/home/Services";
import Welcome from "../../screens/auth/Welcome";
import ServiceDetail from "../../screens/home/ServiceDetail";
import Babysitting from "../../screens/home/Babysitting";
import Caregiving from "../../screens/home/Caregiving";
import Carwashing from "../../screens/home/Carwashing";
import PetWalking from "../../screens/home/Petwalking";
import Massaging from "../../screens/home/Massaging";
import FitnessTraining from "../../screens/home/FitnessTraining";
import Laundry from "../../screens/home/Laundry";
import Account from "../../screens/home/Account";
import Location from "../../screens/home/Location";
import Support from "../../screens/home/Support";
import SplashScreen from "../../screens/auth/SplashScreen";
import { StatusBar } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const TabStackNavigator = () => {

  const HomeStackNavigator = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name='Home'
          component={HomeScreen}
          options={StackScreenOptions(false)}
        />
        <AppStack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={StackScreenOptions(false)}
        />
        <AppStack.Screen
          name='Services'
          component={Services}
          options={StackScreenOptions(false)}
        />
        <AppStack.Screen
          name='ServiceDetail'
          component={ServiceDetail}
          options={StackScreenOptions(false)}
        />
        <AppStack.Screen
          name='Babysitting'
          component={Babysitting}
          options={StackScreenOptions(true, "Babysitting")}
        />
        <AppStack.Screen
          name='PetWalking'
          component={PetWalking}
          options={StackScreenOptions(true, "PetWalking")}
        />
        <AppStack.Screen
          name='FitnessTraining'
          component={FitnessTraining}
          options={StackScreenOptions(true, "FitnessTraining")}
        />
        <AppStack.Screen
          name='Massaging'
          component={Massaging}
          options={StackScreenOptions(true, "Massaging")}
        />
        <AppStack.Screen
          name='Caregiving'
          component={Caregiving}
          options={StackScreenOptions(true, "Caregiving")}
        />
        <AppStack.Screen
          name='Carwashing'
          component={Carwashing}
          options={StackScreenOptions(true, "Carwashing")}
        />
        <AppStack.Screen
          name='Laundry'
          component={Laundry}
          options={StackScreenOptions(true, "Laundry")}
        />
        <AppStack.Screen
          name='Location'
          component={Location}
          options={StackScreenOptions(false)}
        />
      </AppStack.Navigator>
    );
  };

  const ServicesStack = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name='Services'
          component={Services}
          options={StackScreenOptions(false)}
        />
      </AppStack.Navigator>
    );
  };

  const MessagesStackNavigator = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name='Messages'
          component={Messages}
          options={StackScreenOptions(false)}

        />
      </AppStack.Navigator>
    );
  };

  const SettingsScreen = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name='Profile'
          component={Profile}
          options={StackScreenOptions(false, "Profile")}
        />
        <AppStack.Screen
          name='Account'
          component={Account}
          options={StackScreenOptions(true, "Edit Profile")}
        />
        <AppStack.Screen
          name='Support'
          component={Support}
          options={StackScreenOptions(true, "Support")}
        />
      </AppStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1DB954' />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#1DB954",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}>
        <Tab.Screen
          name='Home'
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='ios-home' size={24} color='black' />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Services'
          component={ServicesStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='safari' size={24} color='black' />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Messages'
          component={MessagesStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name='message' size={24} color='black' />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='MyAccount'
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='supervised-user-circle'
                size={24}
                color='black'
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStackNavigator;
