import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  ui: UiReducer,
});

export default RootReducer;
