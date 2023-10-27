import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { StackScreenProps } from "@react-navigation/stack";
import { useKeepAwake } from "expo-keep-awake";

interface Props extends StackScreenProps<any, any> { }

export const ProtectedScreen = ({ navigation, route }: Props) => {
    useKeepAwake();

    return (
        <TouchableOpacity
            style={{
                flex: 1,
            }}
            onPress={() =>
                navigation.navigate("DeviceInfoScreen", { ...route.params })
            }
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                <Video
                    style={{
                        flex: 1,
                    }}
                    source={require("../../assets/videos/demo.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode={ResizeMode.COVER}
                    shouldPlay
                    isLooping
                    useNativeControls={false}
                />
            </View>
        </TouchableOpacity>
    );
};
