import merge from 'lodash/merge';

import { RECEIVE_CURRENT_COIN } from '../actions/coin_actions';
import { RECEIVE_ORIENTATION } from '../actions/device_actions';
import { RECEIVE_CHART_DATA } from '../actions/chart_actions';

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
      return newState;
    case RECEIVE_ORIENTATION:
      newState = merge({}, state);
      newState.orientation = action.orientation;
      return newState;
    case RECEIVE_CHART_DATA:
      newState = merge({}, state);
      newState.currentChart = action.chartData;
      return newState;
    default:
      return state;
  }
};

export default UiReducer;
