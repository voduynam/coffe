import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RegisterScreen from './src/Screen/RegisterScreen';
import SignInScreen from './src/Screen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import OderScreen from './src/Screen/OderScreen';
import ProductsScreen from './src/Screen/OderDetails';
import CartScreen from './src/Screen/CartScreen';
import OrderDetailsScreen from './src/Screen/OderDetails';
import { Provider, useSelector } from 'react-redux';
import {store} from './src/app/store';

import { RootState } from '@reduxjs/toolkit/query';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SIGNUP" component={RegisterScreen} />
      <Stack.Screen name="SIGNIN" component={SignInScreen} />
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCTS_DETAIL" component={OrderDetailsScreen} />
      <Stack.Screen name="CART_PRODUCT" component={CartScreen} />
      
    </Stack.Navigator>
  );
};

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      
      
    }}>
    <Tab.Screen
      name="Home"
      component={MyHomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Scan/Pay"
      component={MyHomeStack}
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name ="qrcode-scan" size={size} color={color}/>
        )

      }}
    />
    <Tab.Screen 
      name="Oder"
      component={OderScreen}
      options={{
        tabBarIcon:({color, size})=>(
          <Feather name ="coffee" size={size} color={color}/>
        )

      }}
    />
    <Tab.Screen
      name="Account"
      component={MyHomeStack}
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>
        )
      }}
    />
     <Tab.Screen
      name="Rewards"
      component={MyHomeStack}
      options={{
        tabBarIcon:({color, size})=>(
          <Feather name="star" size={size} color={color}/>
        )
      }}
    />

  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  


  


  return (
    <Provider store={store} >
      <NavigationContainer>
       
          <TabScreen/>

      
         
      </NavigationContainer>
    </Provider>
  );
};

export default App;
