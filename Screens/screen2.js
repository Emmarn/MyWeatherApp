import { View, Text, Pressable } from "react-native";
import SolarInfo from "../Components/SolarInfo";



const Screen2 = ({navigation:{ goBack}}) => {

    return (
        <>
            <SolarInfo/>
            <Pressable
                onPress={() => goBack()}>
                <Text>Tillbaka</Text>
                </Pressable>
        </>
    )
}

export default Screen2;