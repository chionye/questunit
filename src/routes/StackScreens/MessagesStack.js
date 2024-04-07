/** @format */

import React, { useContext } from "react";
import Messages from "../../screens/home/Messages";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export default MessagesStackNavigator = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Messages'
        component={Messages}
        options={StackScreenOptions(false)}
        initialParams={{ mail: null }}
      />
    </AppStack.Navigator>
  );
};
