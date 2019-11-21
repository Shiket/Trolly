import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";

export const SignInScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/bg.jpg')}
        style={{ width: null, height: null, resizeMode: "cover", flex:1, justifyContent:'center' }}>

        <View style={styles.logoWrapper}>
          <Image source={require("../../../assets/wtfLogo5.png")} style={styles.logoImg} />
        </View>

        <SignInForm />

        <Text style={styles.link}
          onPress={() => props.navigation.navigate("Landing")}>
          Don't have an account? Create it!
        </Text>
        <Text style={styles.link}>Forgot password? Remind it.</Text>

      </ImageBackground>
    </View>
  );
};