import React from "react";
import { StyleSheet, Text, View } from "react-native";
class Switch extends React.Component {
  render() {
    return (
      <View // frontmost card
        style={{
          width: 330,
          height: 50,
          marginTop: 20,
          marginLeft: 50,
          marginBottom: 50,
          shadowColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 9
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,

          elevation: 19,
          backgroundColor: "#fff", // Blue
          opacity: 1,
          transform: [{ scale: 1.0 }],
          borderRadius: 15
        }}
      >
        <Text style={styles.header}>{this.props.info}</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    // backgroundColor: "#ff6363",
    // alignItems: "flex-start",
    width: "100%"
  },
  travel: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40%",
    backgroundColor: "#ff6363",
    width: "100%"
  },
  search: { color: "#fff", fontSize: 25, fontWeight: "bold", marginTop: 15 },
  detail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 20
  },
  ticket: { marginBottom: 50 },
  title: {},
  sub: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  image: { marginTop: 5 },
  book: {
    backgroundColor: "#fff",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "60%",
    justifyContent: "flex-start"
    // alignItems: "center"
  },
  stack: { marginTop: 90, marginLeft: 40 },
  header: {
    color: "#ff6363",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    marginTop: 10
  },
  titleText: {
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: "bold"
  },
  button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },
  arrow: { paddingTop: 15, paddingLeft: 10 }
});
export default Switch;
