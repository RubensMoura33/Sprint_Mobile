import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { Andika_400Regular_Italic } from '@expo-google-fonts/andika';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Kanit_700Bold, Andika_400Regular_Italic, Inter_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./src/assets/escudo_um.jpg')}/>
      <Text style={styles.text}>LOGIN</Text>

      <View style={styles.viewEmail}>
      <Text style={styles.labelEmail}>Email:</Text>
      <TextInput
      style={styles.inputs}
      placeholder='Insira o email...'
      placeholderTextColor={'black'} />
      </View>

      <View style={styles.viewSenha}>
      <Text style={styles.labelSenha}>Senha:</Text>
      <TextInput
      style={styles.inputs}
      placeholder='Insira a senha...'
      placeholderTextColor={'black'} />
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
    fontSize: 35,
    fontFamily: 'Kanit_700Bold'
  },

  labelEmail:{
    fontSize: 15,
    fontFamily:'Inter_600SemiBold',
    paddingBottom: 10,
    paddingLeft: 5
  },

  viewEmail: {
    width: '100%',
    marginLeft: '30%'
  },

  viewSenha: {
    width: '100%',
    marginLeft: '30%'
  },

  labelSenha:{
    fontSize: 15,
    fontFamily:'Inter_600SemiBold',
    paddingBottom: 10,
    paddingLeft: 5
  },
  inputs: {
    width:'70%',
    height:50,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10
  },
  btn: {
    width: '85%',
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
    fontSize: 20,
    fontFamily: 'Kanit_700Bold'
  }
});
