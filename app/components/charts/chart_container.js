import React from 'react';
import { connect } from 'react-redux';
import {
  requestChartData,
} from '../../actions/chart_actions';
import Chart from './chart';

const mapStateToProps = (state) => ({
  coins: Object.values(state.entities.coins),
  currentCoin: state.ui.currentCoin,
});

const mapDispatchToProps = (dispatch) => ({
  requestChartData: (coinSymbol, time) =>
    dispatch(requestChartData(coinSymbol, time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
