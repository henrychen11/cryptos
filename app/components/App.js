import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors, layouts } from '../stylesheets/constants';

import Home from './screens/home_container';
import News from './screens/news';
import NewsPreview from './news/news_preview';

const ModalStack = StackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'news'
    }
  },
  NewsPreview: {
    path: 'NewsPreview',
    screen: NewsPreview,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const App = TabNavigator({
  Home: { screen: Home },
  News: { screen: ModalStack }
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
