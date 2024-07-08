import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import RegisterScreen from './src/Screen/RegisterScreen';
import SignInScreen from './src/Screen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack =createStackNavigator();
const MyHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="SIGNIN" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SIGNUP" component={RegisterScreen} />
      <Stack.Screen name="SIGNIN" component={SignInScreen} />
    </Stack.Navigator>
  );
};



const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[]);


  
  return (
  <NavigationContainer>
      <MyHomeStack/>
  </NavigationContainer>
  )
}

export default App
