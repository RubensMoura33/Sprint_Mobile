import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[count, setCount] = useState(0);

  useEffect(() => {
    console.warn(`contador atualizado: ${count}`)
  },[count])

  //Funcao para incrementar 
  const increment = () => {
    setCount (count + 1);
  }

  //Funcao para decrementar
  const decrement = () => {
    setCount (count -1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>Contador: {count}</Text>

      <View style={styles.box}>
      <TouchableOpacity style={styles.btn} onPress={increment}>
        <Text style={styles.text}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={decrement}>
        <Text style={styles.text}>Decrementar</Text>
      </TouchableOpacity>
      </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  btn:{
    borderWidth:3,
    borderColor:'white',
    margin:5,
    padding: 5,
    borderRadius:5,
    width:'40%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'black'
  }, 
  box: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize:20
  },
  title:{
    fontSize:45,
    color: 'white'
  }, 
  card : {
    borderWidth: 2,
    borderColor:'white',
    borderRadius:10,
    margin:5,
    padding:25,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black'
  }
});
