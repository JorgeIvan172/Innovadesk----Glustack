import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { AuthProvider } from './Context/AuthContext';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { CartProvider } from './Context/CartContext';

import Login from './screens/Login';
import Register from './screens/Register';
import Begin from './screens/Begin';
import Menu from './screens/Menu';
import OneProduct from './screens/OneProduct';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <CartProvider>
    <AuthProvider>
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, // Oculta la barra superior en todas las pantallas
        }}>
          {/* 
          <Stack.Screen name="Products" component={Products} />
          
          */}

          <Stack.Screen name="Menu" component={Menu} />

          <Stack.Screen name="Begin" component={Begin} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          
          <Stack.Screen name="OneProduct" component={OneProduct} />
          
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    </AuthProvider>
    </CartProvider>
  );
}


