import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableHighlight,
  Alert,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import { Input } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Qr = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [hasPermission, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [saisieCode, setSaisieCode] = useState(false);
  const [immatriculation, setImmatriculation] = useState("");
  useEffect(() => {
    async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status == "granted");
    };
  }, []);
  const handleSuccess = ({ type, data }) => {
    Alert.alert(data);

    setScanned(true);
  };
  const handleScanQr = () => {
    setScannerActive(true);
  };
  const capturer = () => {};
  if (hasPermission === null && hasPermission === false) {
    return <Text>Vous n'avez d'accès à la Camera</Text>;
  }
  return (
    <SafeAreaView className="mt-25">
      <ScrollView className="pb-2 bg-slate-200 h-full">
        <View className="mb-1 pb-1">
          {scannerActive ? (
            <View className="flex flex-col">
              <View className="flex flex-row justify-between w-full">
                <View className="items-center">
                  <Text>
                    <TouchableHighlight
                      className=" text-white px-2 py-1 rounded-md"
                      onPress={() => {
                        setScannerActive(false);
                      }}
                    >
                      <Text className="text-black py-2 rounded-md px-3 ">
                        <Ionicons
                          name="return-up-back"
                          size={24}
                          color="black"
                        />
                        &nbsp; Retourner
                      </Text>
                    </TouchableHighlight>
                  </Text>
                </View>
                <View className="pr-3">
                  <Text>
                    <TouchableHighlight
                      onPress={() => {
                        capturer("sd");
                      }}
                    >
                      <Text>
                        <MaterialCommunityIcons
                          name="camera"
                          size={24}
                          color="black"
                        />
                        &nbsp;&nbsp; Capture
                      </Text>
                    </TouchableHighlight>
                  </Text>
                </View>
              </View>
              <View className="mt-2 w-full">
                <BarCodeScanner
                  type={type}
                  barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.Qr],
                  }}
                  barCodeTypes={BarCodeScanner.Constants.BarCodeType.Qr}
                  onBarCodeScanned={scanned ? undefined : handleSuccess}
                  className="w-80 h-96"
                >
                  <TouchableOpacity
                    class="bg-blue-200 w-fit py-2 px-1"
                    onPress={() => {
                      setType(
                        type === BarCodeScanner.Constants.type.Back
                          ? BarCodeScanner.Constants.Type.Front
                          : BarCodeScanner.Constants.Type.Back
                      );
                    }}
                  ></TouchableOpacity>
                </BarCodeScanner>
              </View>
            </View>
          ) : (
            <View className="items-center">
              <Text className="items-center">
                <Text className="mr-2">
                  Veuillez scanner le Qrcode &nbsp; &nbsp;
                </Text>
              </Text>
              <View className="mt-3 mb-2 items-center">
                <TouchableHighlight
                  onPress={() => {
                    handleScanQr();
                  }}
                >
                  <View className="w-48 bg-blue-400 content-center px-4 py-5 items-center rounded-md text-white">
                    <Text className="text-white text-lg mb-4">Scanner</Text>
                    <MaterialCommunityIcons
                      name="qrcode-scan"
                      size={45}
                      color="white"
                    />
                  </View>
                </TouchableHighlight>
                <View className="mt-4 items-center">
                  <Text
                    className="text-blue-400 text-lg"
                    onPress={() => {
                      setSaisieCode(!saisieCode);
                    }}
                  >
                    [ Saisir un code ]
                  </Text>
                </View>
                {saisieCode ? (
                  <View className="w-full mt-2">
                    <Input
                      className="px-2"
                      w={{ base: "75%", md: "75%" }}
                      pl="2"
                      InputLeftElement={
                        <MaterialIcons
                          name="keyboard"
                          size={24}
                          color="gray"
                          className="pl-3"
                        />
                      }
                      placeholder="Code"
                    />
                    <View className="mt-2">
                      <Button title="Facturer" />
                    </View>
                  </View>
                ) : null}
              </View>
              <View className="mt-4">
                <Text className="text-3xl mb-5">Informations d'entrée</Text>
                <View className="flex flex-row space-x-2">
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color="black"
                  />
                  <Text className="mt-1"> Immatriculation : </Text>
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <Ionicons name="ios-calendar" size={24} color="black" />
                  <Text className="mt-1">Date d'entrée : </Text>
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <SimpleLineIcons name="clock" size={24} color="black" />
                  <Text className="mt-1">Heure d'entrée : </Text>
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <SimpleLineIcons name="user" size={24} color="black" />
                  <Text className="mt-1">Par : </Text>
                </View>
                <View className="items-center mt-2 rounded-md bg-blue-300 text-white py-3">
                  <Text className=" text-xl text-white">MONTANT A PAYER </Text>
                  <Text className="text-white text-2xl">00.00 USD </Text>
                </View>
                <View className="items-center"></View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Qr;
