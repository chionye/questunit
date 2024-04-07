import React, { useContext } from "react";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";
import Profile from "../../screens/home/Profile";
import Account from "../../screens/home/Account";
import Support from '../../screens/home/Support';

export default SettingsScreen = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

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
