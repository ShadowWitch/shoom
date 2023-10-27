import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { StackNavigator } from "./src/navigator/StackNavigator";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar hidden />

      <NavigationContainer>
        <StackNavigator />
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
