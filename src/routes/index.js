import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tabs';


export default function Routes(){
  return(
    <NavigationContainer>
      <TabRoutes></TabRoutes>
    </NavigationContainer>
  );
}