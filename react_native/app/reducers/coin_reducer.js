import {
  RECEIVE_COIN,
  RECEIVE_COINS
} from '../actions/coin_actions';
import merge from 'lodash/merge';

const initialState = {};

const CoinReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_COIN:
      newState = action.song;
      return merge({}, state, newState);
    case RECEIVE_COINS:
      newState = action.coins;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default CoinReducer;
