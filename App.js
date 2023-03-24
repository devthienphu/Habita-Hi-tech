import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from './src/screens/signIn';
import Started from './src/screens/started';
import SignUp from './src/screens/signUp';
import Home from './src/screens/home';
import Room from './src/screens/room';
import Profile from './src/screens/profile';
import Statistic from './src/screens/statistic';

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Started"
          screenOptions={ stackOptions }
        >
          <Stack.Screen name="Onboard" component={Started} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Room" component={Room} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Statistic" component={Statistic} />


        </Stack.Navigator>
      </NavigationContainer>
  );
}