import { Icon, Text, Pressable, StyleSheet} from "react-native";
import Peopleinfo from "../Components/Peopleinfo";



const Screen2 = ({navigation:{goBack}}) => {

    return (
        <>
            <SolarInfo/>
            <Pressable
                onPress={() => goBack()}
                style={styles.uvpeoplescreen}>
                <Text style={styles.tbx}> Tillbaka</Text>
                </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    peoplescreen:{
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