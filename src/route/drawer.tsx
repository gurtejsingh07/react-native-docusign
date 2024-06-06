import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './tabber';
import ProfileScreen from '../container/profile';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}