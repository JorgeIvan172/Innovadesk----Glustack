import React from 'react'
import {
    HStack,
    Avatar, 
    AvatarFallbackText,
    AvatarImage,
    Center,
    Text, Button, ButtonText,
    FormControl,
    Box
  } from '@gluestack-ui/themed';
  import { useAuth } from '../Context/AuthContext';

  export default function Profile() {
    const { userData } = useAuth();

    const isAdmin = userData && userData.length > 0 && userData[0].email.endsWith('admin@gmail.com');
  
    return (
      <Center flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
      <HStack space="sm" justifyContent="center" alignItems="center">
        <Avatar size="xl">
          <AvatarFallbackText>Your Profile</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://raw.githubusercontent.com/JorgeIvan172/Imagenes/master/MULTI%20-%20PROJETS/Avatar.png',
            }}
          />
        </Avatar>
      </HStack>
      <Box paddingTop={'$5'} alignItems="center">
        {userData && userData.length > 0 ? (
          <>
            <Text size="lg" color={"white"}>
              {userData[0].name}
            </Text>
            <Text size="lg" color={"white"} alignItems="center">
              {userData[0].email}
            </Text>

            <Button marginTop={'$5'} size='sm' backgroundColor={'#B35340'} width={'$32'}>
              <ButtonText>Edit Profile</ButtonText>
            </Button>

            {isAdmin && (
              <Button marginTop={'$5'} size="sm" backgroundColor={'#B35340'} width={'$32'}>
                <ButtonText>Admin</ButtonText>
              </Button>
            )}
          </>
        ) : (
          <Text size="lg" color={"white"} alignItems="center">
            User not logged in.
          </Text>
        )}
      </Box>
    </Center>
    );
  }


{/*


*/}

