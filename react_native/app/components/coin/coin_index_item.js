import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CoinPriceChange from './coin_price_change';

class CoinIndexItem extends React.Component {
  render() {
    const {symbol, name, price, change} = this.props.coin;
    console.log(symbol);
    return(
      <View style={styles.coinIndexItem}>
        <View style={styles.coinTitles}>
          <Text style={styles.coinSymbol}>
            {symbol}
          </Text>
          <Text style={styles.coinName}>
            {" | "}{name}
          </Text>
        </View>
        <View style={styles.coinValues}>
          <Text style={styles.coinPrice}>
            {price}
          </Text>
          <CoinPriceChange priceChange={change}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinIndexItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  coinTitles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  coinSymbol: {
    color: 'white'
  },
  coinName: {
    color: 'white'
  },
  coinValues: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  coinPrice: {
    color: 'white',
    padding: 5
  }
});

export default CoinIndexItem;
