 import { View, Text } from 'react-native'
 import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Home from './src/screens/Home';


const Stack = createStackNavigator();


 const App = () => {
   return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
   )
 }
 
 export default App