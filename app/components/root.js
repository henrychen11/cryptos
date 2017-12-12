import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../store/store';

let store = configureStore();
// Disable warnings
console.disableYellowBox = true;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
