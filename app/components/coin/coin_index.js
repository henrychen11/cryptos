import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import CoinIndexItemContainer from './coin_index_item_container';

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCoins();
    if (this.props.coins.length > 0) {
      this.props.coins.length.forEach( coin => {
        this.props.requestCoin(coin.Currency);
      });
    }
  }

  render() {
    const { coins, receiveCurrentCoin } = this.props;
    if (coins.length > 0) {
      return (
        <ScrollView style={styles.coinIndex}>
          {
            coins.map((coin, idx) => (
              <CoinIndexItemContainer
                key={idx}
                coin={coin} />
            ))
          }
        </ScrollView>
      );
    } else {
      return <Text>Loading...</Text>;
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
