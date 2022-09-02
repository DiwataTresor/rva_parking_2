import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import {gestion_parking} from './../assets/gestion_parking.jpg' 
import {Fontisto, Entypo } from '@expo/vector-icons' 
import Search from './../components/Fab';
import Loading from './../components/Loading';

const Accueil = () => {
  return (
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
                        <Text>Gestion Parking Aeroport</Text>
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

export default Accueil