import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class CoinPriceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  contentDisplay() {
    switch (this.props.priceType) {
      case 'usd':
        return (
          <Text style={styles.coinPrice}>
            ${this.props.priceDisplay}
          </Text>
        );
      case 'btc':
        if (this.props.priceDisplay > 0) {
          return (
            <Text style={styles.coinPrice}>
            ฿{Math.round(this.props.priceDisplay / 17500 * 100000) / 100000}
            </Text>
          );
        } else {
          return (
            <Text style={styles.coinPrice}>
            ฿{this.props.priceDisplay}
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
    color: 'white',
    fontSize: 18,
    paddingRight: 7,
  }
});

export default CoinPriceDisplay;
