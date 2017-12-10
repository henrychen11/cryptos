import React from 'react';
import CoinShowPrice from '../coin/coin_show_price';
import { TabNavigator } from 'react-navigation';


const App = TabNavigator({
  Price: { screen: CoinShowPrice },
  Graph: { screen: CoinShowPrice },
  News: { screen: CoinShowPrice }
}, {
  tabBarVisible: false,
  animationEnabled: true,
  lazyLoad: true,
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
