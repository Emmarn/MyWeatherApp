import axios from "axios";
import React, {useState, useCallback }  from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainscreen from "./Screens/Mainscreen";
import Screen2 from "./Screens/Screen2";



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name='Mainscreen'
        component={Mainscreen}
        options={{title: "Home"}}
      />
       <Stack.Screen
        name='Screen2'
        component={Screen2}
        options={{title: "Uv värde"}}
      />
    </Stack.Navigator>
  </NavigationContainer>

  )
}


