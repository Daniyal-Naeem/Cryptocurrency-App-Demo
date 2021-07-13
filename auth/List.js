import React, {useEffect} from "react";
import {Text, View, Button, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/ducks/userSlice";
const List = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const voters = [
  //  {id: "Anthony Sistilli "},
  //  {id: "Bob Smith"},
  //  {id: "Stephanie Foo"},
  //   {id:"Kevin Ma"}
  // ];
  useEffect(() => {
    dispatch(getUser());
}, []);
  return (
    <View style={styles.container}>
    {user && <Text> Hello, {user.firstName} </Text>}
      <Text>Redux made easy</Text>
      <Text> All Employees:</Text>
      <FlatList
       padding ={30}
         data={user}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({item}) => 
         <View style={{height: 50}}>
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
