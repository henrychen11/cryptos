import React from 'react';
import { connect } from 'react-redux';
import MainChart from './main_chart';

const mapStateToProps = (state) => ({
  currentCoin: state.ui.currentCoin,
});

export default connect(mapStateToProps)(MainChart);
