import { SignInScreen, SignUpScreen } from "./src/screens";
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./src/styles/AppStyles";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SignInScreen />
//       </View>
//     );
//   }
// }

const NavigationStack = createStackNavigator({
  Home: SignInScreen,
  Landing: SignUpScreen
});

export default createAppContainer(NavigationStack);
