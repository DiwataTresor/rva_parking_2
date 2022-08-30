import * as React from 'react'
import {StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const  = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      keyboardHandlingEnabled={true}
      mode={'card'} // option (modal)
      headerMode={'screen'} // option (screen, float, none)
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            title: 'Title',
            headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
            headerStyle: {},
            headerTitleStyle: {},
            headerBackTitleStyle: {},
            headerLeftContainerStyle: {},
            headerTitleContainerStyle: {},
            headerRightContainerStyle: {},
            headerTintColor: '',
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
    </Stack.Navigator>
  );
}
export default ;