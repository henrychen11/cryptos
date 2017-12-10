import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import CoinIndexItem from './coin_index_item';

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const url = 'https://bittrex.com/api/v1.1/public/getcurrencies';

    return fetch(url)
            .then((response) => (response.json()))
            .then((responseJSON) => {
              this.setState({
                isLoading: false,
                coins: responseJSON.result.filter( (coin, idx) => idx < 20),
              });
              console.log(this.state);
            })
            .catch((error) => (console.log(error)));
  }


  render() {
    const { isLoading, coins } = this.state;
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <ScrollView style={styles.coinIndex}>
          {
            Object.values(this.state.coins).map((coin, idx) => (
              <CoinIndexItem
                key={idx}
                coin={coin} />
            ))
          }
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  coinIndex: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

export default CoinIndex;

let coins = {
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
  },
  btc2: {
    symbol: "BTC",
    name: "Bitcoin",
    price: "19,504",
    change: "2.32"
  },
  eth2: {
    symbol: "ETH",
    name: "Etherium",
    price: "504",
    change: "-0.32"
  },
  xrp2: {
    symbol: "XRP",
    name: "Ripple",
    price: "0.0245",
    change: "-2.21"
  },
  btc3: {
    symbol: "BTC",
    name: "Bitcoin",
    price: "19,504",
    change: "2.32"
  },
  eth3: {
    symbol: "ETH",
    name: "Etherium",
    price: "504",
    change: "-0.32"
  },
  xrp3: {
    symbol: "XRP",
    name: "Ripple",
    price: "0.0245",
    change: "-2.21"
  },
  btc4: {
    symbol: "BTC",
    name: "Bitcoin",
    price: "19,504",
    change: "2.32"
  },
  eth4: {
    symbol: "ETH",
    name: "Etherium",
    price: "504",
    change: "-0.32"
  },
  xrp4: {
    symbol: "XRP",
    name: "Ripple",
    price: "0.0245",
    change: "-2.21"
  }
};
