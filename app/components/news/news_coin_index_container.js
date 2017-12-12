import React from 'react';
import { connect } from 'react-redux';
import NewsCoinIndex from './news_coin_index';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
});

export default connect(mapStateToProps)(NewsCoinIndex);
