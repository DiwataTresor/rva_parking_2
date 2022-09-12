import { View, Text,ImageBackground } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaView } from 'react-native';
import {gestion_parking} from './../assets/gestion_parking.jpg' 
import {Fontisto, Entypo } from '@expo/vector-icons' 
import Search from './../components/Fab';
import Loading from './../components/Loading';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useStateContext } from "./../contexts/ContextProvider";
import { useState } from 'react';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native';
import { Pressable } from 'react-native';



const Accueil = () => {
    const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator
                initialRouteName="AccueilHome"
                keyboardHandlingEnabled={true}
                mode={'card'} // option (modal)
                headerMode={'screen'} // option (screen, float, none)
            >
                <Stack.Screen
                    name="AccueilHome"
                    component={AccueilHome}
                    options={
                        {
                            title: 'Accueil',
                            headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
                            headerStyle: {
                                backgroundColor:"navy"
                            },
                            headerTitleStyle: {},
                            headerBackTitleStyle: {},
                            headerLeftContainerStyle: {},
                            headerTitleContainerStyle: {},
                            headerRightContainerStyle: {},
                            headerTintColor: '#fff',
                            headerShown:true,
                            headerTransparent: false,
                            cardShadowEnabled: true,
                            cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                            //headerStatusBarHeight: 0,
                            //headerBackground: settings => { return null },
                            //header: settings => { return null }, // React Element
                            //headerTitle:settings => { return null }, // React Element
                            //headerRight: settings => { return null }, // React Element
                            //headerLeft: settings => { return null }, // React Element
                            //headerBackImage: settings => { return null }, // React element
                            //headerBackTitle:'', // Title string used by the back button on iOS. Defaults to the previous scene's headerTitle
                            //headerBackTitleVisible:true,
                        }
                    }
                />
                <Stack.Screen
                    name="AccueilRechercheResultat"
                    component={AccueilRechercheResultat}
                    options={
                        {
                            title: 'Recherche...',
                            headerTitleAlign: 'left', // option (center, left) Defaults to center on iOS and left on Android.
                            headerStyle: {
                                backgroundColor:"navy"
                            },
                            headerTitleStyle: {},
                            headerBackTitleStyle: {
                                color:"white"
                            },
                            headerLeftContainerStyle: {},
                            headerTitleContainerStyle: {},
                            headerRightContainerStyle: {},
                            headerTintColor: '#fff',
                            headerTransparent: false,
                            cardShadowEnabled: true,
                            headerShown:true,
                            cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
                            //headerStatusBarHeight: 0,
                            //headerBackground: settings => { return null },
                            //header: settings => { return null }, // React Element
                            //headerTitle:settings => { return null }, // React Element
                            //headerRight: settings => { return null }, // React Element
                            //headerLeft: settings => { return null }, // React Element
                            //headerBackImage: settings => { return null }, // React element
                            //headerBackTitle:'', // Title string used by the back button on iOS. Defaults to the previous scene's headerTitle
                            //headerBackTitleVisible:true,
                        }
                    }
                />
            </Stack.Navigator>
        );
}
const AccueilHome=()=>{
    return(
        <SafeAreaView>
        <View className="w-full flex flex-col justify-between h-full bg-slate-200 pt-1">
            <ImageBackground
                source={gestion_parking}
                resizeMode="cover"
                className="accent-slate-200 "
                imageStyle={{opacity:0.4}}
            >
                <View className="flex flex-col justify-between h-full">
                    <View className="items-center pt-10">
                        <Text className="text-5xl text-slate-900 font-extrabold">G.P.A - SOFT</Text>
                        <Text className="text-orange-500 font-bold">Gestion Parking Aeroport</Text>
                    </View>
                    <View className="px-7">
                        <View className="bg-slate-800  rounded-full py-4 bg-opacity-50 flex flex-row justify-around">
                            <Fontisto name="taxi" size={40} color="orange" />
                            <Entypo name="air" size={40} color="orange" />
                        </View>
                    </View>
                    <View>
                        <Text>&nbsp;</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
        <Loading />
        <Search />
    </SafeAreaView>
    )
}
const AccueilRechercheResultat=({route})=>{ 
    const [searchExpression,setSearchExpression]=useState("");
    const [ticket,setTicket]=useState("");
    const [dateEntree,setDateEntree]=useState("");
    const [dateSortie,setDateSortie]=useState("");
    const [heureEntree,setHeureEntree]=useState("");
    const [heureSortie,setHeureSortie]=useState("");
    const [mtPaye,setMtPaye]=useState();
    const [displayResultat,setDisplayResultat]=useState(false);
    const {api} = useStateContext();
    const[isOpened,setIsOpened]=useState(true);
    useEffect(()=>{
        setDisplayResultat(false);
        setIsOpened(true);
        const {txtSearch} = route.params;
        setSearchExpression(txtSearch);
        let data=new FormData();
        data.append("qry","getMouvementByImmatriculation");
        data.append("immatriculation",txtSearch);
        fetch(api,{method:"POST",body:data}).then(r=>r.json())
        .then(r=>{
            setIsOpened(false);
            if(r.n==0)
            {
                Alert.alert("Recherche","Aucune immatriculation trouvée");
            }else
            {
                setDisplayResultat(true);
                setTicket(r.data[0].Id);
                setDateEntree(r.data[0].DateAcc);
                setDateSortie(r.data[0].DateSortie);
                setHeureEntree(r.data[0].HeureAcc);
                setHeureSortie(r.data[0].HeureSortie);
            }
        })
        .catch(e=>{
            setIsOpened(false);
            Alert.alert("Erreur","Pas de connexion vers le serveur",[{
                text: "Continuer",
            }])
        });
    },[]);
    return (
        <SafeAreaView>
            <View className="flex flex-row bg-gray-200 shadow">
                <View className="px-4 py-2 flex-1">
                    <Text>
                    <AntDesign name="search1" size={24} color="black" />
                    &nbsp;
                    {searchExpression}
                    </Text>
                </View>
                <View className="w-fit px-4 pt-2">
                    <TouchableHighlight className="hover:bg-slate-50">
                        <Pressable>
                            <MaterialIcons name="more-horiz" size={24} color="black" />
                        </Pressable>
                    </TouchableHighlight>
                </View>
            </View>
            {displayResultat?(
            <View className="flex flex-col space-y-4 bg-gray-200 border h-28 max-h-full border-white p-2 mt-3 mx-5 rounded-md">
                <Text>N° Ticket : {ticket}</Text>
                <Text>Date entrée : {dateEntree} à {heureEntree}</Text>
                <Text>Date Paiement : {dateSortie} à {heureSortie}</Text>
            </View>
            ):null}
            <Loading isOpened={isOpened} text={"Traitement en courss..."} />
        </SafeAreaView>
    )
}

export default Accueil