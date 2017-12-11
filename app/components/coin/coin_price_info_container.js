import React from 'react';
import { connect } from 'react-redux';
import CoinPriceInfo from './coin_price_info';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinPriceInfo);
