import { createStackNavigator } from "react-navigation-stack";
import { SignInScreen, SignUpScreen, MainScreen } from "../../screens";

export const NotAuthenticatedStack = {
  SignIn: SignInScreen,
  SignUp: SignUpScreen
};

export const NotAuthenticatedStackConfig = {
  headerMode: "none",
  initialRouteName: "SignIn"
};

export const AuthenticatedStack = {
  Home: MainScreen
};

export const AuthenticatedStackConfig = {
  headerMode: "none"
};
