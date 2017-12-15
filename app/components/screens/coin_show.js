import React from 'react';
import CoinShowPrice from '../coin/coin_show_price';
import News from '../news/news_coin_index_container';
import MainChartContainer from '../charts/main_chart_container';
import { TabNavigator } from 'react-navigation';
import { colors } from '../../stylesheets/constants';

const App = TabNavigator({
  Price: {
    screen: CoinShowPrice,
  },
  Chart: {
    screen: MainChartContainer
  },
  News: {
    screen: News
  },
}, {
  tabBarVisible: false,
  animationEnabled: false,
  lazy: true,

  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.green,
    showIcon: false,
    showLabel: true,
    tabStyle: {
      padding: 5,
      flex: 0,
      justifyContent: 'center',
    },
    iconStyle: {
      color: colors.green
    },
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: colors.black,
      justifyContent: 'center'
    },
  }
});

export default App;
