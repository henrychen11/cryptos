import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import CoinPriceInfoItem from './coin_price_info_item';

class CoinPriceInfo extends React.Component {

  render() {
    const { currentCoin } = this.props;
    let coinInfo;
    if (currentCoin.name) {
      return (
        <View style={styles.coinPriceInfo}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{currentCoin.name}</Text>
          </View>
          <CoinPriceInfoItem
            title1="OPEN" value1={5}
            title2="MKT CAP" value2={10} />
          <CoinPriceInfoItem
            title1="24H HIGH" value1={0}
            title2="7D HIGH" value2={10} />
          <CoinPriceInfoItem
            title1="24H LOW" value1={0}
            title2="7D LOW" value2={10} />
        </View>
      );
    } else {
       return (
        <View style={styles.coinPriceInfo}>
          <Text style={styles.title}>Select a coin</Text>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
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
    fontSize: 18,
    padding: 4,
    color: colors.white,
    textAlign: 'center',
  }
});

export default CoinPriceInfo;
