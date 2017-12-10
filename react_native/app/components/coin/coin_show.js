import React from 'react';
import { View } from 'react-native';
import CoinPriceInfo from '../coin/coin_price_info';

class CoinShow extends React.Component {

  render() {
    return(
      <View>
        <CoinPriceInfo />
      </View>
    );
  }

}

export default CoinShow;
