import { SignInScreen, SignUpScreen } from "./src/screens";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const NavigationStack = createStackNavigator(
  {
    Home: SignInScreen,
    Landing: SignUpScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(NavigationStack);
