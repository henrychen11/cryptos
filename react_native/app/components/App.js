import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './screens/home';
import News from './screens/news';

const App = TabNavigator({
  Home: { screen: Home },
  News: { screen: News }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'green',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: 'black',
    },
  }
});

export default App;
