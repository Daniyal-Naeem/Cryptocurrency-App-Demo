import React, {useEffect} from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Tabs from "./navigation/tabs";
import List from './auth/List';
import store from './redux/configureStore';
import {Provider} from 'react-redux'

const Stack = createStackNavigator();

const App = () => {
  useEffect(()=> {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'List'}
      >
         <Stack.Screen
          name="List"
          component={List}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return (
    <Provider store={store}>
      <App/>
     </Provider>
  )
}