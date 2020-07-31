import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    paddingVertical: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
  },
  containerForm: {
    width: "85%",

    justifyContent: "space-between",
    alignItems: "center",
    height: 250,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,

    width: width - 40,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#0F4C75",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  button: {
    borderWidth: 2,
    marginTop: 16,
    width: 200,
    height: 50,

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
    backgroundColor: "#0F4C75",
  },
  buttonText: {
    fontSize: 25,
    color: "#FFF",
  },
});

export default styles;
