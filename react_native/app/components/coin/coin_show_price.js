import React from 'react';
import { View, StyleSheet } from 'react-native';
import CoinPriceInfo from '../coin/coin_price_info';
import { colors } from '../../stylesheets/constants';

class CoinShowPrice extends React.Component {

  render() {
    return(
      <View style={styles.coinShowPrice}>
        <CoinPriceInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinShowPrice: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.dark_gray,
  }
});

export default CoinShowPrice;
