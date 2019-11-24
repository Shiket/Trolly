import React, { useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import {
  NotAuthenticatedStack,
  NotAuthenticatedStackConfig,
  AuthenticatedStack,
  AuthenticatedStackConfig
} from "./NavigationConfig";
import { withFirebaseHOC } from "../../firebase/";
import { createStackNavigator } from "react-navigation-stack";

const Navigator = props => {
  const [user, setUser] = useState("");

  console.debug(AuthenticatedStack);

  useEffect(() => {
    props.firebase.checkUserAuth(user => {
      setUser(user);
    });
  });

  const AppNavigation = user
    ? createAppContainer(
        createStackNavigator(AuthenticatedStack, AuthenticatedStackConfig)
      )
    : createAppContainer(
        createStackNavigator(NotAuthenticatedStack, NotAuthenticatedStackConfig)
      );

  return <AppNavigation />;
};
export default withFirebaseHOC(Navigator);
