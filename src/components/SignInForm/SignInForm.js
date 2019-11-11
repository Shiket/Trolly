import React, { Component } from "react";
import { TextInput, View } from "react-native";
import styles from "../../styles/AppStyles";

export default class SignInForm extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.formInput} placeholder="Email" />
      </View>
    );
  }
}
