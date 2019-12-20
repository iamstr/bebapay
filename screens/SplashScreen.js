import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// const onPress = count => {
//   setCount(count + 1);
// };
const SplashScreen = props => {
  return (
    <ImageBackground
      source={require("../images/bg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.titleText}> Touch Here </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 300,
    marginBottom: 10,
    marginTop: 500,
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
    fontWeight: "bold"
  },

  titleText2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
});
export default SplashScreen;
