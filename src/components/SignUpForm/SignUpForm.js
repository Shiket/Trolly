import React, { useState } from "react";
import { TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../../styles/AppStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withFirebaseHOC } from "../../firebase";

const SignUpForm = props => {
  const handleSignup = async () => {
    try {
      const response = await props.firebase.signupWithEmail(email, password);

      if (response.user.uid) {
        const { uid } = response.user;
        const userData = { email, username, uid };
        await props.firebase.addUserToDb(userData);
      }

      clearForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setRePassword("");
    setError("");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

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

      {error ? <Text>{error}</Text> : null}
      <TouchableOpacity style={styles.buttonsWrapper}>
        <Text onPress={() => handleSignup()} style={styles.button}>
          Sign Up!
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default withFirebaseHOC(SignUpForm);
