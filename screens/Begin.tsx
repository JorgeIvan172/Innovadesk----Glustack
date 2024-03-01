import { config } from '@gluestack-ui/config';
import { useAuth } from '../Context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, GluestackUIProvider, Text, Center, VStack, Heading, Input, InputField, Button, ButtonText, Icon, Image} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';


function Begin (){

    const navigation = useNavigation();

    const handleLoginPress = () => {
      navigation.navigate('Login'); // Navegar a la pantalla de Login
    };
  
    const handleRegisterPress = () => {
      navigation.navigate('Register'); // Navegar a la pantalla de Register
    };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Realiza la solicitud Axios aquí
    axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password,
    })
    .then(response => {
      // Manejar la respuesta exitosa
      console.log(response.data);
    })
    .catch(error => {
      // Manejar errores
      console.error('Error:', error);
      if (error.response) {
        // El servidor respondió con un estado diferente de 2xx
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error('No response received');
      } else {
        // Error durante la configuración de la solicitud
        console.error('Error setting up the request:', error.message);
      }
    });
  };
  
  


    return(
        <>
        
        <Center flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
          <Box p='$5' maxWidth='auto' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
            <VStack space='xs' pb='$4' alignItems='center'>
              <Heading lineHeight={32} color={'$white'}>
                Welcome
              </Heading>

              <Image
                width={200}
                height={32}
                resizeMode= 'stretch'
                //size="md"
                source={{
                    uri: "https://raw.githubusercontent.com/JorgeIvan172/Imagenes/master/MULTI%20-%20PROJETS/InnovaDesk%20Logo%20Blanco.png",
                }}
                />

            </VStack>
            <VStack space='xl' py='$2'>
        
            </VStack>
            <VStack space='lg' pt='$4' >
              <Button
                size='sm'
                backgroundColor={'#B35340'}
                onPress={handleLoginPress}>
                <ButtonText>
                    Inisiar Sesion
                </ButtonText>
              </Button>


              <Button
                size='sm'
                backgroundColor={'#B35340'}
                onPress={handleRegisterPress}
              >
                <ButtonText>
                    Register
                </ButtonText>
              </Button>
            </VStack>
          </Box>
        </Center>
      
        </>
    );
}

export default Begin;