import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Keyboard, View } from "react-native";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import QrCode from "../../pages/QrCode";
import Map from "../../pages/Map";

export default function TabNavConfig() {
  const [visibleTab, setVisibleTab] = useState(true);

  Keyboard.addListener("keyboardDidHide", (event) => {
    setVisibleTab(true);
  });
  Keyboard.addListener("keyboardDidShow", (event) => {
    setVisibleTab(false);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Sections"
        screenOptions={({ route }) => ({
          tabBarVisible: visibleTab,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let IconComponent;

            if (route.name === "Map") {
              return <Icon name="map-marker-outline" size={25} color={color} />;
            } else if (route.name === "QrCode") {
              return <Icon name="qrcode-scan" size={25} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#C4C4C4",
          inactiveBackgroundColor: "#FFF",
          activeBackgroundColor: "#FFF",
          showLabel: true,
          tabStyle: styles.tab,
          style: styles.general,
          labelStyle: styles.label,
          iconStyle: styles.icon,
          labelPosition: "beside-icon",
        }}
      >
        <Tab.Screen name="QrCode" component={QrCode} />

        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    marginBottom: 14,
  },
  general: {
    height: 75,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
  },
  icon: {},
});
