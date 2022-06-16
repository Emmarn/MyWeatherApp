import axios from "axios";
import React, {useState, useCallback }  from "react";
import { Text, FlatList, Pressable, StyleSheet, View, ImageBackground, TextInput, ActivityIndicator, Button } from 'react-native'


const Cityweather = () => {
 
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData ] = useState([]);

  const api = {
    key: '1dea520f4b58f06bf0281207cc312c15',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
  };

  const fetchDatahandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios({
      method:"GET",
      url:`https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=sv&units=metric&appid=${api.key}`,
    }).then(res => {
      console.log(res.data);
      setData(res.data);
    }).catch(e => console.dir(e))
    .finally(()=> setLoading(false));
    }, [api.key, input]);

    return (
      <View style={styles.root}>
        <ImageBackground
          source={require('../assets/blomma.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View>
            <TextInput
              placeholder="Skriv in önskad stad"
              style={styles.textInput}
              onChangeText={text => setInput(text)}
              placeholderTextColor={'#000'}
              onSubmitEditing={fetchDatahandler}
              value={input}
            />
          </View>
  
          {loading && (
            <View>
              <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
          )}
          {data && (
            <View style={styles.infoView}>
              <Text
                style={styles.cityCountryTexts}>
                {`${data?.name}, ${data?.sys?.country}`}</Text>
                <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
              <Text style={styles.tempText}>{`${Math.round(
                data?.main?.temp,
              )} °C`}</Text>
              <Text style={styles.minmaxText}>{`Känns som ${Math.round(
                data?.main?.feels_like,
              )} °C `}</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  };


 const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    image: {
      flex: 1,
      fledDirection: 'column',
    },
    textInput: {
      padding: 5,
      paddingVertical: 20,
      marginVertical: 100,
      marginHorizontal: 10,
      backgroundColor: "#FFF",
      fontSize: 19,
      borderRadius: 16,
    },
    infoView:{
     alignItems: 'center',
    },
    cityCountryTexts:{
     color: "#fff",
     fontSize: 40,
     fontWeight: 'bold',
    },
    dateText:{
     color: "#fff",
     fontSize: 22,
     marginVertical: 10,
    },
    tempText:{
     fontSize:45,
     color: "#fff",
     marginVertical: 10,
    },
  
     minmaxText: {
      fontSize: 22,
      color: "#fff",
      marginVertical: 10,
      fontWeight: '500',
     },
     pressbtn:{
     color: "#fff",
     fontSize: 22,
     paddingLeft: 130,
     }
    
  });

 export default Cityweather;