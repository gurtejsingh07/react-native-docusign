import { Button, Text, View } from "react-native";

function LoginScreen({navigation}:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
        title="Login to drawer"
        onPress={() => navigation.navigate('MyDrawer')}
      />
      </View>
    );
  }
  export default LoginScreen