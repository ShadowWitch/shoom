import "react-native-gesture-handler";

import { StyleSheet, ScrollView } from "react-native";
import { StackNavigator } from "./src/navigator/StackNavigator";

import { NavigationContainer } from "@react-navigation/native";
import InactivityDetectionScreen from "./src/components/InactivityDetectionScreen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
        <InactivityDetectionScreen />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
