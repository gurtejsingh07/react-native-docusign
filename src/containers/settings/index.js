import {Text, View} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
        <Text>Settings!</Text>
    </View>
  );
}

const styles = {
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
};
