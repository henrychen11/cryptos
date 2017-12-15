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
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentCoin: (coin) => dispatch(receiveCurrentCoin(coin)),
  requestChartData: (coinSymbol, time) =>
    dispatch(requestChartData(coinSymbol, time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinIndexItem);
