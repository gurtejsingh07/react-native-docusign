import * as React from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//constants
import { DarkTheme,LightTheme } from '@constants/theme';
//screens
import MyDrawer from '@routes/drawer';
import LoginScreen from '@containers/login';
const RootStack = createNativeStackNavigator();
const Routes = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme=='dark' ? DarkTheme : LightTheme; 
  return (
    <NavigationContainer theme={theme}>
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
