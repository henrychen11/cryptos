import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import CoinIndexContainer from '../coin/coin_index_container';
import CoinShow from './coin_show';

class Home extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Cryptos',
  }

  render() {
    return(
      <View style={styles.container}>
        <CoinIndexContainer />
        <View style={styles.coinShow}>
          <CoinShow />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coinShow: {
    flex: .8,
    width: '100%',
    flexDirection: 'column',

  },
});



export default Home;
