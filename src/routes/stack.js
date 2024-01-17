import { createNativeStackNavigator } from '@react-navigation/native-stack'

//import Home from '../pages/Home';
import Login from '../pages/Login';
import Config from '../pages/Config';

import Tabs from './tabs';
import IntroSlider from '../pages/IntroSlider';
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='IntroSlider' screenOptions={{headerShown: true}}>
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: 'purple' },
          headerTintColor: 'white',
          headerShown: false,
        }}
      />
      
      <Stack.Screen 
        name='Home'
        component={Tabs}
        options={{
          title: 'Inicio',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name='Config'
        component={Config}
        options={{
          title: 'Configurações',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name='IntroSlider'
        component={IntroSlider}
        options={{
          title: 'IntroSlider',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      />  

      
    </Stack.Navigator>
  );
}
