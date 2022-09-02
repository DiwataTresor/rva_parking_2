import {
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
} from "react-native";
import React, { Component, useState } from "react";
import {
  Box,
  NativeBaseProvider,
  Center,
  Stack,
  Text as TextNB,
  Heading,
  Input,
  Spinner,
  Icon,
  AlertDialog,
  HStack,
  useToast,
  Tag,
  FormControl
} from "native-base";
import logoRva from "./../assets/logoRva.png";
import parking from "./../assets/parking.jpg";
import {
  PhoneArrowDownLeftIcon,
  CheckIcon,
} from "react-native-heroicons/solid";
import Svg, { Circle, Rect, path } from "react-native-svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign,EvilIcons,Ionicons } from "@expo/vector-icons";

import Entreeparking from "./Entreeparking";
import Sortieparking from "./Sortieparking";
import Parametre from "./Parametre";
import Qr from "./Qr";
import Accueil from "./Accueil";

import { useStateContext } from "../contexts/ContextProvider";
import Loading from './../components/Loading';
const Login = () => {
  const  [isOpened,setIsOpened]=useState(false);
  const {connected,setConnected}=useStateContext();
  const [_login,set_Login]=useState("");
  const [_password,set_Password]=useState("");
  const [formData, setData] = React.useState({});
  const {api}=useStateContext();
  const connexion=()=>{
    setIsOpened(true);
    let data=new FormData();

    data.append("qry","test");
    
    fetch(api,{
      method:"POST",
      body:data
    }).then(r=>r.json())
    .then((r)=>{
      setIsOpened(false);
      //Alert.alert("kkkk");
    })
    .catch(e=>{
      setIsOpened(false);
      Alert.alert(e);
      //Alert.alert("Pas de connexion vers le serveur");
    });
  }
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full bg-slate-200 pt-16">
        <ImageBackground
          source={parking}
          resizeMode="cover"
          className="accent-slate-200 "
          imageStyle={{opacity:0.7}}
        >
        <View className="h-full w-full flex flex-col justify-between bg-opacity-5">

          <View className="text-red-100 items-center">
            <Image source={logoRva} className="w-64 h-20" />
            <Text className="text-md text-orange-400">
              GESTION PARKING AEROPORT [G.P.A]
            </Text>
          </View>
          <View>
          <FormControl isRequired>
            <View className="items-center py-3">
                  

                  <View className="mt-4">
                    <Button
                      onPress={() => connexion()}
                      title="Se connecter"
                    />
                  </View>
                  </View>
                  </FormControl>
          </View>
          <View className="content-center items-center pb-3 text-sm">
            <Text>&copy; 2022 | RVA-Division Info</Text>
          </View>
          </View>
        </ImageBackground>
      </View>
      <Loading isOpened={isOpened} text="Connexion en cours..." />
    </SafeAreaView>
  )
}

export default Login