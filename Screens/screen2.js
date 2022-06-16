import { View, Text, Pressable, StyleSheet} from "react-native";
import SolarInfo from "../Components/SolarInfo";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Font} from 'expo';




const Screen2 = ({navigation:{ goBack}}) => {

    return (
        <>
            <SolarInfo/>
            <Pressable
                onPress={() => goBack()}
                style={styles.uvscreen}>
                <Text style={styles.tbx}>  Tillbaka</Text>
                <Icon name="rocket" size={30} color="#900" />
                </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    uvscreen:{
      alignItems: 'center',
      padding: 20,
      fontSize: 40,
      backgroundColor: '#000',
    },
    tbx: {
      fontSize: 30,
      color: "#fff"
    }
  });


export default Screen2;