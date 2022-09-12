import {View,Text,StyleSheet,SafeAreaView,Pressable,TouchableHighlight,Alert,Button,ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import { Input } from "native-base";
import {Ionicons,MaterialCommunityIcons,SimpleLineIcons,MaterialIcons,} from "@expo/vector-icons";
import {useStateContext} from './../contexts/ContextProvider';

import Loading from './../components/Loading';
const VehiculeEnParking = () => {
    const [loadingIsOpened,setLoadingIsOpened]=useState(false);
    
    const [userName, setUserName] = useState("Tresor diwata");
    const { nomUser, setNomUser,connected, setConnected,idUser,roleUser,setRoleUser,api} = useStateContext();
    
    const nv = createNativeStackNavigator();
    useEffect(()=>{
        let donnees=new FormData();
        donnees.append("qry","vehiculesEnStationnement");
        fetch(api,{method:"POST",body:donnees}).then(r=>r.json())
        .then(r=>{

        })
        .catch(r=>{
            setIsOpened(false);
            Alert.alert("erreur","Une erreur s'est produite dans le système");
        });
    },[])
    return (
        <SafeAreaView className="">
            <ScrollView>
                <View className="bg-gray-200 border h-28 max-h-full border-white p-2 mt-3 mx-5 rounded-md">
            
                </View>
            </ScrollView>
            <Loading isOpened={loadingIsOpened} text="Traitement en cours..." />
        </SafeAreaView>
    );
};

export default VehiculeEnParking;