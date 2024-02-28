import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';

import Login from './screens/Login';
import Register from './screens/Register';
import Begin from './screens/Begin';
import Products from './screens/Products';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, // Oculta la barra superior en todas las pantallas
        }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Begin" component={Begin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Register" component={Register} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}


