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
    </Stack.Navigator>
  );
};
const Parametre = () => {
  const [userName, setUserName] = useState("Tresor diwata");
  const { nomUser, setNomUser,connected, setConnected} = useStateContext();
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
              <Text className="text-white">User</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View className="mt-10 px-4 bg-gray-400 mx-4 border border-slate-400 rounded-md py-2">
            <View className="text-white rounded-md p-3  h-fit">
              <Text className="text-white font-bold">REPORTING +</Text>
            </View>
            <View className="">
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-4 px-4 bg-gray-400 mx-4 border border-slate-400 rounded-md py-2">
            <View className="text-white rounded-md p-3  h-fit">
              <Text className="text-white font-bold">MON COMPTE</Text>
            </View>
            <View className="">
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-4 px-4 bg-gray-400 mx-4 border border-slate-400 rounded-md py-2">
            <View className="text-white rounded-md p-3  h-fit">
              <Text className="text-white font-bold">MON COMPTE</Text>
            </View>
            <View className="">
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
              <View className="flex flex-row items-start border-b border-slate-500 py-4">
                <Text className="text-white text-sm">
                  Vehicules en stationnements
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight onPress={()=>setConnected(false)}>
          <View className="px-4 mt-3 mb-3 pb-5">
            <Text>
              <AntDesign name="poweroff" size={22} color="red" /> &nbsp;
              Quitter
            </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Parametreindex;
