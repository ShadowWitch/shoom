import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { DeviceScreen } from "../screens/DeviceScreen";
import { Display } from "../screens/Display";
import { ProtectedScreen } from "../components/ProtectedScreen";
import { DeviceInfoScreen } from "../components/DeviceInfoScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DeviceScreen" component={DeviceScreen} />
      <Stack.Screen name="Display" component={Display} />

      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Stack.Screen name="DeviceInfoScreen" component={DeviceInfoScreen} />
    </Stack.Navigator>
  );
};
