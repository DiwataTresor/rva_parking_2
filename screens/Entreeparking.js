import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Button } from "react-native";
import { Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { Alert } from "react-native";
import {useStateContext} from './../contexts/ContextProvider';
import logoRva from "./../assets/logoRva.png";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";


import Loading from './../components/Loading';

const Entreeparking = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const {nomUser,setNomUser} =useStateContext();
  const [isOpened, setIsOpened] = useState(false);
  const {api}=useStateContext();
  const generateQrCode = (v) => {
    if (v == "" || v == null) {
      
      setQrCode("");
    } else {
      setImmatriculation(v.toUpperCase());
      setQrCode(v);
    }
  };
  const changerNom=()=>{
    Alert.alert("jk");
    setNomUser("papa");
  }
  const saveImmatriculation=()=>{
    //setIsOpened(true);
    Alert.alert(api);
    let ad=new FormData();
ad.append("qry","test");
fetch(api,{method:"POST",body:JSON.stringify({"nom":"tresor"})})
.then(r=>r.json())
.then(r=>Alert.alert(r.n))
.catch(r=>Alert.alert(r))
  }
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
              <View className="mt-3">
                <Button
                  title="Imprimer"
                  onPress={() => {
                    generateQrCode();
                  }}
                  className="mt-2"
                />
              </View>
            </View>
          ) : null}
        </View>
        <View className="items-center">
          <Text className="items-center">
            Veuillez saisir l'immatriculation
          </Text>
          <View className="mt-4">
            <Input
              className="px-2"
              w={{
                base: "75%",
                md: "75%",
              }}
              pl="2"
              value={immatriculation}
              onChange={(e) => {
                setImmatriculation(e);
              }}
              onChangeText={generateQrCode}
              onBlur={()=>changerNom()}
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
              onPress={()=>saveImmatriculation()}
              className="mt-2"
            />
          </View>
          
        </View>
        <View>
            <Text>
            </Text>
        </View>
      </View>
      <Loading isOpened={isOpened} text="Connexion en cours..." />
    </SafeAreaView>
  );
};

export default Entreeparking;
