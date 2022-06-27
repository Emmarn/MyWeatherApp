import axios from "axios";
import React, {useState, useCallback }  from "react";
import { Text, StyleSheet, View, ImageBackground, TextInput, ActivityIndicator } from 'react-native'


const Peopleinfo = () => {

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
        url:`https://api.openweathermap.org/data/2.5/forecast?q=${input}&lang=sv&units=metric&appid=${api.key}`
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(e => console.dir(e))
      .finally(()=> setLoading(false));
      }, [api.key, input]);
return (
    <View style={styles.root}>
    <ImageBackground
      source={require('../assets/lake.jpg')}
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
                style={styles.cityCountryText}>
                {`${data?.city?.name}, ${data?.city?.country}`}</Text>
                 <Text style={styles.tempText}>
                 {`Här bor ${data?.city?.population} personer`}
                </Text>
            </View>
          )}
    </ImageBackground>
  </View>
)

}
const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    image: {
      flex: 1,
      flexDirection: 'column',
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
    cityCountryText:{
     color: "#FFF",
     fontSize: 40,
     fontWeight: 'bold',
    },
    tempText:{
     fontSize:30,
     color: "#FFF",
     marginVertical: 10,
    },
  });


export default Peopleinfo;