import { Button, Text, View } from "react-native";

function HomeScreen({navigation}:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Profile page"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
  }
  export default HomeScreen