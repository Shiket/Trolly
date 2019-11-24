import React, { useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import NavigationStack from "./NavigationConfig";
import { withFirebaseHOC } from "../../firebase/";

const Navigator = props => {
  const [user, setUser] = useState("");

  useEffect(() => {
    props.firebase.checkUserAuth(user => {
      setUser;
    });
  });

  const AppNavigation = createAppContainer(NavigationStack);

  return <AppNavigation />;
};
export default withFirebaseHOC(Navigator);
