import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './tabber';
import ProfileScreen from '../container/profile';
import CounterScreen from '../container/counter';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Counter" component={CounterScreen}/>
    </Drawer.Navigator>
  );
}