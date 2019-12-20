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
        <StatusBar backgroundColor="#ff3300" barStyle="light-content" />
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
            <View style={styles.container}>
              <Text style={styles.avail}>Available Bus</Text>
              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View style={styles.rounded}>
                  <Image
                    source={require("../images/bg.jpg")}
                    style={styles.image}
                  />
                </View>

                <View style={styles.left}>
                  <Text style={styles.time}>10.00PM</Text>
                  <Text style={styles.name}>Shuttle Bus</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.price}>KES 2,000</Text>
                  <Text style={styles.seat}>10 Seats Available</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginLeft: 20,
    height: "40%",
    backgroundColor: "#ff3300",
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

  box: {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    height: "70%",
    top: " 30%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopEndRadius: 40
  },
  avail: { fontSize: 25, fontWeight: "bold", marginTop: 15, marginLeft: 30 },
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

    elevation: 5,
    borderRadius: 25,
    height: 100,
    zIndex: 3,
    marginTop: 30,
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  },
  rounded: {
    borderRadius: 50 / 2,
    overflow: "hidden",
    height: 50,
    width: 50,
    marginTop: 5
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
    width: "100%"
  },
  time: {
    color: "#ff3300",
    fontFamily: "Roboto",
    fontSize: 17,
    paddingVertical: 10,
    paddingRight: 40
  },
  price: {
    color: "#d1cfcf",
    fontFamily: "Roboto",
    fontSize: 17,
    paddingVertical: 10,
    paddingLeft: 35
  },
  seat: { fontStyle: "italic" },
  name: { fontStyle: "italic", paddingRight: 40 }
});
