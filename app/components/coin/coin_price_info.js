import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import CoinPriceInfoItem from './coin_price_info_item';

import {
  formatPrice,
  formatChange,
  formatPriceChange,
  formatMarketCap,
  formatVolume,
} from '../../util/formatter';

class CoinPriceInfo extends React.Component {

  render() {
    const { currentCoin } = this.props;
    const {
      bidUSD,
      high7Days,
      high24Hours,
      low7Days,
      low24Hours,
      marketCapUSD,
      prevDayUSD,
      last,
      volume24Hours,
    } = currentCoin;
    let coinInfo;
    if (currentCoin.name) {
      return (
        <View style={styles.coinPriceInfo}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{currentCoin.name} ($)</Text>
          </View>
          <CoinPriceInfoItem
            title1="LAST" value1={formatPrice(last)}
            title2="MKT CAP" value2={formatMarketCap(marketCapUSD)}
            title3="24H VOL" value3={formatVolume(volume24Hours)} />
          <CoinPriceInfoItem
            title1="24H HIGH" value1={formatPrice(high24Hours)}
            title2="7D HIGH" value2={formatPrice(high7Days)}
            title3="BID" value3={formatPrice(bidUSD)} />
          <CoinPriceInfoItem
            title1="24H LOW" value1={formatPrice(low24Hours)}
            title2="7D LOW" value2={formatPrice(low7Days)}
            title3="ASK" value3={formatPrice(bidUSD)} />
        </View>
      );
    } else {
       return (
        <View style={styles.coinLoading}>
          <ActivityIndicator size="large" color="#32CD32" />
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  coinLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  coinPriceInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: layouts.marginHorizontal,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: colors.light_gray,
    width: '100%',
  },
  title: {
    fontSize: layouts.coinShowTitleFontSize,
    padding: 4,
    color: colors.white,
    textAlign: 'center',
  }
});

export default CoinPriceInfo;
