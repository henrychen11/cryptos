import React from 'react';
import { connect } from 'react-redux';
import {
  receiveCurrentCoin,
} from '../../actions/coin_actions';
import CoinIndexItem from './coin_index_item';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentCoin: (coin) => dispatch(receiveCurrentCoin(coin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinIndexItem);
