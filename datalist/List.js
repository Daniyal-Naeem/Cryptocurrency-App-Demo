import React, {useEffect} from "react";
import {Text, View, Button, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/ducks/userSlice";
const List = ({navigation}) => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
useEffect(() => {
  dispatch({'type': 'get-user'});
}, []);
  return (
    <View style={styles.container}>
   <Text> Hello,</Text>
      <Text>Redux made easy</Text>
      <Text> All Employees:</Text>
      <FlatList
       padding ={30}
         data={user}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({item}) => 
         <View style={{height: 50, flexDirection: 'row'}}>
         <Text style={{height: 50}}>{item.id}</Text>
         <Text style={{height: 50}}>{item.firstName}</Text>
         <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
        />
      <Button title='NEXT' onPress={() => navigation.navigate("Home")}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default List;
