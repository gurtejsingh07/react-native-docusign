import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '@containers/profile';
import CounterScreen from '@containers/counter';
import Tabs from '@routes/tabber';


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