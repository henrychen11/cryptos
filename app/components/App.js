import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors } from '../stylesheets/constants';

import Home from './screens/home_container';
import News from './screens/news';
import NewsPreview from './news/news_preview';

import MainChart from './charts/main_chart_container';

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
  Chart: { screen: MainChart }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true,
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
