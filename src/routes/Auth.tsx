import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import pages;
import TabNavConfig from "./config/TabNavConfig";

const AppStack = createStackNavigator();

const Auth = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tab" component={TabNavConfig} />
    </AppStack.Navigator>
  );
};

export default Auth;
