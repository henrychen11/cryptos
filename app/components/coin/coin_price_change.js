import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class CoinPriceChange extends React.Component {
  constructor(props) {
    super(props);

    this.viewStyle = styles.negative;
  }

  contentDisplay() {
    let sign;
    if (this.props.priceChange > 0) {
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
            {this.props.priceChange}%
          </Text>
        );
      case 'priceVar':
        return (
          <Text style={styles.priceChange}>
            {sign}
            {this.props.priceChange}
          </Text>
        );
      case 'marketCap':
        return (
          <Text style={styles.priceChange}>
            {this.props.priceChange}B
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
    width: 75,
  },
  positive: {
    backgroundColor: 'green',
    width: '100%',
  },
  negative: {
    backgroundColor: 'red',
    width: '100%',
  },
  priceChange: {
    color: 'white',
    fontSize: 18,
    padding: 5,
    textAlign: 'right',
  }
});

export default CoinPriceChange;
