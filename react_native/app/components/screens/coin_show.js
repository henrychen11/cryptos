import React from 'react';
import CoinShowPrice from '../coin/coin_show_price';
import News from '../news/news_index';
import { TabNavigator } from 'react-navigation';


const App = TabNavigator({
  Price: { screen: CoinShowPrice },
  News: { screen: News }
}, {
  tabBarVisible: false,
  animationEnabled: false,
  lazy: true,

  swipeEnabled: true,
  tabBarPosition: 'bottom',
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
