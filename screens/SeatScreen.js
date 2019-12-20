import React, { Component } from "react";
import { Text, View } from "react-native";
const data = [
  {
    name: "a1",
    position: 1,
    status: "booked",
    type: "regular"
  },
  {
    name: "a2",
    position: 2,
    status: "booked",
    type: "regular"
  },
  {
    name: "a3",
    position: 3,
    status: "available",
    type: "regular"
  },
  {
    name: "a4",
    position: 4,
    status: "booked",
    type: "regular"
  },

  {
    name: "b1",
    position: 5,
    status: "available",
    type: "VIP"
  },
  {
    name: "b2",
    position: 6,
    status: "booked ",
    type: "VIP"
  },
  {
    name: "b3",
    position: 7,
    status: "available",
    type: "regular"
  },
  {
    name: "b4",
    position: 8,
    status: "booked",
    type: "regular"
  },

  {
    name: "c1",
    position: 9,
    status: "available",
    type: "regular"
  },
  {
    name: "c2",
    position: 10,
    status: "booked ",
    type: "regular"
  },
  {
    name: "c3",
    position: 11,
    status: "available",
    type: "regular"
  },
  {
    name: "c4",
    position: 12,
    status: "booked",
    type: "regular"
  },

  {
    name: "d1",
    position: 13,
    status: "available",
    type: "regular"
  },
  {
    name: "d2",
    position: 14,
    status: "booked ",
    type: "regular"
  },
  {
    name: "d3",
    position: 15,
    status: "available",
    type: "regular"
  },
  {
    name: "d4",
    position: 16,
    status: "booked",
    type: "regular"
  },
  {
    name: "e1",
    position: 17,
    status: "available",
    type: "regular"
  },
  {
    name: "e2",
    position: 18,
    status: "booked ",
    type: "regular"
  },
  {
    name: "e3",
    position: 19,
    status: "available",
    type: "regular"
  },
  {
    name: "e4",
    position: 20,
    status: "booked",
    type: "regular"
  },
  {
    name: "f1",
    position: 21,
    status: "available",
    type: "regular"
  },
  {
    name: "f2",
    position: 22,
    status: "booked ",
    type: "regular"
  },
  {
    name: "f3",
    position: 23,
    status: "available",
    type: "regular"
  },
  {
    name: "f4",
    position: 24,
    status: "booked",
    type: "regular"
  },
  {
    name: "g1",
    position: 25,
    status: "available",
    type: "regular"
  },
  {
    name: "g2",
    position: 26,
    status: "booked ",
    type: "regular"
  },
  {
    name: "g3",
    position: 27,
    status: "available",
    type: "regular"
  },
  {
    name: "g4",
    position: 28,
    status: "booked",
    type: "regular"
  },
  {
    name: "h1",
    position: 29,
    status: "available",
    type: "regular"
  },
  {
    name: "h2",
    position: 30,
    status: "booked ",
    type: "regular"
  },
  {
    name: "h3",
    position: 31,
    status: "available",
    type: "regular"
  },
  {
    name: "h4",
    position: 32,
    status: "booked",
    type: "regular"
  }
];

export default class SeatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <View>
        <Text> SeatScreen </Text>
      </View>
    );
  }
}
