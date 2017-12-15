import React from 'react';
import { connect } from 'react-redux';
import { receiveOrientation } from '../../actions/device_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  orientation: state.ui.orientation,
});

const mapDispatchToProps = (dispatch) => ({
  receiveOrientation: (orientation) => dispatch(receiveOrientation(orientation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
