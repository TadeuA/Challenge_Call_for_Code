import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import pages;
import Init from "../pages/Init";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppStack = createStackNavigator();

const Open = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Init" component={Init} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Register" component={Register} />
    </AppStack.Navigator>
  );
};

export default Open;
