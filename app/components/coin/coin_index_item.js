import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';

import CoinPriceChange from './coin_price_change';
import CoinPriceDisplay from './coin_price_display';

class CoinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.props.receiveCurrentCoin(this.props.coin);
    this.props.requestChartData(this.props.coin.symbol);
  }

  render() {
    const {
      id,
      symbol,
      name,
      bid,
      bidUSD,
      prevDay,
      percentChange24Hours,
      marketCapUSD,
    } = this.props.coin;
    const { priceType } = this.props;
    let price = priceType === 'usd' ? bidUSD : bid;
    if (symbol === 'BTC' && priceType === 'btc') {
      price = 1;
    }
    let highlightStyle = styles.normal;
    if (id === this.props.currentCoin.id) {
      highlightStyle = styles.selected;
    }
    let priceDisplay, changeDisplay;
    if (bidUSD) {
      priceDisplay = `${price}`;
    } else {
      priceDisplay = "----";
    }

    return(
      <TouchableHighlight
        activeOpacity={5}
        underlayColor="gray"
        onPress={this._onPress}
        style={highlightStyle}>
        <View style={styles.coinIndexItem}>
            <View style={styles.coinTitles}>
              <Text style={styles.coinSymbol}>
                {symbol}
              </Text>
            </View>
            <View style={styles.coinValues}>
              <CoinPriceDisplay
                togglePriceDisplay={this.props.togglePriceDisplay}
                priceType={this.props.priceType}
                price={price}
                />
              <CoinPriceChange
                toggleChangeDisplay={this.props.toggleChangeDisplay}
                changeDisplay={this.props.changeDisplay}
                marketCapUSD={marketCapUSD}
                percentChange={percentChange24Hours}
                bidUSD={bidUSD}/>
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
    borderColor: colors.gray,
    borderBottomWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  normal: {
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: colors.gray,
  },
  coinTitles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinSymbol: {
    color: colors.white,
    fontSize: 18,
  },
  coinName: {
    color: colors.white,
    fontSize: 18,
  },
  coinValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CoinIndexItem;
