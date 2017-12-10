import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';

import CoinPriceChange from './coin_price_change';

class CoinIndexItem extends React.Component {
  _onPress() {

  }

  render() {
    const {Currency, CurrencyLong, price, change} = this.props.coin;
    return(
      <TouchableHighlight
        activeOpacity={5}
        underlayColor="gray"
        onPress={this._onPress}>
        <View style={styles.coinIndexItem}>
            <View style={styles.coinTitles}>
              <Text style={styles.coinSymbol}>
                {Currency}
              </Text>
              <Text style={styles.coinName}>
                {" | "}{CurrencyLong}
              </Text>
            </View>
            <View style={styles.coinValues}>
              <Text style={styles.coinPrice}>
                ${price}
              </Text>
              <CoinPriceChange priceChange={change}/>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  coinIndexItem: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  coinTitles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinSymbol: {
    color: 'white',
    fontSize: 18,
  },
  coinName: {
    color: 'white',
    fontSize: 18,
  },
  coinValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinPrice: {
    color: 'white',
    fontSize: 18,
    paddingRight: 7,
  }
});

export default CoinIndexItem;
