import axios from "axios";
import React, {useState, useCallback }  from "react";
import { Text, Pressable, StyleSheet, View, PermissionsAndroid} from 'react-native'
import Cityweather from "../Components/Cityweather";


const Mainscreen = ({navigation: {navigate}}) => {
  
   return (
     <>
    <Cityweather />
    <Pressable 
    style={styles.pressbtn}
           onPress={() => navigate("Screen2")}>
          <Text style={styles.textstyle}>Se UV värde</Text>
       </Pressable>
     </>
   )
   }
   const styles = StyleSheet.create({
    pressbtn:{
      alignItems: 'center',
      padding: 20,
      fontSize: 40,
      backgroundColor: '#000',
    },
    textstyle: {
      fontSize: 30,
      color: "#fff"
    }
  });

  export default Mainscreen;







