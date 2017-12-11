import merge from 'lodash/merge';

import { RECEIVE_CURRENT_COIN } from '../actions/coin_actions';

const initialState = {
  currentCoin: {},
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_COIN:
      newState = merge({}, state);
      newState.currentCoin = action.currentCoin;
      return newState;
    default:
      return state;
  }
};

export default UiReducer;
