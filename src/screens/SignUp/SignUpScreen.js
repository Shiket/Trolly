import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "../../styles/AppStyles";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export const SignUpScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bg.jpg")}
        style={{
          width: null,
          height: null,
          resizeMode: "cover",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <View style={styles.logoWrapper}>
          <Image
            source={require("../../../assets/wtfLogo5.png")}
            style={styles.logoImg}
          />
        </View>

        <SignUpForm />

        <Text
          style={styles.link}
          onPress={() => props.navigation.navigate("Home")}
        >
          Have an account already? SignIn
        </Text>
        <Text style={styles.link}>Forgot password? Remind it.</Text>
      </ImageBackground>
    </View>
  );
};
