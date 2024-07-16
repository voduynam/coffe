import React, { useEffect } from 'react';
import  SplashScreen  from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import RegisterScreen from './src/Screen/RegisterScreen';
import SignInScreen from './src/Screen/SignInScreen';
import HomeScreen from './src/Screen/HomeScreen';
import OderScreen from './src/Screen/OderScreen';
import CartScreen from './src/Screen/CartScreen';
import OrderDetailsScreen from './src/Screen/OderDetails';
import CheckTotalProductDetail from './src/Screen/CheckTotalProductDetail';
import ScanPayScreen from './src/Screen/ScanPayScreen';

import { RootState } from './src/types/RootState';
import { store } from './src/app/store';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './src/Screen/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyHomeStack = () => (
  <Stack.Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SIGNUP" component={RegisterScreen} />
    <Stack.Screen name="SIGNIN" component={SignInScreen} />
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="PRODUCTS_DETAIL" component={OrderDetailsScreen} />
    <Stack.Screen name="CART_PRODUCT" component={CartScreen} />
    <Stack.Screen name="ODERSCREEN" component={OderScreen} />
    <Stack.Screen name="CHECKTOTALPRODUCTDETAIL" component={CheckTotalProductDetail} />
    <Stack.Screen name="SCAN_PAY" component={ScanPayScreen} />
    <Stack.Screen name="ACCOUNT" component={AccountScreen} />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator initialRouteName="SIGNIN" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SIGNUP" component={RegisterScreen} />
    <Stack.Screen name="SIGNIN" component={SignInScreen} />
  </Stack.Navigator>
);

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name="Home"
      component={MyHomeStack}
      options={{
        tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen 
      name="Scan/Pay"
      component={ScanPayScreen}
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name ="qrcode-scan" size={size} color={color}/>
        )
      }}
    />
    <Tab.Screen 
      name="Order"
      component={OderScreen}
      options={{
        tabBarIcon:({color, size})=>(
          <Feather name ="coffee" size={size} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>
        )
      }}
    />
     
  </Tab.Navigator>
);

const MainNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.cart.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainApp" component={TabScreen} />
      ) : (
        <Stack.Screen name="Auth" component={LoginStack} />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <TabScreen />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
