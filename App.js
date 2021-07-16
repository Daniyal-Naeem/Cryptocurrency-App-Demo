import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import store from './redux/configureStore';
import {Provider} from 'react-redux'
// import HomeStackNavigator from './navigation/homeNavigation';
import AuthNavigator from './navigation/authNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  // const token = useSelector(state => state.user.token)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(addToken())
  // },[])
  useEffect(()=> {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      {/* {token ?  <HomeStackNavigator/> : <AuthNavigator />} */}
      <AuthNavigator/>
    </NavigationContainer>
  )
}

export default ()=>{
  return (
    <Provider store={store}>
      <App/>
     </Provider>
  )
}