import React from 'react'
import {Alert, AlertIcon, AlertText} from '@gluestack-ui/themed';

export default function Alertt() {
  return (
      <>
      <Alert mx='$2.5'  action="warning" variant="outline" >
          <AlertIcon as={InfoIcon} mr="$3"  />
          <AlertText>
            Todos los campos son obligatorios
          </AlertText>
        </Alert>
    </>
  )
}
