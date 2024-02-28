import React from 'react'
import {
    HStack,
    Avatar, 
    AvatarFallbackText,
    AvatarImage,
    Center,
    Text
  } from '@gluestack-ui/themed';

export default function Profile() {
  return (
    <>
    <Center backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
    <HStack space="md" h="100%" justifyContent="center" alignItems="center">
    <Avatar size="2xl">
      <AvatarFallbackText>Your Profile</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: 'https://raw.githubusercontent.com/JorgeIvan172/Imagenes/master/MULTI%20-%20PROJETS/Avatar.png',
        }}
      />
    </Avatar>
</HStack>
        <Text size="2xl" color={"white"}>Tu Nombre</Text>
        <Text size="2xl" color={"white"}>Tu Email</Text>
        <Text size="2xl" color={"white"}>Tu Phone</Text>
</Center>
</>
  )
}
