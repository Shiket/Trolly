import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";

export const SignInScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.logoWrapper}>
        <Image source={require("../../../assets/wtfLogo5.png")} style={styles.logoImg} />
      </View>

      <SignInForm />
    </View>
  )
}