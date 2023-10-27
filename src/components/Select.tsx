import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

interface Props {
  width: number;
  text: string;
  textSize?: number;
  textColor?: string;
  background?: string;

  data: string[];
}

export const Select = ({
  text = "example",
  width = 10,
  textColor = "white",
  textSize,
  background = "white",
  data,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  return (
    <View
      style={{
        width: width,
      }}
    >
      <Text
        style={{
          fontSize: textSize,
          color: textColor,
          marginBottom: 5,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>

      <ModalDropdown
        style={{
          backgroundColor: background,
          //   padding: 10,
          paddingHorizontal: 10,
          justifyContent: "center",
          height: 40,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#F0F0F0",
        }}
        options={data}
        defaultValue={selectedItem}
        onSelect={setSelectedItem}
        dropdownStyle={{
          width: width,
          borderWidth: 1,
          borderColor: "lightgray",
          borderRadius: 8,
          backgroundColor: "white",
        }}
        dropdownTextStyle={{
          color: "black",
          borderColor: "black",
          paddingVertical: 15,
          fontSize: 15,
        }}
        // dropdownListProps={{
        //   borderColor: "black",
        //   borderBottomColor: "black",
        // }}
      />
    </View>
  );
};
