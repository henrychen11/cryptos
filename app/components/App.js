import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors } from '../stylesheets/constants';

import Home from './screens/home_container';
import News from './screens/news';
import NewsPreview from './news/news_preview';

import MainChart from './charts/main_chart_container';

const NewsModalStack = StackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'News',
      header: null,
    }
  },
  NewsPreview: {
    path: 'NewsPreview',
    screen: NewsPreview,
    navigationOptions: {
      headerStyle: {

      },
    }
  },
}, {
  mode: 'modal',
});

const App = TabNavigator({
  Home: { screen: Home },
  News: { screen: NewsModalStack },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  tabBarOptions: {
    activeTintColor: colors.green,
    labelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: colors.black,
      padding: 10,
      marginTop: 20,
    },
  }
});

export default App;
