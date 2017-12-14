import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors, layouts } from '../stylesheets/constants';

import Home from './screens/home_container';
import News from './screens/news';
import NewsPreview from './news/news_preview';

import LineChartExample from './charts/candle_chart';

const ModalStack = StackNavigator({
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
  News: { screen: ModalStack },
  Chart: { screen: LineChartExample }
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
