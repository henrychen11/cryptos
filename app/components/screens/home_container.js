import React from 'react';
import { connect } from 'react-redux';
import { receiveOrientation } from '../../actions/device_actions';
import { setNavigation } from '../../actions/navigation_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  orientation: state.ui.orientation,
});

const mapDispatchToProps = (dispatch) => ({
  receiveOrientation: (orientation) => dispatch(receiveOrientation(orientation)),
  setNavigation: (navigation) => dispatch(setNavigation(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
