/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";

export default Storage = {
  storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("You got this error: " + error);
    }
  },
  getData: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? jsonValue : null;
    } catch (error) {
      console.log("You got this error: " + error);
    }
  },
  wipeData: () => {
    AsyncStorage.clear();
  },
  deleteData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Data removed");
    } catch (exception) {
      console.log(exception);
    }
  },
};
