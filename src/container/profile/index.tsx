import {Text, View} from 'react-native';
function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
    );
  }
const styles = {
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};
export default ProfileScreen;
