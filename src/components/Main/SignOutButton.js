import React from "react";
import { View, Text } from "react-native";
import { withFirebaseHOC } from "../../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/AppStyles";
const SignOutButton = props => {
  return (
    <TouchableOpacity style={styles.buttonsWrapper}>
      <Text
        style={styles.signOutButton}
        onPress={() => props.firebase.signOut()}
      >
        Sign Out!
      </Text>
    </TouchableOpacity>
  );
};

export default withFirebaseHOC(SignOutButton);
