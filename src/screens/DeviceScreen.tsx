import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Phone } from "../types/Phone";
import RNPickerSelect from "react-native-picker-select";

import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

interface DbParser {
    label: string;
    value: string;
}

interface Props extends StackScreenProps<any, any> { }

export const DeviceScreen = ({ navigation }: Props) => {
    const db: Phone[] = require("../db/db.json");

    const { width, height } = useWindowDimensions();
    const [selectedValue, setSelectedValue] = useState<Phone | null>(db[0]);
    const { top } = useSafeAreaInsets();

    const dbParser: DbParser[] = db.map((e, index) => ({
        label: e.name,
        value: e.id,
    }));

    const onChangeSelectItem = (itemSelected: Phone | null) => {
        setSelectedValue(itemSelected);
    };

    return (
        <View style={{ ...styleScreen.fondo }}>
            <Image
                style={{
                    height: height * 0.06,
                    width: width,
                    marginTop: top + height * 0.05,
                }}
                source={require("../../assets/images/logo.svg")}
                contentFit="contain"
                transition={1000}
            />

            <View
                style={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: 0,
                    flex: 1,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 15,
                            marginBottom: 5,
                        }}
                    >
                        Seleccione una opción
                    </Text>
                    <View
                        style={{
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: "#c3c1c1",
                        }}
                    >
                        <Picker
                            style={{
                                width: width * 0.6,
                                justifyContent: "center",

                                paddingHorizontal: 10,
                                height: 40,
                            }}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, indexValue) => {
                                onChangeSelectItem(itemValue);
                            }}
                        >
                            {db.map((e, index) => (
                                <Picker.Item label={e.name} value={e} key={e.id} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <Button
                    onPress={() =>
                        navigation.navigate("ProtectedScreen", {
                            phone: selectedValue,
                        })
                    }
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedValue: {
        fontSize: 18,
        marginTop: 20,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        color: "black",
    },
});
