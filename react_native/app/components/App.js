import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './screens/home';
import News from './screens/news';
import Wallet from './screens/wallet';

const App = TabNavigator({
  Home: { screen: Home },
  News: { screen: News },
  Wallet: { screen: Wallet }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
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
