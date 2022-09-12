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
  ToastAndroid
} from "react-native";
import React, { Component, useState } from "react";
import {
  Box,
  Button as ButtonNB,
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
  FormControl,
  VStack,
  Link
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
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";

import Entreeparking from "./Entreeparking";
import Sortieparking from "./Sortieparking";
import Parametre from "./Parametre";
import Qr from "./Qr";
import Accueil from "./Accueil";


import { useStateContext } from "../contexts/ContextProvider";
import Loading from "./../components/Loading";
const Login = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { connected, setConnected,setIdUser,setNomUser,setRoleUser,roleUser } = useStateContext();
  const [_login, set_Login] = useState("");
  const [_password, set_Password] = useState("");
  const [feedbackConnect,setFeedbackConnect]=useState("");
  const [feedbackConnectView,setFeedbackConnectView]=useState(false);
  const [formData, setData] = React.useState({});
  const { api } = useStateContext();
  
  const connexion = () => {
    setIsOpened(false);
    let data = new FormData();

    data.append("qry", "login");
    data.append("login", "");
    data.append("password", "login");

    fetch(api, {
      method: "POST",
      body: data,
    })
      .then((r) => r.json())
      .then((r) => {
        setIsOpened(false);
        //Alert.alert("kkkk");
      })
      .catch((e) => {
        setIsOpened(false);
        Alert.alert(e);
        //Alert.alert("Pas de connexion vers le serveur");
      });
  };
  const Login=()=>{
    setIsOpened(false);
    let donnees=new FormData();
    donnees.append("qry","login");
    donnees.append("login",_login);
    donnees.append("password",_password);
    let error=false;
    if(_login=="")
    {
      setFeedbackConnectView(true);
      setFeedbackConnect("Veuillez entrer votre login");
      error=true;
    }
    if(_password  =="")
    {
      setFeedbackConnectView(true);
      setFeedbackConnect("Veuillez entrer votre mot de passe");
      error=true;
    }
    if(error==false)
    {
      setFeedbackConnectView(false);
      setIsOpened(true);
      fetch(api,{method:"POST",body:donnees}).then(r=>r.json())
      .then(r=>{
        setIsOpened(false);
        if(r.n==0)
        {
          ToastAndroid.showWithGravity(
            "Echec de connexion, utilisateur non identifié",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            ToastAndroid.BOTTOM
          );
          //Alert.alert("Authentification","Echec d'authentification",[{text:"CONTINUER"}]);
        }else
        {
          setIdUser(r.data.Id);
          setNomUser(r.data.NomUt);
          setRoleUser(r.data.RoleUt);
          setConnected(true);
          Alert.alert("Bien connecté");  
        }
      }).catch(r=>{
        setIsOpened(false);
        
          Alert.alert("Echec de connexion");
      });
    }
  }
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full bg-slate-200 pt-12">
        <ImageBackground
          source={parking}
          resizeMode="cover"
          className="accent-slate-200 "
          imageStyle={{ opacity: 0.9 }}
        >
          <View className="h-full w-full flex flex-col justify-between bg-opacity-5">
            <View className="text-red-100 items-center">
              <Image source={logoRva} className="w-64 h-20" />
              <Text className=" text-orange-400 font-bold text-xl">
                G.P.A - SOFT
              </Text>
              <Text className="text-orange-400 text-sm">
                GESTION INFORMATISEE DE PARKING AEROPORTUAIRE
              </Text>
            </View>
            <View>
              <FormControl isRequired>
                <View className="items-center py-3">
                  <View className="content-center items-center pb-3 text-sm">
                    <VStack space={3} mt="5">
                    <TextInput placeholder="Nom utilisateur" autoCapitalize="words" onChangeText={set_Login} value={_login} className="bg-indigo-50 min-w-[80%] rounded-3xl px-2 bg-blend-darken opacity-70" style={{height:40}} />
                    <TextInput placeholder="Mot de passe" secureTextEntry={true} onChangeText={set_Password} value={_password} className="bg-indigo-50 min-w-[80%] rounded-3xl px-2 bg-blend-darken opacity-70" style={{height:40}} />
                      {feedbackConnectView?(
                        <View mt="2" className="items-center w-auto content-center bg-red-300">
                          <Text className="text-red-500  py-2 px-5">{feedbackConnect}</Text>
                        </View>
                      ):null}
                      <ButtonNB mt="2" colorScheme="indigo" onPress={()=>{Login()}}>
                        Se connecter
                      </ButtonNB>
                    </VStack>
                  </View>
                  {/*<View className="mt-4">
                    <Button onPress={() => connexion()} title="Se connecter" />
                        </View>*/}
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
  );
};

export default Login;
