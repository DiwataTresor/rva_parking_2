import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableHighlight,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Qr = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [hasPermission, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
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
  const handleScanQr=()=>{
    setScannerActive(true);
  }
  if (hasPermission === null && hasPermission === false) {
    return <Text>No Access</Text>;
  }
  return (
    <SafeAreaView className="mt-25 pt-4">
      {scannerActive ? (
        <View className="flex flex-col">
            <View className="items-center">
                <TouchableHighlight className="bg-blue-500 text-white px-2 py-1 rounded-md" onPress={()=>{setScannerActive(false)}}>
                    <Text className="text-white py-2 rounded-md px-3 ">
                        <Ionicons name="return-up-back" size={24} color="white" />&nbsp;
                        Retourner
                    </Text>
                </TouchableHighlight> 
            </View>
            <View className="mt-2">
                <BarCodeScanner
                type={type}
                barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.Qr],
                }}
                barCodeTypes={BarCodeScanner.Constants.BarCodeType.Qr}
                onBarCodeScanned={scanned ? undefined : handleSuccess}
                className="h-full w-full"
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
                >
                </TouchableOpacity>
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
          <View className="mt-3">
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
              <Text className="text-blue-400 text-lg">[ Saisir un code ]</Text>
            </View>
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
    </SafeAreaView>
  );
};

export default Qr;
