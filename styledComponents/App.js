import { StatusBar } from 'expo-status-bar';

//Hooks
import { useEffect, useState } from 'react';

//Styled Components
import { Box, Card, Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { Btn, BtnText, DecrementBtn, DrecrementText } from './src/components/Button/Button';
import { Img } from './src/components/Image/Image';

//Fonts
import { Kanit_700Bold } from "@expo-google-fonts/kanit";
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';


export default function App() {

const[count, setCount] = useState(0);

const [fontsLoaded, fontError] = useFonts({
    Kanit_700Bold,Inter_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  //Funcao para incrementar 
  const increment = () => {
    setCount (count + 1);
  }

  //Funcao para decrementar
  const decrement = () => {
    setCount (count -1)
  }

  return (
    <Container >
      <Img source={require('./src/assets/calculadora.jpg')}/>
      <Card >
      <Title >Contador: {count}</Title>

      <Box>
      <Btn onPress={increment}>
        <BtnText >Incrementar</BtnText>
      </Btn>

      <DecrementBtn  onPress={decrement}>
        <DrecrementText >Decrementar</DrecrementText>
      </DecrementBtn>
      </Box>
      </Card>

      <StatusBar style="auto" />
    </Container>
  );
}


