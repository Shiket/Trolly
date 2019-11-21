import React from "react";
import { createAppContainer } from "react-navigation";
import NavigationStack from "./NavigationConfig";

const Navigator = () => {
  const AppNavigation = createAppContainer(NavigationStack);

  return <AppNavigation />;
};
export default Navigator;
