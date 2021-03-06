import merge from 'lodash/merge';

import { RECEIVE_CURRENT_COIN } from '../actions/coin_actions';
import { RECEIVE_ORIENTATION } from '../actions/device_actions';
import { RECEIVE_CHART_DATA } from '../actions/chart_actions';
import { RECEIVE_NAVIGATION } from '../actions/navigation_actions';

const initialState = {
  currentCoin: {},
  orientation: 'vertical',
  // currentChart: {},
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_COIN:
      newState = merge({}, state);
      newState.currentCoin = action.currentCoin;
      newState.currentCoin.idx = action.idx;
      return newState;
    case RECEIVE_ORIENTATION:
      newState = merge({}, state);
      newState.orientation = action.orientation;
      return newState;
    case RECEIVE_CHART_DATA:
      newState = merge({}, state);
      newState.currentChart = action.chartData;
      return newState;
    case RECEIVE_NAVIGATION:
      newState = merge({}, state);
      newState.navigation = action.navigation;
      return newState;
    default:
      return state;
  }
};

export default UiReducer;
