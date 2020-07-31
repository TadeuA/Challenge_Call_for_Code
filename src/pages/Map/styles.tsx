import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },

  mapContainer: {
    flex: 1,
    width: "100%",

    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarker: {
    width: 90,
    height: 80,
  },
  containerButtonMap: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 16,
    height: "100%",
    maxHeight: 100,
  },
  buttonMap: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#0F4C75",
    justifyContent: "center",
    alignItems: "center",
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
