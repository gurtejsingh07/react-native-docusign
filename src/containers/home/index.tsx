import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme, Theme} from '@react-navigation/native';
import {RootStackParamList} from '@constants/types';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
interface Props {
  navigation: HomeScreenNavigationProp;
}
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Profile page"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};
const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.text,
    },
  });
};

export default HomeScreen;
