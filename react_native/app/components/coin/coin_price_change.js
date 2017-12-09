import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CoinPriceChange extends React.Component {

  render() {
    let viewStyle, sign;
    if (this.props.priceChange >= 0) {
      sign = "+";
      viewStyle = styles.positive;
    } else {
      viewStyle = styles.negative;
    }
    return (
      <View style={styles.coinPriceChange}>
        <View style={viewStyle}>
          <Text style={styles.priceChange}>
            {sign}
            {this.props.priceChange}%
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinPriceChange: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  positive: {
    backgroundColor: 'green'
  },
  negative: {
    backgroundColor: 'red'
  },
  priceChange: {
    color: 'white',
    padding: 5,
  }
});

export default CoinPriceChange;
