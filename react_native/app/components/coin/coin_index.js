import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CoinIndexItem from './coin_index_item';

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: {
        btc: {
          symbol: "BTC",
          name: "Bitcoin",
          price: "19,504",
          change: "2.32"
        },
        eth: {
          symbol: "ETH",
          name: "Etherium",
          price: "504",
          change: "-0.32"
        },
        xrp: {
          symbol: "XRP",
          name: "Ripple",
          price: "0.0245",
          change: "-2.21"
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.coinIndex}>
        {
          Object.values(this.state.coins).map((coin, idx) => (
            <CoinIndexItem
              key={idx}
              coin={coin} />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinIndex: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 20
  }
});

export default CoinIndex;
