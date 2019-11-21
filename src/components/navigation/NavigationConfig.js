import { createStackNavigator } from "react-navigation-stack";
import { SignInScreen, SignUpScreen } from "../../screens";
export default NavigationStack = createStackNavigator(
  {
    Home: SignInScreen,
    Landing: SignUpScreen
  },
  {
    headerMode: "none"
  }
);
