import { View, Text, FlatList, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView, Pressable, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { Icon } from "native-base";
import { useStateContext } from "../contexts/ContextProvider";
import { Tag } from "native-base";
import VehiculeEnParking from "./VehiculeEnParking";
import VehiculeSortis from "./VehiculeSortis";
import Tarif from "./Tarif";
import ChangementMotDePasse from "./ChangementMotDePasse";

const Stack = createNativeStackNavigator();

const Parametreapropos = () => {
  return (
    <View>
      <Text>Parametre a propos</Text>
    </View>
  );
};
const Parametremonprofil = () => {
  return (
    <View>
      <Text>Parametre mon profil</Text>
    </View>
  );
};
const Parametretarif = () => {
  return (
    <View>
      <Text>Parametre tarif</Text>
    </View>
  );
};
const Parametrechangermotdepasse = () => {
  return (
    <View>
      <Text>Parametre changer mot de passe</Text>
    </View>
  );
};
const Parametreindex = () => {
  return (
    <Stack.Navigator 
      keyboardHandlingEnabled={true}
      mode={"card"} // option (modal)
      headerMode={"screen"} // option (screen, float, none)
    >
      <Stack.Screen
        name="Main"
        component={Parametre}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Paramètres",
          headerTitleAlign: "center", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR,
          //     color: "#fff"
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Parametreapropos"
        component={Parametreapropos}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "A Propos",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Parametremonprofil"
        component={Parametremonprofil}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Mon Profil",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          headerShown: true,
          headerBackImage: () => (
            <Ionicons name="return-up-back" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="Parametretarif"
        component={Parametretarif}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Tarif",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          headerShown: true,
          headerBackImage: () => (
            <Ionicons name="return-up-back" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="Parametrechangermotdepasse"
        component={Parametrechangermotdepasse}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Changement mot de passe",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          headerShown: true,
          headerBackImage: () => (
            <Ionicons name="return-up-back" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="VehiculeEnParking"
        component={VehiculeEnParking}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Véhicules en stationnement",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          
        }}
      />
      <Stack.Screen
        name="Tarif"
        component={Tarif}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Tarification",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          
        }}
      />
      <Stack.Screen
        name="VehiculeSortis"
        component={VehiculeSortis}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Véhicules sortis",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          
        }}
      />
      <Stack.Screen
        name="ChangementMotDePasse"
        component={ChangementMotDePasse}
        options={{
          headerStyle: {
            backgroundColor: "navy",
          },
          title: "Changer mon Mot de passe",
          headerTitleAlign: "left", // option (center, left) Defaults to center on iOS and left on Android.
          // headerStyle: {
          //     backgroundColor: BG_COLOR
          // },
          headerTitleStyle: {},
          headerBackTitleStyle: {},
          headerLeftContainerStyle: {},
          headerTitleContainerStyle: {},
          headerRightContainerStyle: {},
          headerTintColor: "#fff",
          headerTransparent: false,
          cardShadowEnabled: true,
          cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
          
        }}
      />
    </Stack.Navigator>
  );
};
const Parametre = () => {
  const [userName, setUserName] = useState("Tresor diwata");
  const { nomUser, setNomUser,connected, setConnected,idUser,roleUser,setRoleUser} = useStateContext();
  const list = [
    {
      title: "A Propos de l'Application",
      icon: "info",
      type: "feather",
      k: "Parametreapropos",
    },
    {
      title: "Mon Profil",
      icon: "user",
      type: "Antdesign",
      k: "Parametremonprofil",
    },
    {
      title: "Tarif",
      icon: "percent",
      type: "feather",
      k: "Parametretarif",
    },
    {
      title: "Changer mot de passe",
      icon: "key",
      type: "font-awesome",
      k: "Parametrechangermotdepasse",
    },
    {
      title: "Quitter",
      icon: "poweroff",
      type: "antdesign",
      k: "Parametrequitter",
    },
  ];
  const nv = useNavigation();
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="items-start pl-3 pt-3 border-b border-slate-400 pb-3 bg-blue-800">
          <View className="flex flex-row px-4">
            <FontAwesome5 name="user-cog" size={54} color="white" />
            <View className="ml-4 pt-4">
              <Text className="font-bold text-white">{nomUser}</Text>
              <Text className="text-white">Role: {roleUser}</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View className="mt-10 px-4 bg-gray-200 mx-4 border border-slate-200 rounded-md py-2">
            <View className="text-white rounded-md p-3  h-fit">
              <Text className="text-orange-500 font-extrabold">REPORTING +</Text>
            </View>
            <View className="">
              <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 pl-3">
                <Text className="text-black text-sm" onPress={()=>{nv.push('VehiculeEnParking')}}>

                  Vehicules en stationnement
                </Text>
              </View>
              <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 mt-2 pl-3">
              <Text className="text-black text-sm" onPress={()=>{nv.push('VehiculeSortis')}}>
                  Vehicules sortis
                </Text>
              </View>
              <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 pl-3 mt-2 mb-2">
              <Text className="text-black text-sm" onPress={()=>{nv.push('Tarif')}}>
                  Tarif
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-4 px-4 bg-gray-200 mx-4 border border-slate-200 rounded-md pt-2 pb-4">
            <View className="text-white rounded-md p-3  h-fit">
              <Text className="text-orange-500 font-bold">MON COMPTE</Text>
            </View>
            <View className="">
            <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 pl-3">
                <Text className="text-black text-sm">
                  Mon journal
                </Text>
              </View>
              <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 pl-3 mt-2">
                <Text className="text-black text-sm">
                  Mon Profil
                </Text>
              </View>
              <View className="flex flex-row items-start border-slate-500 py-2 rounded-md bg-slate-100 pl-3 mt-2 mb-2">
                <Text className="text-black text-sm">
                  Changer mon mot de passe
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight onPress={()=>setConnected(false)}>
          <View className="px-4 mt-3 mb-3 pb-5 pl-7">
            <Text className="pl-2">
              <AntDesign name="poweroff" size={22} color="red" /> &nbsp;
              Se deconnecter
            </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Parametreindex;
