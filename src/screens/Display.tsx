import React from "react";
import { View, Text } from "react-native";
import { ProtectedScreen } from "../components/ProtectedScreen";
import { DeviceInfoScreen } from "../components/DeviceInfoScreen";

export const Display = () => {
  return (
    <View
      style={{
        // backgroundColor: "black",
        flex: 1,
      }}
    >
      <ProtectedScreen />
      {/* <DeviceInfoScreen /> */}
    </View>
  );
};
