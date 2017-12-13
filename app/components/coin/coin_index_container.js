import React from 'react';
import { connect } from 'react-redux';
import {
  requestCoins,
  requestCoin,
  requestBTC,
  receiveCurrentCoin,
} from '../../actions/coin_actions';
import CoinIndex from './coin_index';

const mapStateToProps = (state) => ({
  coins: Object.values(state.entities.coins),
  currentCoin: state.ui.currentCoin,
});

const mapDispatchToProps = (dispatch) => ({
  requestCoins: () => dispatch(requestCoins()),
  requestCoin: (coin) => dispatch(requestCoins(coin)),
  requestBTC: () => dispatch(requestBTC()),
  receiveCurrentCoin: (coin) => dispatch(receiveCurrentCoin(coin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinIndex);
