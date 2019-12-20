import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class PickBusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#ff6363" barStyle="light-content" />
        <View style={styles.travel}>
          <Text style={styles.search}>Pick Bus</Text>
          <View style={styles.detail}>
            {/* travels */}
            <View style={styles.info}>
              <View style={styles.ticket}>
                <Text style={styles.title}>FROM</Text>
                <Text style={styles.sub}>Mombasa</Text>
              </View>
              <Image
                source={require("../images/Rectangle19.png")}
                style={styles.image}
              />
              <View style={styles.ticket}>
                <Text style={styles.title}> TO</Text>
                <Text style={styles.sub}>Nairobi</Text>
              </View>
            </View>
            {/* end of travels */}
          </View>
        </View>
        <View style={styles.box}>
          <ScrollView>
            <TouchableOpacity style={styles.card}>
              <View style={styles.rounded}>
                <Image
                  source={require("../images/bg.jpg")}
                  style={styles.image}
                />
              </View>

              <View>
                <Text></Text>
                <Text></Text>
              </View>
              <View>
                <Text></Text>
                <Text></Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginLeft: 20,
    height: "40%",
    backgroundColor: "#ff6363",
    width: "100%"
  },
  ticket: { marginBottom: 50 },
  title: { fontWeight: "bold" },
  sub: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    fontStyle: "italic"
  },
  image: { marginTop: 5, width: 50, height: 50 },
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
  passengers: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    paddingBottom: 20
  },
  box: {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    height: "70%",
    top: " 30%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderTopEndRadius: 70
  },
  return: {
    backgroundColor: "#ff5050",
    height: "100%",
    width: "50%",
    backgroundColor: "#FFF",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  one: { fontWeight: "bold" },
  returns: {
    width: "50%",
    left: "50%",
    bottom: 50,
    height: "100%",
    borderLeftWidth: 6,
    backgroundColor: "#ff6363",
    borderLeftColor: "#ff5050",
    padding: 20
  },
  two: { fontWeight: "bold", color: "#fff" },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  rounded: { borderRadius: 25 }
});
