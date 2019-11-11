import React from "react";
import { TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../../styles/AppStyles";

const SignInForm = () => {
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

      <Text style={styles.link}>Don't have an account? Create it!</Text>
      <Text style={styles.link}>Forgot password? remaind it</Text>
    </View>
  );
};
export default SignInForm;
