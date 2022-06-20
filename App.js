
import React, {useState, useCallback }  from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mainscreen from "./Screens/Mainscreen";
import Screen2 from "./Screens/Screen2";
import Cityweather from "./Components/Cityweather";
import Solarinfo from "./Components/SolarInfo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



const Stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

export default function App() {


  const mainstack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name='Mainscreen'
        component={Mainscreen}
        options={{ headerShown: false }}
      /> 
       <Stack.Screen
        name='Screen2'
        component={Screen2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>

  )
  }

  return (
  <NavigationContainer>
    <bottomTab.Navigator>
      <bottomTab.Screen
        name="Hem"
        component={Cityweather}
        options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }}
      />
      <bottomTab.Screen
        name="Befolkningsantal"
        component={Solarinfo}
        options={{ headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="human-queue" size={24} color="black" /> }}
        />
    </bottomTab.Navigator>
  </NavigationContainer>
    );
}




