import React, { Component } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Buttons from "../components/Buttons";
import Card from "../components/Card";
import Date from "../components/Date";
import Pickers from "../components/Picker";
import Switch from "../components/Switch";
const colors = ["#5C6BC0", "#009688", "#F44336"];
class Homescreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: "",
      visible: false
    };
  }
  _alert = trip => {
    Alert.alert(
      "Alert Title",
      trip,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#ff3300" barStyle="light-content" />
        <View style={styles.travel}>
          <Text style={styles.search}>Search Buses</Text>
          <View style={styles.detail}>
            {/* travels */}
            <View style={styles.info}>
              <View style={styles.ticket}>
                <Text style={styles.title}>Departure From</Text>
                <Text style={styles.sub}>Mombasa</Text>
              </View>

              <View style={styles.ticket}>
                <Text style={styles.title}>Destination To</Text>
                <Text style={styles.sub}>Nairobi</Text>
              </View>
            </View>
            {/* end of travels */}

            <Image source={require("../images/1–1.png")} style={styles.image} />
          </View>
        </View>

        <View style={styles.book}>
          <View style={styles.stack}>
            <View // last card
              style={{
                width: 310,
                height: 110,
                position: "absolute",
                zIndex: 1,
                bottom: 30,
                left: 20,
                backgroundColor: "#fff", // Red
                opacity: 0.3,
                transform: [{ scale: 0.8 }],
                borderRadius: 10
              }}
            />
            <View // second card
              style={{
                width: 310,
                height: 110,
                position: "absolute",
                zIndex: 2,
                bottom: 15,
                left: 20,
                backgroundColor: "#fff", // Green
                opacity: 0.6,
                transform: [{ scale: 0.9 }],
                borderRadius: 10
              }}
            />
            <View // frontmost card
              style={{
                width: 330,
                height: 110,
                position: "absolute",
                zIndex: 3,
                bottom: 0,
                left: 10,
                shadowColor: "#ff6363",
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
              <Text style={styles.header}>Location</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Pickers />
                <Pickers />
              </View>
            </View>
          </View>
          <ScrollView>
            <Card info="Time">
              <Date />
            </Card>
            <Card info="Passengers">
              <View style={styles.passengers}>
                <Pickers />
                <Pickers />
              </View>
            </Card>
            <Switch>
              <View style={styles.box}>
                <TouchableOpacity
                  style={styles.return}
                  onPress={() => {
                    this._alert("One way Trip");
                  }}
                >
                  <Text style={styles.one}>One Way Trip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.returns}
                  onPress={() => {
                    this._alert("Two way Trip");
                  }}
                >
                  <Text style={styles.two}>Two Way Trip</Text>
                </TouchableOpacity>
              </View>
            </Switch>
            <Buttons
              title="PROCEED TO BOOKING"
              navigate={this.props.navigation.navigate("PickBus")}
            />
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
    backgroundColor: "#ff3300",
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

    height: "100%"
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
  two: { fontWeight: "bold", color: "#fff" }
});
export default Homescreen;
