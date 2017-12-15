import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {
  formatChange,
  formatPriceChange,
  formatMarketCap
} from '../../util/formatter';
import { colors, layouts } from '../../stylesheets/constants';

class CoinPriceChange extends React.Component {
  constructor(props) {
    super(props);

    this.viewStyle = styles.negative;
  }

  contentDisplay() {
    let sign;

    if (this.props.percentChange >= 0) {
      sign = "+";
      this.viewStyle = styles.positive;
    } else {
      this.viewStyle = styles.negative;
    }

    switch (this.props.changeDisplay) {
      case 'percentVar':
        return (
          <Text style={styles.priceChange}>
            {sign}
            {formatChange(this.props.percentChange)}%
          </Text>
        );
      case 'priceVar':
        let priceChange = this.props.bidUSD * this.props.percentChange / 100;
        return (
          <Text style={styles.priceChange}>
            {sign}
            {formatPriceChange(priceChange)}
          </Text>
        );
      case 'marketCap':
        return (
          <Text style={styles.priceChange}>
            {formatMarketCap(this.props.marketCapUSD)}
          </Text>
        );
    }
  }

  render() {
    let content = this.contentDisplay();
    return (
      <TouchableWithoutFeedback
        onPress={(e) => this.props.toggleChangeDisplay(e)} >
        <View style={styles.coinPriceChange}>
          <View style={this.viewStyle}>
            { content }
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  coinPriceChange: {
    borderRadius: 5,
    overflow: 'hidden',
    width: 78,
  },
  positive: {
    backgroundColor: colors.green,
    width: '100%',
  },
  negative: {
    backgroundColor: colors.red,
    width: '100%',
  },
  priceChange: {
    color: colors.white,
    fontSize: 18,
    padding: 5,
    textAlign: 'right',
  }
});

export default CoinPriceChange;
