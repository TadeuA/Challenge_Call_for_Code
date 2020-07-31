import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//import pages;
import Open from "./Open";
import Auth from "./Auth";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#7A7A7A" }}>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Open" component={Open} />
            <AppStack.Screen name="Auth" component={Auth} />
          </AppStack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
