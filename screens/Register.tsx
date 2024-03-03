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
  Image,
  Center,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';
import Alertt from './Alert';



function Register() {
  const navigation = useNavigation();
  const {login} = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleBackPress = () => {
    navigation.goBack(); // Volver a la pantalla anterior
  };

  const handleRegister = () => {

    
    if (!name || !email || !password || !phone || !address) {
      // Al menos uno de los campos está vacío
      console.error('Todos los campos son obligatorios');
      <Alertt />
      // Puedes mostrar un mensaje al usuario indicando que todos los campos son obligatorios
      return;
    }



    // Realiza la solicitud Axios para registrar usuarios aquí
    axios
    .post('http://localhost/InnovaDesk---Backend/public/api/register', {
      name, 
      email,
      password,
      phone,
      address,
      // ... otros datos del formulario
    })
    .then(response => {
      // Manejar la respuesta exitosa
      const registeredUser = response.data;
      login(registeredUser); // Almacena la información del usuario en el contexto de autenticación
      console.log('Usuario registrado:', registeredUser);
      navigation.navigate('Profile', { user: response.data }); 
    })
    .catch(error => {
      // Manejar errores
      console.error('Error:', error);
      if (error.response) {
        // El servidor respondió con un estado diferente de 2xx
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        // Puedes mostrar un mensaje al usuario indicando que hubo un problema en el servidor
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
      <Center flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
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

            <Input>
              <InputField
                py='$2'
                color={'$white'}
                placeholder='Adress'
                value={address}
                onChangeText={(text) => setAddress(text)}
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
