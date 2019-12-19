import React, { Component } from "react";
import { Picker, StyleSheet, View } from "react-native";

export default class Pickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Java"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          mode="dialog"
          style={{ width: 100 }}
          selectedValue={this.state.language}
          onValueChange={lang => this.setState({ language: lang })}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 15,
    marginHorizontal: 10,
    borderColor: "#ecf0f1"
  }
});
