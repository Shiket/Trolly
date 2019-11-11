import React, { Component } from "react";
import { TextInput, View } from "react-native";
import styles from "../../styles/AppStyles";

const SignInForm = () => {
  return (
    <View>
      <TextInput style={styles.formInput} placeholder="Email" />
    </View>
  );
};

export default SignInForm;
