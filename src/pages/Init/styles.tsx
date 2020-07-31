import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    height: "70%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 2,

    width: 250,
    height: 60,

    alignItems: "center",
    justifyContent: "center",

    borderColor: "#0F4C75",
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: 25,
  },
});

export default styles;
