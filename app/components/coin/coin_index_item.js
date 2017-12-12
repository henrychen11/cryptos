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
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    console.log(this.props.receiveCurrentCoin);
    this.props.receiveCurrentCoin(this.props.coin);
  }

  render() {
    const { id, symbol, name, price, change } = this.props.coin;
    let highlightStyle = styles.normal;
    if (id === this.props.currentCoin.id) {
      highlightStyle = styles.selected;
    }
    let priceDisplay, changeDisplay;
    if (price) {
      priceDisplay = `$${price}`;
    } else {
      priceDisplay = "----";
    }

    if (change) {
      changeDisplay = change;
    } else {
      changeDisplay = "----";
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
              <Text style={styles.coinName}>
                {" | "}{name}
              </Text>
            </View>
            <View style={styles.coinValues}>
              <Text style={styles.coinPrice}>
                {priceDisplay}
              </Text>
              <CoinPriceChange
                toggleChangeDisplay={this.props.toggleChangeDisplay}
                changeDisplay={this.props.changeDisplay}
                priceChange={changeDisplay}/>
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
  normal: {
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: 'gray',
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
