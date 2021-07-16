import { CryptoDetail, Transaction } from "../screens";
import Tabs from "../navigation/tabs";
import List from '../auth/List';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator
          initialRouteName={'List'}
          screenOptions={{
            headerShown: false
          }}
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
    )
}

export default HomeStackNavigator;