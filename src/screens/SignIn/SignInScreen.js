import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/AppStyles";
import SignInForm from "../../components/SignInForm/SignInForm";
import { withNavigation } from "react-navigation";

export const SignInScreen = props => {
  console.debug(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trolly</Text>

      <SignInForm />

      <Text
        style={styles.link}
        onPress={() => props.navigation.navigate("Landing")}
      >
        Don't have an account? Create it!
      </Text>
      <Text style={styles.link}>Forgot password? Remind it.</Text>
    </View>
  );
};
