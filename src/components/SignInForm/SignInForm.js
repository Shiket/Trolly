import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../../styles/AppStyles";

const SignInForm = props => {
  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholderTextColor="#E4FFF9"
        label="Email"
        placeholder="Email"
      />

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#E4FFF9"
        style={styles.formInput}
        label="Password"
        placeholder="Password"
      />

      <View style={styles.buttonsWrapper}>
        <Text style={styles.button}>Sign in!</Text>
      </View>
    </View>
  );
};
export default SignInForm;
