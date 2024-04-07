import React, { useContext } from "react";
import Services from "../../screens/home/Services";
import ServiceDetail from "../../screens/home/ServiceDetail";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export default ServicesStack = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Services'
        component={Services}
        options={StackScreenOptions(false)}
        initialParams={{ mail: null }}
      />
    </AppStack.Navigator>
  );
};
