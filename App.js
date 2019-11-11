import { SignInScreen, SignUpScreen } from "./src/screens";
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./src/styles/AppStyles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInScreen />
      </View>
    );
  }
}
