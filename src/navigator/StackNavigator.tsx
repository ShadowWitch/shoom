import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { DeviceScreen } from "../screens/DeviceScreen";
import { Display } from "../screens/Display";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Display" component={Display} />
      <Stack.Screen name="DeviceScreen" component={DeviceScreen} />
    </Stack.Navigator>
  );
};
