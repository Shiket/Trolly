import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../styles/AppStyles";
import { withFirebaseHOC } from "../../firebase";
import SignOutButton from "../../components/Main/SignOutButton";

export const MainScreen = props => {
  console.log(props);
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
        <SignOutButton />
      </ImageBackground>
    </View>
  );
};
