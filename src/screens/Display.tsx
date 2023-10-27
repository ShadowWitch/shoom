import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { ProtectedScreen } from "../components/ProtectedScreen";
import {
    DeviceInfoScreen,
    PropsDeviceInfo,
} from "../components/DeviceInfoScreen";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> { }

export const Display = ({ route, navigation }: Props) => {
    const { params } = route;

    return (
        <View
            style={{
                // backgroundColor: "black",
                flex: 1,
            }}
        >
            {/* <ProtectedScreen /> */}

            {/* <DeviceInfoScreen {...(params as PropsDeviceInfo)} /> */}
        </View>
    );
};
