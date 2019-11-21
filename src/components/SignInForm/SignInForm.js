import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../../styles/AppStyles";

const SignInForm = () => {
  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
        label="Email"
        placeholder="Email"
      />

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
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
