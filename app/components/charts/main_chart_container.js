import React from 'react';
import { connect } from 'react-redux';
import MainChart from './main_chart';
import {
  requestChartData,
} from '../../actions/chart_actions';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
});

const mapDispatchToProps = (dispatch) => ({
  requestChartData: (coinSymbol, time) =>
    dispatch(requestChartData(coinSymbol, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainChart);
