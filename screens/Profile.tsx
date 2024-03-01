import React from 'react'
import {
    HStack,
    Avatar, 
    AvatarFallbackText,
    AvatarImage,
    Center,
    Text, Button, ButtonText,
    FormControl
  } from '@gluestack-ui/themed';
  import { useAuth } from '../Context/AuthContext';

  export default function Profile() {
    const { userData } = useAuth();
  
    return (
      <Center flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
        <HStack space="md" h="100%" justifyContent="center" alignItems="center">
          <Avatar size="xl">
            <AvatarFallbackText>Your Profile</AvatarFallbackText>
            <AvatarImage
              source={{
                uri:'https://raw.githubusercontent.com/JorgeIvan172/Imagenes/master/MULTI%20-%20PROJETS/Avatar.png',
              }}
            />
          </Avatar>
        </HStack>
        {userData && userData.length > 0 ? (
        <>
          <Text size="lg" color={"white"}  alignItems="center" >{userData[0].name}</Text>
          <Text size="lg" color={"white"}   alignItems="center">{userData[0].email}</Text>
          {/*<Text size="xl" color={"white"}>{userData[0].phone}</Text>*/}
          <Button size='sm' backgroundColor={'#B35340'}>
              <ButtonText>Edit Profile</ButtonText>
            </Button>
        </>
      ) : (
        <Text>User not logged in.</Text>
      )}
      </Center>
    );
  }

