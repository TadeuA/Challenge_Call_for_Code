import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  camera: {
    minHeight: "100%",
  },
  burguerButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    left: 16,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#0F4C75",
    width: 40,
  },
});

export default styles;
