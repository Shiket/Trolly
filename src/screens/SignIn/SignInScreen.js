import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";

export const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello</Text>
      <SignInForm />
    </View>
  )
}