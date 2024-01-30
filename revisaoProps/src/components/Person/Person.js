//Componente Person

import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

//Fonts
import { Kanit_700Bold } from "@expo-google-fonts/kanit";
import { Alkalami_400Regular} from "@expo-google-fonts/alkalami"

//props: name, age
const Person = ({name, age}) => {

const [fontsLoaded, fontError] = useFonts({
    Kanit_700Bold, Alkalami_400Regular
})

if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>
            <Text style={styles.age}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#BD3E22',
        margin:10,
        padding:10,
        borderRadius:8,
        borderColor:'black',
        borderWidth:3
    },
    name: {
        fontSize: 25,
        color:'white',
        fontFamily: 'Kanit_700Bold'
    },
    age: {
        fontSize: 20,
        color:'#0D83CF',
        fontFamily: 'Alkalami_400Regular'
    }
})

export default Person;

