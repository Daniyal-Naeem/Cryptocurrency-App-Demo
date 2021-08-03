import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';
import {Button, TextInput, Surface} from 'react-native-paper';

import {Formik} from 'formik';
import * as Yup from 'yup';

// import {useDispatch} from 'react-redux'
// import {signupUser} from '../reducer/authReducer'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Register = ({navigation}) => {
 
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
//   const dispatch  = useDispatch()

//   const handleSubmit = () => {
//     dispatch(signupUser({email,password}))

//     setEmail("")
//     setPassword("")
//   };

  return (
    <KeyboardAvoidingView style={{flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}} bounces={false}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#fbb521',
            height: '70%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingHorizontal: 20,
          }}>
              {/* <Image
                    source={require('../assets/icons/back-arrow.png')}
                    style={{
                      height:10,
                      width:30,
                      marginTop:30
                    }}
               /> */}
          <View style={styles.header}>
            <Text style={styles.text_header}>Sign Up</Text>
          </View>
        </View>
        <Surface style={styles.surface}>
        <Formik
              initialValues={{email: '', password: '',name:''}}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, errors}) => (
                <>
          <View style={styles.action}>
            <TextInput
              mode="outlined"
              label="Name"
              name="name"
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={handleChange('name')}
            />
          </View>
          <Text style={{color:'red'}}>{errors.name}</Text>
          <View style={styles.action}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
          </View>
          <Text style={{color:'red'}}>{errors.email}</Text>
          <View style={styles.action}>
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Your Password"
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={handleChange("password")}
            />
          </View>
          <Text style={{color:'red'}}>{errors.password}</Text>
          <View style={styles.button}>
            <Button
              mode="contained"
              color="#fbb521"
              style={{width: 250, height: 50, borderRadius: 10}}
              onPress={handleSubmit}>
              Sign Up
            </Button>
            <Text>OR CONTINUE WITH</Text>
            <View style={styles.action}>
              <Button
                mode="outlined"
                style={{borderWidth: 2, borderRadius: 10}}
                onPress={() => navigation.navigate('Profile')}>
                GOOGLE
              </Button>
              <Button
                mode="outlined"
                style={{borderWidth: 2, borderRadius: 10, marginRight:20}}
                onPress={() => navigation.navigate('Competition')}>
                FACEBOOK
              </Button>
            </View>
          </View>
          </>
              )}
            </Formik>
        </Surface>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '65%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 40,
    marginTop: -300,
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: -15,
  },
  text_header: {
    alignItems: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});