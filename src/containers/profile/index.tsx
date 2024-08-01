import FamilyTree from '@components/tree/tree';
import React from 'react';
import {StyleSheet, View} from 'react-native';
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <FamilyTree/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default ProfileScreen;
