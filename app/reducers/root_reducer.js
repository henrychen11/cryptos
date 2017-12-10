import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
});

export default RootReducer;
