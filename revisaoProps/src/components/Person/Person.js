//Componente Person

import { StyleSheet, Text, View } from "react-native";

//props: name, age
const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>
            <Text style={styles.age}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'gray',
        margin:10,
        padding:10,
        borderRadius:8
    },
    name: {
        fontSize: 25,
        color:'white'
    },
    age: {
        fontSize: 15,
        color:'blue'
    }
})

export default Person;

