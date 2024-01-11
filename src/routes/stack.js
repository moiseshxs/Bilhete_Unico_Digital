import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true}}>
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          
        }}
      />
      
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          
        }}
      />
    </Stack.Navigator>
  );
}
