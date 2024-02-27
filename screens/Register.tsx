import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Heading,
  Input,
  InputField,
  Button,
  ButtonText,
  Icon,
  Image,
  Center,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';



function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleBackPress = () => {
    navigation.goBack(); // Volver a la pantalla anterior
  };

  const handleRegister = () => {
    // Realiza la solicitud Axios para registrar usuarios aquí
    axios
      .post('http://127.0.0.1:8000/api/register', {
        email: email,
        password: password,
      })
      .then((response) => {
        // Manejar la respuesta exitosa
        console.log(response.data);
      })
      .catch((error) => {
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

  return (
    <>
      <Center backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
        <Box
          p='$5'
          maxWidth='$96'
          borderWidth='$1'
          borderColor='$backgroundLight300'
          borderRadius='$lg'
          $dark-borderColor='$backgroundDark700'
        >
          <VStack space='xs' pb='$4' alignItems='center'>
            <Heading lineHeight={32} color={'$white'}>
              Welcome Register
            </Heading>

            <Image
              width={200}
              height={32}
              resizeMode='stretch'
              source={{
                uri:
                  'https://raw.githubusercontent.com/JorgeIvan172/Imagenes/master/MULTI%20-%20PROJETS/InnovaDesk%20Logo%20Blanco.png',
              }}
            />
          </VStack>
          <VStack space='xl' py='$2'>

          <Input>
              <InputField
                py='$2'
                color={'$white'}
                placeholder='Name'
                value={name}
                onChangeText={(text) => setName(text)}
                onBlur={() => console.log('El campo de entrada ha perdido el foco')}
              />
            </Input>

            <Input>
              <InputField
                py='$2'
                color={'$white'}
                placeholder='Email Adress'
                value={email}
                onChangeText={(text) => setEmail(text)}
                onBlur={() => console.log('El campo de entrada ha perdido el foco')}
              />
            </Input>
            <Input>
              <InputField
                color={'$white'}
                py='$2'
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                onBlur={() => console.log('El campo de entrada ha perdido el foco')}
              />
            </Input>

            <Input>
              <InputField
                py='$2'
                color={'$white'}
                placeholder='Phone'
                value={phone}
                onChangeText={(text) => setPhone(text)}
                onBlur={() => console.log('El campo de entrada ha perdido el foco')}
              />
            </Input>


          </VStack>
          <VStack space='lg' pt='$4'>
            <Button size='sm' backgroundColor={'#B35340'} onPress={handleRegister}>
              <ButtonText>Register</ButtonText>
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

export default Register;
