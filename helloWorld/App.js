import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REI DO REACT</Text>

      <TextInput
      style={styles.input}
      defaultValue='Rubens o brabo'/>

      <TouchableOpacity style={styles.btn}>
        <Text>Neymar</Text>
      </TouchableOpacity>

      <Image style={styles.image} source={require('./src/assets/neyney.jpeg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
   text: {
    fontSize: 100,
    color: '#ffffff'
   },
   input: {
    width:'50%',
    height:40,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10
   },
   image: {
    width: '50%',
    height: '20%'
   },

   btn: {
    width: '70%',
    height: 40,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor: 'yellow',
    marginTop: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8
   }
});
