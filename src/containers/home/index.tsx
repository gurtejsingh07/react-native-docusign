import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile page"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
const styles = {
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

export default HomeScreen;
