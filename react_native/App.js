import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './app/components/screens/home';
import News from './app/components/screens/news';

const App = StackNavigator({
  Home: { screen: Home },
  News: { screen: News }
});

export default App;
