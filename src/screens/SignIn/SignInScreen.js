import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";

export class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trolly</Text>
        <SignInForm />
      </View>
    );
  }
}
