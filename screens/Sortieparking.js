import {View,Text,StyleSheet,SafeAreaView,Pressable,TouchableHighlight,Alert,Button,ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import { Input } from "native-base";
import {Ionicons,MaterialCommunityIcons,SimpleLineIcons,MaterialIcons,} from "@expo/vector-icons";
import {useStateContext} from './../contexts/ContextProvider';

import Loading from './../components/Loading';

const Qr = () => {
  const { nomUser, setNomUser, idUser } = useStateContext();
  const [scannerActive, setScannerActive] = useState(false);
  const [hasPermission, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [saisieCode, setSaisieCode] = useState(false);
  const [immatriculation, setImmatriculation] = useState("");
  const [immatriculationInput, setImmatriculationInput] = useState("");
  const [loadingIsOpened, setLoadingIsOpened] = useState(false);
  const [dateEntree,setDateEntree]=useState("");
  const [dateSortie,setDateSortie]=useState("");
  const [heureEntree,setHeureEntree]=useState("");
  const [heureSortie,setHeureSortie]=useState("");
  const [opEntree,setOpEntree]=useState("");
  const [dataMouvement,setDataMouvement]=useState({});
  const [displayInfo,setDisplayInfo]=useState(false);
  const {api}=useStateContext();
  useEffect(() => {
    // Alert.alert(
    //   "Echec d'operation",
    //   "Cette operation a echoué",[
    //     {
    //       text:"Continuer",
    //       style:"cancel"
    //     }
    //   ]
    // )
    async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status == "granted");
    };
  }, []);
  const validateTicket = (data,origine="scanner") => {
    setLoadingIsOpened(true);
    let donnees=new FormData();
    donnees.append("qry", "checkSortieVehicule");
    donnees.append("id", data);
    donnees.append("idUser", idUser);
    fetch(api,{method:"POST",body:donnees}).then(r=>r.json())
    .then(r=>{
      setLoadingIsOpened(false);
      if(r.n==0)
      {
        Alert.alert("Verification","Echec d'operation, Code inexistant",[
          {
            text:"Recommencer",
            onPress:()=>{
              if(origine=="scanner")
              {
                setScanned(false);
                setScannerActive(true);
              }
            },
            style:"default"
          },
          {
            text:"Annuler",
            style:"default"
          }
        ]);
      }else if(r.n==1){
        setDisplayInfo(true);
        setDataMouvement(r);
        setDateEntree(r.data.DateAcc);
        setHeureEntree(r.data.HeureAcc);
        setImmatriculation(r.data.Immatriculation);
        setOpEntree(r.user[0].NomUt);
      }else
      {
        Alert.alert("Echec d'operation",r.msg,[
          {text:"Continuer"}
        ]);
        setDisplayInfo(false);
      }
    })
    .catch(e=>{
      setLoadingIsOpened(false);
      Alert.alert("echec "+e);
    });
    setScannerActive(false);
    setScanned(false);
  }
  const handleSuccess = ({ type, data }) => {
    validateTicket(data);
  };
  const handleInputImmatriculation=()=>{
    
    if(immatriculationInput=="")
    {
      Alert.alert("Veuillez saisir un code ticket");
    }else
    {
      validateTicket(immatriculationInput,"immatriculationInput");
    }
  }
  const handleScanQr = () => {
    setScannerActive(true);
  };
  const capturer = () => {};
  if (hasPermission === null && hasPermission === false) {
    return <Text>Vous n'avez d'accès à la Camera</Text>;
  }
  return (
    <SafeAreaView className="mt-25">
      <ScrollView className="pb-2 bg-slate-200 h-full">
        <View className="mb-1 pb-1">
          {scannerActive ? (
            <View className="flex flex-col">
              <View className="flex flex-row justify-between w-full">
                <View className="items-center">
                  <Text>
                    <TouchableHighlight
                      className=" text-white px-2 py-1 rounded-md"
                      onPress={() => {
                        setScannerActive(false);
                      }}
                    >
                      <Text className="text-black py-2 rounded-md px-3 ">
                        <Ionicons
                          name="return-up-back"
                          size={24}
                          color="black"
                        />
                        &nbsp; Retourner
                      </Text>
                    </TouchableHighlight>
                  </Text>
                </View>
                <View className="pr-3">
                </View>
              </View>
              <View className="mt-2 w-full">
                <BarCodeScanner
                  type={type}
                  barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.Qr],
                  }}
                  barCodeTypes={BarCodeScanner.Constants.BarCodeType.Qr}
                  onBarCodeScanned={scanned ? undefined : handleSuccess}
                  className="w-80 h-96"
                >
                  <TouchableOpacity
                    class="bg-blue-200 w-fit py-2 px-1"
                    onPress={() => {
                      setType(
                        type === BarCodeScanner.Constants.type.Back
                          ? BarCodeScanner.Constants.Type.Front
                          : BarCodeScanner.Constants.Type.Back
                      );
                    }}
                  ></TouchableOpacity>
                </BarCodeScanner>
              </View>
            </View>
          ) : (
            <View className="items-center pt-3">
              <Text className="items-center">
                <Text className="mr-2 text-2xl mt-3">
                  Veuillez scanner le Qrcode &nbsp; &nbsp;
                </Text>
              </Text>
              <View className="mt-3 mb-2 items-center">
                <TouchableHighlight
                  onPress={() => {
                    handleScanQr();
                  }}
                >
                  <View className="w-48 bg-blue-400 content-center px-4 py-5 items-center rounded-md text-white">
                    <Text className="text-white text-lg mb-4">Scanner</Text>
                    <MaterialCommunityIcons
                      name="qrcode-scan"
                      size={45}
                      color="white"
                    />
                  </View>
                </TouchableHighlight>
                <View className="mt-4 items-center">
                  <Text
                    className="text-blue-400 text-lg"
                    onPress={() => {
                      setSaisieCode(!saisieCode);
                    }}
                  >
                    [ Saisir un code ]
                  </Text>
                </View>
                {saisieCode ? (
                  <View className="w-full mt-2">
                    <Input
                      className="px-2"
                      w={{ base: "75%", md: "75%" }}
                      pl="2"
                      InputLeftElement={
                        <MaterialIcons
                          name="keyboard"
                          size={24}
                          color="gray"
                          className="pl-3"
                        />
                      }
                      onChangeText={(e) =>{
                        setImmatriculationInput(e)
                      }}
                      placeholder="Code"
                    />
                    <View className="mt-2">
                      <Button title="Facturer" onPress={()=>handleInputImmatriculation()} />
                    </View>
                  </View>
                ) : null}
              </View>
              { displayInfo?(
                <View className="mt-4">
               {/* <Text className="text-3xl mb-5">Informations d'entrée</Text>*/}
                <View className="space-x-2 items-center">
                  {/*<Ionicons
                    name="information-circle-outline"
                    size={24}
                    color="black"
                    />*/}
                  {/*<Text className="mt-1"> Immatriculation : */}
                  <Text className="font-bold text-md">
                    Immatriculation
                  </Text>
                  <View className="items-center content-center bg-red-400 px-0.1 rounded-full p-1 text-3xl text-white">
                    <Text className="w-full px-0.1 rounded-full p-1 text-3xl text-white">
                      {" "+immatriculation+" "}
                    </Text>
                  </View>
                  
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <Ionicons name="ios-calendar" size={24} color="black" />
                  <Text className="mt-1 text-sm">Date entrée : 
                    <Text className="text-md font-bold">
                      {" "+dateEntree+" "} 
                    </Text>  
                    - Date Sortie: {dateSortie}
                  </Text>
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <SimpleLineIcons name="clock" size={24} color="black" />
                  <Text className="mt-1 text-sm">
                    Heure d'entrée : 
                    <Text className="font-bold text-md">
                    {" "+heureEntree+" "} 
                  </Text>   
                    - Heure Sortie : {heureSortie}</Text>
                </View>
                <View className="flex flex-row mt-3 space-x-2">
                  <SimpleLineIcons name="user" size={24} color="black" />
                  <Text className="mt-1">Saise entrée: 
                  <Text className="font-bold text-md"> 
                    {opEntree}
                  </Text>
                  </Text>
                </View>
                {/*<View className="items-center mt-2 rounded-md bg-blue-300 text-white py-3">
                  <Text className=" text-xl text-white">MONTANT A PAYER </Text>
                  <Text className="text-white text-2xl">00.00 USD </Text>
                  </View>*/}
                <View className="items-center"></View>
              </View>
              ):null}
              
            </View>
          )}
        </View>
      </ScrollView>
      <Loading isOpened={loadingIsOpened} text="Traitement en cours..." />
    </SafeAreaView>
  );
};

export default Qr;
