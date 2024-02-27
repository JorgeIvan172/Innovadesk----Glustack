import { config } from '@gluestack-ui/config';
import { useAuth } from '../Context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, GluestackUIProvider, Text, Center, VStack, Heading, Input, InputField, Button, ButtonText, Icon, Image} from '@gluestack-ui/themed';



function Login  (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Realiza la solicitud Axios aquí
    axios.post('URL_DE_TU_API', {
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
    });
  };
  


    return(
        <>
        
        <Center backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
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
                />
              </Input>
              <Input>
                <InputField
                  color={'$white'}
                  py='$2'
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
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
                <Button variant='link' p='$0' size='sm'>
                  {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
                  <Icon
                    size='md'
                    mr='$1'
                    //as={ArrowLeftIcon}
                  />
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