import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Button } from "./Button";

interface Prueba {
  isPlaying: string;
}

export const ProtectedScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Video
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
        source={require("../../assets/videos/demo.mp4")}
        rate={1.0}
        volume={1.0}
        // isMuted={false}
        isMuted={true}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        useNativeControls={false}
      />
    </View>
  );
};
