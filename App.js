import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

//screens
import Login from './components/screens/Login';
import DashBorard from './components/screens/dashboard';
import SingUp from './components/screens/SingUp';



export default function App() {

  const [loginStatus, setLoginState] = useState('Login');
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('LoginSave')
        if (value !== null) {
          setLoginState(value)
        }
      } catch (e) {
      }
    }
    getData();


  })
  
  function CheckState(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={loginStatus}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="DashBorard" component={DashBorard} options={{ headerShown: false, headerBackVisible: false }} />
          <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false, headerBackVisible: false }} />
  
  
        </Stack.Navigator>
      </NavigationContainer>)
  }
  return(
    <CheckState></CheckState>
  )


}

