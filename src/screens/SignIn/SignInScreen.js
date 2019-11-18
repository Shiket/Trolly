import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";

export const SignInScreen = props => {
  console.debug(props);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bg.jpg")}
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: "center"
        }}
      >
        <Text style={styles.title}>Trolly</Text>

        <SignInForm />

        <Text
          style={styles.link}
          onPress={() => props.navigation.navigate("Landing")}
        >
          Don't have an account? Create it!
        </Text>
        <Text style={styles.link}>Forgot password? Remind it.</Text>
      </ImageBackground>
    </View>
  );
};
