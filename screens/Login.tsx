import { config } from '@gluestack-ui/config';
import { useAuth } from '../Context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, GluestackUIProvider, Text, Center, VStack, Heading, Input, InputField, Button, ButtonText, Icon, Image} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

interface LoginResponse {
  name: string;
  email: string;
  phone: string;
  // Añade otros campos según sea necesario
}

function Login  (){
  const {login} = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBackPress = () => {
    navigation.goBack(); // Volver a la pantalla anterior
  };

  const handleLogin = () => {
    axios
      .post('http://localhost/InnovaDesk---Backend/public/api/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        // Manejar la respuesta exitosa
        const userData = response.data;
        login(userData);
        console.log('Bienvenido:', userData);
        navigation.navigate('Profile')
      })
      .catch((error) => {
        // Manejar errores
        console.error('Error al iniciar sesión:', error);
  
        if (error.response) {
          // El servidor respondió con un estado diferente de 2xx
          console.error('Status:', error.response.status);
          console.error('Data:', error.response.data);
  
          if (error.response.status === 401) {
            // Credenciales incorrectas
            console.error('Credenciales incorrectas');
            // Puedes mostrar un mensaje al usuario indicando que las credenciales son incorrectas
          }
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
        
        <Center flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'} >
          <Box p='$5' maxWidth='$96' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
            <VStack space='xs' pb='$4' alignItems='center'>
              <Heading lineHeight={32} color={'$white'}>
                Welcome Login
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
              <Input>
                <InputField
                  py='$2'
                  color={'$white'}
                  placeholder="Email Adress"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  onBlur={() => console.log('El campo de entrada ha perdido el foco')}
                />
              </Input>
              <Input>
                <InputField
                  color={'$white'}
                  py='$2'
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  onBlur={() => console.log('El campo de entrada ha perdido el foco')}
                />
              </Input>
            </VStack>
            <VStack space='lg' pt='$4' >
              <Button
                size='sm'
                backgroundColor={'#B35340'}
                onPress={handleLogin}
              >
                <ButtonText>
                    Access
                </ButtonText>
              </Button>
              <Box flexDirection='row'>
                <Button variant='link' p='$0' size='sm' onPress={handleBackPress}>
                  {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
                  <ButtonText color={'#B35340'}
                  >
                    Back
                  </ButtonText>
                </Button>
              </Box>
            </VStack>
          </Box>
        </Center>
      
        </>
    );
}

export default Login;