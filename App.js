import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import PickBusScreen from "./screens/PickBusScreen";
import SplashScreen from "./screens/SplashScreen";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      Home: Homescreen,
      PickBus: PickBusScreen
    },
    {
      initialRouteName: "Splash"
    }
  )
);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
