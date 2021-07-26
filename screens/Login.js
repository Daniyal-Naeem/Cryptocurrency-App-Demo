import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Button, TextInput, Surface} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
// import {useDispatch} from 'react-redux'
// import {signinUser} from '../reducer/authReducer'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});


const Login = ({navigation}) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
//   const dispatch  = useDispatch()

//   const handleSubmit = () => {
//     dispatch(signinUser({email,password}))

//     setEmail("")
//     setPassword("")
//   };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#fbb521',
              height: '70%',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              paddingHorizontal: 20,
            }}>
            <View style={styles.header}>
              <Text style={styles.text_header}>Login</Text>
            </View>
          </View>
          <Surface style={styles.surface}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, errors}) => (
                <>
                  <View style={styles.action}>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      placeholder="Your Email"
                      keyboardType="email-address"
                      style={styles.textInput}
                      autoCapitalize="none"
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
                  <TouchableOpacity>
                    <Text style={{color: '#663399', marginTop: 15}}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.button}>
                    <Button
                      mode="contained"
                      color="#fbb521"
                      style={{width: 250, height: 50, borderRadius: 10}}
                      onPress={() => handleSubmit()}>
                      Login
                    </Button>
                    <Button
                      mode="Text"
                      onPress={() => navigation.navigate('Sign Up')}>
                      CREATE ACCOUNT
                    </Button>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 40,
    marginTop: -250,
  },

  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  text_header: {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
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