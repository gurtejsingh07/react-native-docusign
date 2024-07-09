import {Button, Text, View,StyleSheet} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment}  from '../../store/counter';
import type { RootState } from '../../store';
import Fonts from '@constants/fonts';
function CounterScreen() {
let counter=useSelector((state:RootState)=>state.counter.value) ;
let disptach=useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter {counter} </Text>
      <Button
        title="Increment"
        onPress={() => disptach(increment())}
      />
         <Button
        title="Decrement"
        onPress={() => disptach(decrement())}
      />
    </View>
  );    
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text:{
    ...Fonts.bold
  }
});
export default CounterScreen;
