import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/ducks/user";


const HomeView = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);
 
  return (
    <View style={{ flex: 1 }}>
       <View style={styles.App}>
      {user && <Text> Hello, {user.firstName} </Text>}
    </View>
      <View style={{ width: "80%", marginLeft: 40, marginTop: 10 }}>
        <Button title="Click me" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
};

export default HomeView;


