import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../../styles/AppStyles";

const SignUpForm = () => {
    return (
        <View>
            <TextInput
                style={styles.formInput}
                placeholderTextColor="#76FEC5"
                label="Username"
                placeholder="Username"
            />

            <TextInput
                style={styles.formInput}
                placeholderTextColor="#76FEC5"
                label="Email"
                placeholder="Email"
            />
            <TextInput
                style={styles.formInput}
                placeholderTextColor="#76FEC5"
                style={styles.formInput}
                label="Password"
                placeholder="Password"
            />

            <TextInput
                style={styles.formInput}
                placeholderTextColor="#76FEC5"
                style={styles.formInput}
                label="Repeat password"
                placeholder="Repeat password"
            />

            <View style={styles.buttonsWrapper}>
                <Text style={styles.button}>Sign Up!</Text>
            </View>
        </View>
    );
};
export default SignUpForm;
