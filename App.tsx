import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import {
  Saira_400Regular,
  Saira_700Bold,
  useFonts,
} from "@expo-google-fonts/saira";

import Routes from "./src/routes";

export default function App() {
  /*if(!fontsLoaded){
		return <AppLoading/>
  }*/

  const [fontsLoaded] = useFonts({
    Saira_700Bold,
    Saira_400Regular,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </>
  );
}
