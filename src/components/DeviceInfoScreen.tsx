import React, { useEffect } from "react";
import { Image } from "expo-image";
import { useWindowDimensions, View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatMoney } from "../utils/formayMoney";
import { StackScreenProps } from "@react-navigation/stack";

export interface PropsDeviceInfo extends StackScreenProps<any, any> {}

export const DeviceInfoScreen = ({ route, navigation }: PropsDeviceInfo) => {
  const { params } = route;

  const { top } = useSafeAreaInsets();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ProtectedScreen", { ...params });
    }, 30000);
  }, []);

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
          {params!.phone.name}
        </Text>

        <View
          style={{
            marginBottom: height * 0.12,
          }}
        >
          <View
            style={{
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
              }}
              source={require("../../assets/images/example/cpu.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
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
                {params!.phone.features.cpu}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/ram.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Memoria RAM
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.ram}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/camera.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Camaras
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.camera.toString()}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/sdcard.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Almacenamiento
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.storage.toString()}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/icondevicewhite.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Pantalla
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.display}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/red.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Conexiones
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.connection}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/bateria.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Bateria
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.battery}
              </Text>
            </View>
          </View>

          <View
            style={{
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
              }}
              source={require("../../assets/images/example/usb.png")}
              contentFit="contain"
              transition={1000}
            />
            <View
              style={{
                marginHorizontal: width * 0.03,
              }}
            >
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                Puertos
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {params!.phone.features.ports}
              </Text>
            </View>
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
            L. {formatMoney(params!.phone.regular_price)}
          </Text>
        </View>
      </View>
    </View>
  );
};
