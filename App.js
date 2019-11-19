import { SignInScreen, SignUpScreen } from "./src/screens";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const NavigationStack = createStackNavigator({
  Home: SignInScreen,
  Landing: SignUpScreen
});

export default createAppContainer(NavigationStack);
