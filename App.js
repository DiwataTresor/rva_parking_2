import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  Box,
  NativeBaseProvider,
  Center,
  Stack,
  Text as TextNB,
  Heading,
  Spinner,
  Icon,
  AlertDialog,
  Button as ButtonNB,
  HStack,
  useToast,
  Image,
} from "native-base";
import logoRva from "./assets/logoRva.png";
import Main from "./screens/Main";
import { ContextProvider } from './contexts/ContextProvider';

export default function App() {
  return (
    <NavigationContainer>
    <ContextProvider>
      <TailwindProvider>
        <NativeBaseProvider>
          <Main />
        </NativeBaseProvider>
      </TailwindProvider>
      </ContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
