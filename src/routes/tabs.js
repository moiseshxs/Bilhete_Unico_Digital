import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Carteira from '../pages/Carteira';
import QrCode from '../pages/QrCode';
import Ajuda from '../pages/Ajuda';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'red', tabBarStyle: {backgroundColor: '#fff',}}}>
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen 
        name='Carteira'
        component={Carteira}
        options={{
          tabBarIcon: ({color, size}) => <AntDesign name='wallet' color={color} size={size} />,
          tabBarLabel: 'Carteira'
        }}
      />

      <Tab.Screen 
        name='QrCode'
        component={QrCode}
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='qrcode-scan' color={color} size={size} />,
          tabBarLabel: 'QrCode'
        }}
      />

      <Tab.Screen 
        name='Ajuda'
        component={Ajuda}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='help-circle' color={color} size={size} />,
          tabBarLabel: 'Ajuda'
        }}
      />
    </Tab.Navigator>
  );
}
