import React from "react";
import { View, Text, Button } from "react-native";


const HomeView = ({ id, name, email, navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
      <View style={{ width: "80%", marginLeft: 40, marginTop: 10 }}>
        <Button title="Click me" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
};

const Login = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export { Login };
