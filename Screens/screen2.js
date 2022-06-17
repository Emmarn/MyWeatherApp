import { Icon, Text, Pressable, StyleSheet} from "react-native";
import SolarInfo from "../Components/SolarInfo";



const Screen2 = ({navigation:{goBack}}) => {

    return (
        <>
            <SolarInfo/>
            <Pressable
                onPress={() => goBack()}
                style={styles.uvscreen}>
                <Text style={styles.tbx}>  Tillbaka</Text>
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