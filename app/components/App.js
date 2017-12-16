import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors, layouts } from '../stylesheets/constants';
import { StatusBar, View } from 'react-native';

import Home from './screens/home_container';
import News from './screens/news';
import NewsPreview from './news/news_preview';

import ChartShow from './charts/chart_show';

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

const Tab = TabNavigator({
  Home: { screen: Home },
  News: { screen: NewsModalStack },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: colors.green,
    labelStyle: {
      fontSize: layouts.tabBarFontSize,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: colors.black,
      paddingVertical: 12,
      // marginTop: 20,
    },
  }
});

class App extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, backgroundColor: colors.black }}>
        <StatusBar barStyle={'light-content'}/>
        <Tab />
      </View>

    );
  }
}

export default App;
