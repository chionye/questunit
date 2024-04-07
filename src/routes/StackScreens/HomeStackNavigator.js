/** @format */

import React, { useContext } from "react";
import HomeScreen from "../../screens/home/HomeScreen";
import Login from "../../screens/auth/Login";
import ServiceDetail from "../../screens/home/ServiceDetail";
import Services from "../../screens/home/Services";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export default HomeStackNavigator = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Home'
        component={HomeScreen}
        options={StackScreenOptions(false)}
        initialParams={{ mail: null }}
      />

      <AppStack.Screen
        name='ServiceDetail'
        component={ServiceDetail}
        options={StackScreenOptions(true, "Dishwashing")}
        initialParams={{ mail: null }}
      />

      <AppStack.Screen
        name='Services'
        component={Services}
        options={StackScreenOptions(false)}
        initialParams={{ mail: null }}
      />
    </AppStack.Navigator>
  );
};
