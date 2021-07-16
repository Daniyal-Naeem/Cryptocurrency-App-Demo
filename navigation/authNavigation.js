import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen"


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator  screenOptions={{ headerShown: false, headerTitle:true}}>
    <Stack.Screen name="Sign in" component={SignInScreen} />
    <Stack.Screen name="Sign Up" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;