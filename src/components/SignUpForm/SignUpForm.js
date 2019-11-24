import React, { useState } from "react";
import { TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../../styles/AppStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
        label="Username"
        placeholder="Username"
        value={username}
        onChangeText={username => setUsername(username)}
      />

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
        style={styles.formInput}
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />

      <TextInput
        style={styles.formInput}
        placeholderTextColor="#76FEC5"
        style={styles.formInput}
        label="Repeat password"
        placeholder="Repeat password"
        value={rePassword}
        onChangeText={rePassword => setRePassword(rePassword)}
      />

      <TouchableOpacity style={styles.buttonsWrapper}>
        <Text onPress={() => console.debug("eloelo")} style={styles.button}>
          Sign Up!
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default SignUpForm;
