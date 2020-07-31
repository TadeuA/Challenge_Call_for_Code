import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const { width, height } = Dimensions.get("window");

export default function Init() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  function navigateToRegister() {
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          height: height / 1.5,
          backgroundColor: "#C4C4C4",
        }}
      />
      <View style={styles.content}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#0F4C75" }]}
            onPress={navigateToRegister}
          >
            <Text style={[styles.buttonText, { color: "#FFF" }]}>
              Crie a sua conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FFF" }]}
            onPress={navigateToLogin}
          >
            <Text style={[styles.buttonText, { color: "#0F4C75" }]}>
              Faça seu login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
