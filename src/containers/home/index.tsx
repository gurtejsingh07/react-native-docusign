import {Button, Text, View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useEffect} from 'react';
function HomeScreen({navigation}: any) {
  const theme = useTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    console.log('theme=======>', theme);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Profile page"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:theme.colors.background
    },
    text: {
      color: theme.colors.text,
    },
  });

export default HomeScreen;
