import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
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

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#E4FFF9"
        label="Repeat passowrd"
        placeholder="Repeat password"
      />

      <View style={styles.buttonsWrapper}>
        <Text style={styles.button}>Sign in!</Text>
        <Text style={styles.button}>Sign up!</Text>
      </View>
    </View>
  );
};

export default SignInForm;
