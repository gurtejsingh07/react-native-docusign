import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyDrawer from '@routes/drawer';
import LoginScreen from '@containers/login';

const RootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <RootStack.Screen name="MyDrawer" component={MyDrawer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
