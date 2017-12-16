export const RECEIVE_NAVIGATION = 'RECEIVE_NAVIGATION';

const receiveNavigation = (navigation) => ({
  type: RECEIVE_NAVIGATION,
  navigation
});

export const setNavigation = (navigation) => dispatch => (
  dispatch(receiveNavigation(navigation))
);
