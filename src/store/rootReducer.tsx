import {combineReducers} from 'redux';
import counter from '@store/counter';
export const rootReducer = combineReducers({
  counter,
});
