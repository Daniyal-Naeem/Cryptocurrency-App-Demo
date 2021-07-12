import React from "react";
import {Text, View, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

const List = ({navigation}) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Redux made easy</Text>
      <Text> Total Votes: {count}</Text>
      <View style={{width:'80%',padding:30}}>
        <Button title="Increment" onPress={()=> dispatch(increment())}/>
        <Button title="Decrement" onPress={()=> dispatch(decrement())}/>
      </View>
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
