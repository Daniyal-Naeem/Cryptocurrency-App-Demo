import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register"


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator  screenOptions={{ headerShown: false, headerTitle:true}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthNavigator;