import axios from "axios";
import React, {useState, useCallback }  from "react";
import { Text, FlatList, Pressable, StyleSheet, View, ImageBackground, TextInput, ActivityIndicator } from 'react-native'
import Mainscreen from "./Screens/Mainscreen";
import Screen2 from "./Screens/screen2";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withNavigation } from 'react-navigation';
import Cityweather from "./Components/Cityweather";
import Weatherinfo from "./Components/weatherInfo";


export default function App() {
  
  const NativeStack = createNativeStackNavigator()

  return (
    <NavigationContainer>
    <NativeStack.Navigator>
      <NativeStack.Screen
        options={{ headerShown: false }}
        name='MainScreen'
        component={Cityweather}
      />
      <NativeStack.Screen
        name='Screen2'
        component={Weatherinfo}
      />
    </NativeStack.Navigator>
  </NavigationContainer>

  )
}


