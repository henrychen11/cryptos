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
    this.props.receiveCurrentCoin(this.props.coin, this.props.idx);
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
    const { priceType, idx, orientation, currentCoin } = this.props;
    let price = priceType === 'usd' ? bidUSD : bid;
    if (symbol === 'BTC' && priceType === 'btc') {
      price = 1;
    }
    let nameDisplay = symbol;
    let highlightStyle = styles.normal;
    let nameStyle = styles.coinSymbol;
    if (id === currentCoin.id) {
      highlightStyle = styles.selected;
      nameStyle = styles.selectedName;
      if (orientation === "vertical") {
        if (name.length > 8) {
          nameDisplay = name.slice(0,8) + "...";
        } else {
          nameDisplay = name;
        }
      }
    }

    let coinIndexItemStyle = styles.coinIndexItem;
    if (idx === currentCoin.idx + 1) {
      coinIndexItemStyle = styles.coinIndexItemAfter;
    } else if (idx === 0) {
      coinIndexItemStyle = styles.coinIndexItemFirst;
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
        <View style={coinIndexItemStyle}>
            <View style={styles.coinTitles}>
              <Text style={nameStyle}>
                {nameDisplay}
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
    borderColor: colors.selectedCoinBackground,
    borderTopWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  coinIndexItemAfter: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.selectedCoinBackground,
    borderTopWidth: 1,
    paddingHorizontal: layouts.marginHorizontal,
  },
  coinIndexItemFirst: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: layouts.marginHorizontal,
  },
  normal: {
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: colors.selectedCoinBackground,
  },
  coinTitles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinSymbol: {
    color: colors.white,
    fontSize: layouts.coinIndexFontSize,
  },
  selectedName: {
    color: colors.green,
    fontSize: layouts.coinIndexFontSize,
  },
  coinName: {
    color: colors.white,
    fontSize: layouts.coinIndexFontSize,
  },
  coinValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CoinIndexItem;
