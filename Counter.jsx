import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";
import { Text, View, Button } from "react-native";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();

  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  return (
    <View style={{ backgroundColor: "grey", margin: "10px" }}>
      <Text> {name} </Text>
      <Text> {`Votes: ${votes}`} </Text>
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleIncrement}> Increment </Button>
        <Button onClick={handleDecrement}> Decrement </Button>
      </View>
    </View>
  );
};

export default Counter;
