import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Button } from "react-native";
import { Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { Alert } from "react-native";
import { useStateContext } from "./../contexts/ContextProvider";
import logoRva from "./../assets/logoRva.png";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import Loading from "./../components/Loading";

const Entreeparking = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const { nomUser, setNomUser, idUser } = useStateContext();
  const [isOpened, setIsOpened] = useState(false);
  const { api } = useStateContext();
  const generateQrCode = (v) => {
    if (v == "" || v == null) {
      setQrCode("");
    } else {
      setImmatriculation(v.toUpperCase());
      setQrCode(v);
    }
  };
  const changerNom = () => {
    Alert.alert("jk");
    setNomUser("papa");
  };
  const saveImmatriculation = () => {
    Alert.alert("Enregistrement", "Voulez-vous enregistrer ce véhicule ?", [
      {
        text: "ENREGISTRER",
        onPress: () => {
          setIsOpened(true);

          let ad = new FormData();
          ad.append("qry", "addVehicule");
          ad.append("immatriculation", immatriculation);
          ad.append("idUser", idUser);
          fetch(api, { method: "POST", body: ad })
            .then((r) => r.json())
            .then((r) => {
              //Alert.alert(r.toString());
              if (r.n.toString() == "1") {
                setIsOpened(false);
                Alert.alert("Bien enregistré");
                setQrCode(r.numFact.toString());
                setImmatriculation("");
              }
            })
            .catch((r) => {
              setIsOpened(false);
              Alert.alert("Echec d'enregistrement, une erreur s'est produite");
            });
        },
      },
      {
        text: "ANNULER",
      },
    ]);
  };
  return (
    <SafeAreaView className="mt-25 h-full">
      <View className="flex flex-col justify-between h-full bg-slate-200">
        <View>
          {qrCode !== "" ? (
            <View className="items-center">
              <View className="mt-8">
                <QRCode
                  value={qrCode}
                  color={"#2C8DDB"}
                  backgroundColor={"white"}
                  size={200}
                  logo={logoRva} // or logo={{uri: base64logo}}
                  logoMargin={2}
                  logoSize={80}
                  logoBorderRadius={10}
                  logoBackgroundColor={"transparent"}
                />
              </View>
              <View className="mt-3 flex flex-row">
                <Button
                  title="Imprimer"
                  onPress={() => {
                    generateQrCode();
                  }}
                  className="mt-2 mr-2"
                />
                <Text>&nbsp;</Text>
                <Button
                  title="Annuler"
                  onPress={() => {
                    setQrCode("");
                  }}
                  className="mt-2"
                />
              </View>
            </View>
          ) : null}
        </View>
        <View className="items-center">
          <Text className="items-center text-2xl">
            Veuillez saisir l'immatriculation
          </Text>
          <View className="mt-4">
            <Input
              className="px-2"
              variant="rounded"
              value={immatriculation}
              w={{
                base: "90%",
                md: "75%",
              }}
              pl="2"
              onChangeText={(e) => setImmatriculation(e.toUpperCase())}
              // onBlur={()=>changerNom()}
              InputLeftElement={
                <MaterialIcons
                  name="keyboard"
                  size={24}
                  color="gray"
                  className="pl-3"
                />
              }
              placeholder="Immatriculation"
            />
          </View>
          <View className="mt-3">
            <Button
              title="Enregistrer"
              //onPress={generateQrCode}
              onPress={() => saveImmatriculation()}
              className="mt-2"
            />
          </View>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
      <Loading isOpened={isOpened} text="Traitement en cours..." />
    </SafeAreaView>
  );
};

export default Entreeparking;
