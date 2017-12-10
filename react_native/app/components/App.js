import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screens/home';
import News from './screens/news';

const App = StackNavigator({
  Home: { screen: Home },
  News: { screen: News }
});

export default App;
