import axios from "axios";
import React, {useState, useCallback }  from "react";
import { Text, Pressable, StyleSheet, View} from 'react-native'
import Cityweather from "../Components/Cityweather";


const Mainscreen = ({navigation: {navigate}}) => {


   return (
     <>
    <Cityweather/>
    <Pressable 
     onPress={() => navigate("Screen2")}>
      <Text style={styles.pressbtn}>Se UV värde</Text>
       </Pressable>
     </>
   )
   }
   const styles = StyleSheet.create({
    pressbtn:{
      fontSize: 20
    }
  });

  export default Mainscreen;







