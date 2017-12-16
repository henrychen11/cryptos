import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { formatPrice } from '../../util/formatter';
import { colors, layouts } from '../../stylesheets/constants';

class CoinPriceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  contentDisplay() {
    const { price } = this.props;
    switch (this.props.priceType) {
      case 'usd':
        return (
          <Text style={styles.coinPrice}>
            ${formatPrice(price)}
          </Text>
        );
      case 'btc':
        if (this.props.priceDisplay > 0) {
          return (
            <Text style={styles.coinPrice}>
            ฿{formatPrice(price)}
            </Text>
          );
        } else {
          return (
            <Text style={styles.coinPrice}>
            ฿{formatPrice(price)}
            </Text>
          );
        }

    }
  }

  render() {
    let content = this.contentDisplay();
    return (
      <TouchableWithoutFeedback
        onPress={(e) => this.props.togglePriceDisplay(e)} >
        <View>
          { content }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  coinPrice: {
    color: colors.white,
    fontSize: layouts.coinIndexFontSize,
    paddingRight: 7,
  }
});

export default CoinPriceDisplay;
