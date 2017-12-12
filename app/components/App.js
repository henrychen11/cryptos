import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { colors, layouts } from '../stylesheets/constants';

import Home from './screens/home';
import News from './screens/news';

const App = TabNavigator({
  Home: { screen: Home },
  News: { screen: News }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'green',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: 'black',
      padding: 10,
      marginTop: 20,
    },
  }
});

export default App;
