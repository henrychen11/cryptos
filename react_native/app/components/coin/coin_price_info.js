import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import CoinPriceInfoItem from './coin_price_info_item';

class CoinPriceInfo extends React.Component {

  render() {
    return(
      <View style={styles.coinPriceInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Coin Title</Text>
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
    fontSize: 16,
    padding: 4,
    color: colors.white,
  }
});

export default CoinPriceInfo;
