import { SignInScreen, SignUpScreen } from "./src/screens";
import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./src/styles/AppStyles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/bg.jpg')} style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'center'
        }}>
          <SignInScreen />
        </ImageBackground>
      </View>
    );
  }
}
