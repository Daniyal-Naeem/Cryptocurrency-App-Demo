import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { GET_ALL_USER_INFO_REQUEST } from "../user/actions";

const mapStateToProps = (state, props) => {
  const { id, name, email } = state.user;

  return { id, name, email };
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const HomeView = ({ id, name, email, getAllUserInfo, navigation }) => {
  // navigation.navigate('Login')

  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);

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
