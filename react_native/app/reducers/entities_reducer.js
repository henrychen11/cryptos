import { combineReducers } from 'redux';
import CoinReducer from './coin_reducer';

const EntitiesReducer = combineReducers({
  coins: CoinReducer,
});

export default EntitiesReducer;
