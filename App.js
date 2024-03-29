
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cityweather from "./Components/Cityweather";
import Peopleinfo from "./Components/Peopleinfo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import DbUtils from './Database/DbUtils';

export default function App() {
  useEffect(() => {
    DbUtils.initDB()
      .then(() => {
        console.log('Database initialized successfully');
        return DbUtils.clearTable();
      })
      .then(() => {
        console.log('Table "history" cleared successfully');
        return DbUtils.historyS();
      })
      .then(res => console.log("pragma table res", res))
      .catch(err => console.log(err));
  }, []);

  const bottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        <bottomTab.Screen
          name="Hem"
          component={Cityweather}
          options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="home" size={30} color="black"/> }}
        />
        <bottomTab.Screen
          name="Befolkningsantal"
          component={Peopleinfo}
          options={{ headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="human-queue" size={30} color="black" /> }}
        />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}



