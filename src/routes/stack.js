import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tabs';
//import Home from '../pages/Home';
import Login from '../pages/Login';
import Config from '../pages/Config';
import IntroSlider from '../pages/IntroSlider';
import RecuperarSenha from '../pages/Login/subPages/Recuperar/index'
import FormaRecuperarSenha from '../pages/Login/subPages/FormaRecuperarSenha/index'
import NovaSenha from '../pages/Login/subPages/NovaSenha/index';
import Cadastro from '../pages/Cadastro/index';
import ConfirmarCadastro from '../pages/Cadastro/subPages/ConfirmarCadastro/index';
import CodigoCadastro from '../pages/Cadastro/subPages/CodigoCadastro/index'
import DefinirSenha from '../pages/Cadastro/subPages/DefinirSenha/index'
import QtdPassagens from '../pages/Carteira/subPages/qtdPassagens';
import ConfirmarPagamento from '../pages/Carteira/subPages/confirmarPagamento';

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

      <Stack.Screen
        name='NovaSenha' 
        component={NovaSenha}
        options={{
          title: 'NovaSenha',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      /> 

      <Stack.Screen
        name='Cadastro' 
        component={Cadastro}
        options={{
          title: 'Cadastro',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      /> 

      <Stack.Screen
        name='ConfirmarCadastro' 
        component={ConfirmarCadastro}
        options={{
          title: 'ConfirmarCadastro',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      /> 

        <Stack.Screen
        name='CodigoCadastro' 
        component={CodigoCadastro}
        options={{
          title: 'ConfirmarCadastro',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='DefinirSenha' 
        component={DefinirSenha}
        options={{
          title: 'ConfirmarCadastro',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='QtdPassagens' 
        component={QtdPassagens}
        options={{
          title: 'Recarga',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='ConfirmarPagamento' 
        component={ConfirmarPagamento}
        options={{
          title: '',
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'black',
          headerShown: true,
        }}
      />

      
    </Stack.Navigator>
  );
}
