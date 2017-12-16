import React from 'react';
import { connect } from 'react-redux';
import {
  receiveCurrentCoin,
} from '../../actions/coin_actions';
import CoinIndexItem from './coin_index_item';
import {
  requestChartData,
} from '../../actions/chart_actions';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
  orientation: state.ui.orientation,
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentCoin: (coin, idx) => dispatch(receiveCurrentCoin(coin, idx)),
  requestChartData: (coinSymbol, time) =>
    dispatch(requestChartData(coinSymbol, time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinIndexItem);
