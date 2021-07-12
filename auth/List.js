import React from "react";
import {Text, View, Button, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";
import Counter from '../Counter';
const List = ({navigation}) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const voters = [
   { id:"Anthony Sistilli "},
   {id: "Bob Smith"},
   {id:"Stephanie Foo"},
   { id:"Kevin Ma"}
  ];
  return (
    <View style={styles.container}>
      <Text>Redux made easy</Text>
      <Text> Total Votes: {count}</Text>
      <FlatList
      data={voters}
      keyExtractor={(item) => item.id}
      renderItem={({item})=> {
        return(
          <Counter name={voter} />
          )
        }}
        >
        <Button title="Increment" onPress={()=> dispatch(increment())}/>
        <Button title="Decrement" onPress={()=> dispatch(decrement())}/>
 
      </FlatList>
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
