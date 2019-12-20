import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Buttons = props => {
  return (
    <LinearGradient
      colors={["rgba(0,255,193,1)", "rgba(0,236,255,1)"]}
      style={styles.gradient}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigate;
        }}
      >
        <Text style={styles.titleText}> {props.title} </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 15,

    borderRadius: 4
  },
  second: {
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    width: "75%",
    borderColor: "#ff6363",
    borderWidth: 2,
    borderRadius: 4
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },

  titleText2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  gradient: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    //marginTop: 50,
    width: 300,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 70
  }
});

export default Buttons;
