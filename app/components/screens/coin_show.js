import React from 'react';
import CoinShowPrice from '../coin/coin_show_price';
import News from '../news/news_coin_index_container';
import MainChartContainer from '../charts/main_chart_container';
import { TabNavigator } from 'react-navigation';


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
    activeTintColor: 'green',
    showIcon: false,
    showLabel: true,
    tabStyle: {
      padding: 5,
      flex: 0,
      justifyContent: 'center',
    },
    iconStyle: {
      color: 'green'
    },
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: 'black',
      justifyContent: 'center'
    },
  }
});

export default App;
