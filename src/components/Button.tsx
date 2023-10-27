import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  text: string;
  width?: number;
  height?: number;
  textColor?: string;

  marginTop?: number;
  marginBottom?: number;

  onPress: () => void;
}

export const Button = ({
  text = "N/A",
  height,
  width = 100,
  textColor = "white",
  marginTop = 0,
  marginBottom = 0,

  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: "black",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: width,
        justifyContent: "center",
        alignItems: "center",

        marginTop: marginTop,
        marginBottom: marginBottom,

        //   Shadows
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Text
        style={{
          fontWeight: "500",
          color: textColor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
