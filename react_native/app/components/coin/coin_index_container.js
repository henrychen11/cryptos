import React from 'react';
import { connect } from 'react-redux';
import { requestCoins } from '../../actions/coin_actions';
import CoinIndex from './coin_index';

const mapStateToProps = (state) => ({
  coins: Object.values(state.entities.coins)
});

const mapDispatchToProps = (dispatch) => ({
  requestCoins: () => dispatch(requestCoins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinIndex);
