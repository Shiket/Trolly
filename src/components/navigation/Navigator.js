import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import NavigationStack from "./NavigationConfig";

const Navigator = () => {
  const AppNavigation = createAppContainer(NavigationStack);

  return <AppNavigation />;
};
export default Navigator;
