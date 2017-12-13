import React from 'react';
import { connect } from 'react-redux';
import NewsIndex from './news_index';

const mapStateToProps = (state) => ({
  orientation: state.ui.orientation
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsIndex);
