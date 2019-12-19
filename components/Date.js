import { Ionicons } from "@expo/vector-icons";
import { Component, default as React } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class Date extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: "Show date picker"
    };
  }

  show = () => {
    this.setState({
      show: true
    });
  };

  hide = () => {
    this.setState({
      show: false
    });
  };

  handleDatePicked = date => {
    console.log(Object.getPrototypeOf(date), date.toDateString());
    this.setState({
      date: date.toDateString()
    });
    this.hide();
  };

  render() {
    const { date } = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.show();
              }}
            >
              <Text style={styles.titleText}>
                {date === "" ? "Show date picker" : date.toString()}
              </Text>
              <Ionicons
                style={styles.arrow}
                name="ios-arrow-down"
                size={16}
                color="#ff6363"
              />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.show}
              onConfirm={this.handleDatePicked}
              onCancel={this.hide}
            />
          </View>
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
    paddingLeft: 25,
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
