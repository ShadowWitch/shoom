import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { Phone } from "../types/Phone";

export const DeviceScreen = () => {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  const db: Phone[] = require("../db/db.json");

  const dbParser = db.map((e, index) => e.name);

  return (
    <View style={{ ...styleScreen.fondo }}>
      <Image
        style={{
          height: height * 0.06,
          width: width,
          marginTop: top + height * 0.05,
          //   backgroundColor: "red",
        }}
        // placeholder={blurhash}
        source={require("../../assets/images/logo.svg")}
        contentFit="contain"
        transition={1000}
      />

      <View
        style={{
          //   backgroundColor: "yellow",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 0,
          flex: 1,
        }}
      >
        <Select
          textColor="black"
          text="Seleccione un Telefono"
          width={width * 0.8}
          background="white"
          data={dbParser}
        />

        <Button
          onPress={() => console.log("qweqwe")}
          text="Continuar"
          width={width * 0.5}
          marginTop={height * 0.1}
        />
      </View>
    </View>
  );
};

const styleScreen = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    flex: 1,
  },
});
