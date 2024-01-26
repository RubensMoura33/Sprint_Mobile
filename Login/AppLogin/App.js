import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./src/assets/escudo_um.jpg')}/>
      <Text style={styles.text}>LOGIN</Text>

      <View style={styles.form}>
      <Text style={styles.labels}>Email:</Text>
      <TextInput
      style={styles.inputs}
      defaultValue='Insira o email...' />
      </View>

      <View style={styles.form}>
      <Text style={styles.labels}>Senha:</Text>
      <TextInput
      style={styles.inputs}
      defaultValue='Insira a senha...' />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

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
    gap: 50
  },
  image: {
    width: '50%',
    height: '20%'
  },
  text: {
    fontSize: 35
  },
  form: {
    flexDirection: 'row'
  },
  labels:{
    fontSize: 15,
    paddingRight: 10,
    paddingTop:15
  },
  inputs: {
    width:'60%',
    height:50,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10
  },
  btn: {
    width: '80%',
    height: 60,
    borderWidth:2,
    borderColor: 'white',
    backgroundColor: 'black',
    marginTop: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8
  },
  btnText: {
    color:'white',
    fontSize: 20
  }
});
