import { SignInScreen } from "./src/screens";
import React, { Component } from "react";
import { Text, View } from "react-native";
import AppStyles from "./src/styles/AppStyles";

export default class App extends Component {
  render() {
    return (
      <View styles={AppStyles.container}>
        <SignInScreen />
        <Text>View</Text>
      </View>
    );
  }
}
