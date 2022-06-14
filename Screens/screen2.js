import { View, ImageBackground, StatusBar, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Mainscreen from './Mainscreen';
import Weatherinfo from "../Components/weatherInfo";


const Screen2 = () => {

    return (
        <View style={styles.screen2}>
            <Weatherinfo/>
        </View>
    )

}

export default Screen2;