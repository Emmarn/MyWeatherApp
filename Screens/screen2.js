import { View, ImageBackground, StatusBar, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withNavigation } from 'react-navigation';



const Screen2 = () => {

    return (
        <View style={styles.screen2}>
            <ImageBackground
                source={require('../assets/blomma.jpg')}
                reziseMode='cover'
                style={styles.imgback2}/>
        </View>
    )

}

export default Screen2;