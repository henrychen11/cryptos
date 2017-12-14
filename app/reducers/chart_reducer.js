import {
  RECEIVE_CHART_DATA,
} from '../actions/chart_actions';
import merge from 'lodash/merge';

const initialState = [];

const ChartReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHART_DATA:
      newState = action.chartData;
      return newState;
    default:
      return state;
  }
};

export default ChartReducer;
