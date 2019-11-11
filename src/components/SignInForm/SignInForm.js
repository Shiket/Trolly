import React from "react";
import { TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../../styles/AppStyles";

const SignInForm = () => {
  return (
    <KeyboardAvoidingView>
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
        <Text style={styles.button}>Sign up!</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInForm;
