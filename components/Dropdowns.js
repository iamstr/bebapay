import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
export default class Dropdowns extends React.Component {
  state = {
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button onPress={this._openMenu}>{this.props.travel}</Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />

            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </Provider>
    );
  }
}
