import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {

  //Lista mocada
  const pleopeList = [
    {id:1, name:'Rubens', age:'19'},
    {id:2, name:'Gabriel', age:'17'},
    {id:3, name:'Eduardo', age:'18'},
    {id:4, name:'Wandinho', age:'18'}
  ]

  return (
    <SafeAreaView>
      {/* FlatList */}
      <FlatList
      data={pleopeList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
        //Exibir cada item da lista
        <Person name={item.name} age={item.age}/>
      )}
      />
    </SafeAreaView>
  );
};
