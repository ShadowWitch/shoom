import React from "react";
import { Image } from "expo-image";
import {
  useWindowDimensions,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const DeviceInfoScreen = () => {
  const { top } = useSafeAreaInsets();

  const { width, height } = useWindowDimensions();

  const arr = [
    1, 2, 2, 123, 123, 12, 31, 231, 23, 123, 12312, 3, 123, 123, 123,
  ];

  return (
    <View
      style={{
        // backgroundColor: "yellow",
        flex: 1,
      }}
    >
      <ScrollView>
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

        <Image
          style={{
            height: height * 0.1,
            width: width,
            marginTop: height * 0.02,
          }}
          source={require("../../assets/images/curacao-logo.webp")}
          contentFit="contain"
          transition={1000}
        />

        <Image
          style={{
            height: height * 0.15,
            width: width,
          }}
          source={require("../../assets/images/telefono.png")}
          contentFit="contain"
          transition={1000}
        />

        <Text
          style={{
            //   backgroundColor: "red",
            marginTop: 20,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "500",
          }}
        >
          HONOR MAGIC5 LITE
        </Text>

        <View
          style={{
            // backgroundColor: "red",
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              height: height * 0.07,
              width: 50,
              //   marginTop: height * 0.05,
              // backgroundColor: "yellow",
            }}
            // placeholder={blurhash}
            source={require("../../assets/images/example/cpu.png")}
            contentFit="contain"
            transition={1000}
          />
          <View
            style={{
              // backgroundColor: "green",
              marginHorizontal: width * 0.03,
            }}
          >
            <Text
              style={{
                fontWeight: "300",
              }}
            >
              Procesador
            </Text>
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              PRUeb PRUeb PRUeb PRUeb
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          //   backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          width: width,

          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            // borderRadius: 10,

            height: height * 0.1,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 15,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "white",
              marginHorizontal: 10,
              fontSize: 15,
            }}
          >
            Precio Normal
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            L. 9,999.00
          </Text>
        </View>
      </View>
    </View>
  );
};
