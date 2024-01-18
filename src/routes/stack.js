import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tabs';
//import Home from '../pages/Home';
import Login from '../pages/Login';
import Config from '../pages/Config';
import IntroSlider from '../pages/IntroSlider';
import RecuperarSenha from '../pages/Login/subPages/Recuperar/index'
import FormaRecuperarSenha from '../pages/Login/subPages/FormaRecuperarSenha/index'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='IntroSlider' screenOptions={{headerShown: true}}>
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: 'white' },
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

      <Stack.Screen
        name='RecuperarSenha'
        component={RecuperarSenha}
        options={{
          title: 'RecuperarSenha',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      /> 

      <Stack.Screen
        name='FormaRecuperarSenha' 
        component={FormaRecuperarSenha}
        options={{
          title: 'FormaRecuperarSenha',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      /> 

      

      
    </Stack.Navigator>
  );
}
