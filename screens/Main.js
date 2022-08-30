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

export function Principal() {
  return (
    <View>
      <Text>Main</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
        tabBarActiveTintColor:"orange",
        tabBarLabelStyle:{color:"black", size:"large"},
        tabBarItemStyle:({color})=>{"white"}
        
        }
        
      }}
    >
      
      <Tab.Screen 
        options={{
          title:"Home",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor:"#FFF",
          tabBarIcon: ({ color, size }) => (<AntDesign name='home' size={24} color="black" />),
          tabBarInactiveTintColor:"navy",
          tabBarIcon: ({tintColor}) => (
            <AntDesign name='home' size={25} color={tintColor} />
          ),
        }}
        name="accueil" Icon component={Accueil} 
      />
      <Tab.Screen 
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor:"#FFF",
          tabBarIcon: ({ color, size }) => (<AntDesign name='export' size={24} color="black" />),
          tabBarInactiveTintColor:"navy",
          
        }}
        
        name="Entree parking" Icon component={Entreeparking} 
      />
      <Tab.Screen 
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor:"#FFF",
          tabBarIcon: ({ color, size }) => (<AntDesign name='export2' size={24} color="black" />),
          tabBarInactiveTintColor:"navy",
        }}
        name="Sortie parking" component={Sortieparking}  
      />
      <Tab.Screen 
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor:"#FFF",
          tabBarIcon: ({ color, size }) => (<EvilIcons name='gear' size={24} color="black" />),
          tabBarItemStyle:{color:"white"},
          tabBarInactiveTintColor:"navy",
          headerShown:false
          // headerBackImage: <Ionicons name="return-up-back" size={24} color="black" />  
          
        }}
        name="Parametre" component={Parametre}  
      />
    </Tab.Navigator>
  );
}
function Main() {
  const handlelogin = () => {
    Alert.alert("test");
  };
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Home />
    // <SafeAreaView>
    //   <View className="flex flex-col justify-between h-full bg-slate-200 pt-16">
    //     <ImageBackground
    //       source={parking}
    //       resizeMode="cover"
    //       className="accent-slate-200 "
    //       imageStyle={{opacity:0.4}}
    //     >
    //     <View className="h-full w-full flex flex-col justify-between bg-opacity-5">

    //       <View className="text-red-100 items-center">
    //         <Image source={logoRva} className="w-64 h-20" />
    //         <Text className="text-md text-orange-400">
    //           GESTION PARKING AEROPORT [G.P.A]
    //         </Text>
    //       </View>
    //       <View>
    //         <View className="items-center py-3">
    //         <Input shadow={2} _light={{bg: 'coolGray.700'}} _dark={{bg: 'coolGray.800'}}
    //         w={{base:"75%"}}
    //         className="opacity-50"
    //         onChange={(e) => setLogin(e.target.value)}
    //         placeholder="Nom utilisateur" />
    //         <View className="h-4">
    //         </View>
    //         <Input shadow={2} _light={{bg: 'coolGray.700'}} _dark={{bg: 'coolGray.800'}}
    //         secureTextEntry={true}
    //         w={{base:"75%"}}
    //         className="opacity-50"
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Mot de passe" />

    //           <View className="mt-4">
    //             <Button
    //               onPress={() => Alert.alert("dsds")}
    //               title="Se connecter"
    //             />
    //           </View>
    //         </View>
    //       </View>
    //       <View className="content-center items-center pb-3 text-sm">
    //         <Text>&copy; 2022 | RVA-Division Info</Text>
    //       </View>
    //       </View>
    //     </ImageBackground>
    //   </View>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFFFFF",
  },
  primaryColor: {
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "800",
    textAlign: "center",
  },

  stretch: {
    width: 180,
    height: 90,
    resizeMode: "stretch",
  },
});

export default Main;
