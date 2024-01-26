import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <Person name='Rubens' age='18'/>
      <Person name='Gabriel' age='18'/>
      <Person name='Wanderson' age='18'/>
      <Person name='Gustavo' age='18'/>
    </SafeAreaView>
  );
};
