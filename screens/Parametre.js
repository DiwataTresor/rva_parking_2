import { View, Text, FlatList, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView, Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();

const Parametreapropos=()=>{
    return (
        <View>
            <Text>Parametre a propos
            </Text>
        </View>
    );
}
const Parametremonprofil=()=>{
    return (
        <View>
            <Text>Parametre mon profil
            </Text>
        </View>
    );
}
const Parametretarif=()=>{
    return (
        <View>
            <Text>Parametre tarif
            </Text>
        </View>
    );
}
const Parametrechangermotdepasse=()=>{
    return (
        <View>
            <Text>Parametre changer mot de passe
            </Text>
        </View>
    );

}
const Parametreindex=()=>{
    return(
        <Stack.Navigator
            keyboardHandlingEnabled={true}
            mode={'card'} // option (modal)
            headerMode={'screen'} // option (screen, float, none)
        >
            <Stack.Screen
                name="Main"
                component={Parametre}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "navy",
                          },
                        title: 'Paramètres',
                        headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
                        // headerStyle: {
                        //     backgroundColor: BG_COLOR,
                        //     color: "#fff"
                        // },
                        headerTitleStyle: {},
                        headerBackTitleStyle: {},
                        headerLeftContainerStyle: {},
                        headerTitleContainerStyle: {},
                        headerRightContainerStyle: {},
                        headerTintColor: '#fff',
                        headerTransparent: false,
                        cardShadowEnabled: true,
                        cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                        headerShown:true

                    }
                }
            />
            <Stack.Screen
                name="Parametreapropos"
                component={Parametreapropos}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "navy",
                          },
                        title: 'A Propos',
                        headerTitleAlign: 'left', // option (center, left) Defaults to center on iOS and left on Android.
                        // headerStyle: {
                        //     backgroundColor: BG_COLOR
                        // },
                        headerTitleStyle: {},
                        headerBackTitleStyle: {},
                        headerLeftContainerStyle: {},
                        headerTitleContainerStyle: {},
                        headerRightContainerStyle: {},
                        headerTintColor: '#fff',
                        headerTransparent: false,
                        cardShadowEnabled: true,
                        cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                        headerShown:true

                    }
                }
            />
            <Stack.Screen
                name="Parametremonprofil"
                component={Parametremonprofil}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "navy",
                          },
                        title: 'Mon Profil',
                        headerTitleAlign: 'left', // option (center, left) Defaults to center on iOS and left on Android.
                        // headerStyle: {
                        //     backgroundColor: BG_COLOR
                        // },
                        headerTitleStyle: {},
                        headerBackTitleStyle: {},
                        headerLeftContainerStyle: {},
                        headerTitleContainerStyle: {},
                        headerRightContainerStyle: {},
                        headerTintColor: '#fff',
                        headerTransparent: false,
                        cardShadowEnabled: true,
                        cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                        headerShown:true,
                        headerBackImage:()=>(<Ionicons name="return-up-back" size={24} color="black" />)

                    }
                }
            />
            <Stack.Screen
                name="Parametretarif"
                component={Parametretarif}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "navy",
                          },
                        title: 'Tarif',
                        headerTitleAlign: 'left', // option (center, left) Defaults to center on iOS and left on Android.
                        // headerStyle: {
                        //     backgroundColor: BG_COLOR
                        // },
                        headerTitleStyle: {},
                        headerBackTitleStyle: {},
                        headerLeftContainerStyle: {},
                        headerTitleContainerStyle: {},
                        headerRightContainerStyle: {},
                        headerTintColor: '#fff',
                        headerTransparent: false,
                        cardShadowEnabled: true,
                        cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                        headerShown:true,
                        headerBackImage:()=>(<Ionicons name="return-up-back" size={24} color="black" />)

                    }
                }
            />
            <Stack.Screen
                name="Parametrechangermotdepasse"
                component={Parametrechangermotdepasse}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "navy",
                          },
                        title: 'Changement mot de passe',
                        headerTitleAlign: 'left', // option (center, left) Defaults to center on iOS and left on Android.
                        // headerStyle: {
                        //     backgroundColor: BG_COLOR
                        // },
                        headerTitleStyle: {},
                        headerBackTitleStyle: {},
                        headerLeftContainerStyle: {},
                        headerTitleContainerStyle: {},
                        headerRightContainerStyle: {},
                        headerTintColor: '#fff',
                        headerTransparent: false,
                        cardShadowEnabled: true,
                        cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                        headerShown:true,
                        headerBackImage:()=>(<Ionicons name="return-up-back" size={24} color="black" />)

                    }
                }
            />
        </Stack.Navigator>
    );
}
const Parametre = () => {
  const [userName, setUserName] = useState("Tresor diwata");
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
      type: "antdesign",
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
  const nv=useNavigation();
  return (
    <SafeAreaView className="p-1">
      <View className="items-end pr-3 pt-3">
        <Text>
          <AntDesign name="user" size={24} color="black" />
          {userName}
        </Text>
      </View>
      <View className="mt-10">
        {list.map((item, index) => {
          return (
            <View className="pl-2 shadow-2xl  mb-2 rounded-md bg-blue-300 rounded-full py-3" key={index}>
              <Pressable
                onPress={() => {
                  nv.push(`${item.k}`);
                }}
              >
                <View className="flex flex-row">
                  <MaterialCommunityIcons
                    name="menu-right"
                    size={24}
                    color="white"
                  />
                  <Text className="text-lg text-white">{item.title}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Parametreindex;
