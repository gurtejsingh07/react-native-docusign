import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '@constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
interface Props {
  navigation: LoginScreenNavigationProp;
}
const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Login to drawer"
        onPress={() => navigation.navigate('MyDrawer')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default LoginScreen;
