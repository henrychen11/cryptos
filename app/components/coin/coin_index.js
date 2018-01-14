import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import CoinIndexItemContainer from './coin_index_item_container';

import { colors, layouts } from '../../stylesheets/constants';

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeDisplay: 'percentVar',
      priceType: 'usd',
    };
  }

  toggleChangeDisplay(e) {
    e.preventDefault();
    const changeDisplay = this.state.changeDisplay;
    if (changeDisplay === 'percentVar') {
      this.setState({ changeDisplay: 'priceVar' });
    } else if (changeDisplay === 'priceVar') {
      this.setState({ changeDisplay: 'marketCap' });
    } else if (changeDisplay === 'marketCap') {
      this.setState({ changeDisplay: 'percentVar' });
    }
  }

  togglePriceDisplay(e) {
    e.preventDefault();
    let newDisplay = this.state.priceType === 'usd' ? 'btc' : 'usd';
    this.setState({ priceType: newDisplay });
  }

  componentDidMount() {
    this.props.requestCoins();
    this.reqInt = setInterval(this.props.requestCoins, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.reqInt);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentCoin.symbol && newProps.coins.length > 0) {
      newProps.receiveCurrentCoin(newProps.coins[0], 0);
    }
  }

  render() {
    const { coins, receiveCurrentCoin } = this.props;
    let dispCoins = coins;
    if (coins.length > 0) {

      console.log(coins);
    } else {
      dispCoins = [{name: 'Bitcoin', id: -1, symbol: 'BTC'},
                  {name: 'Ethereum', id: -2, symbol: 'ETH'},
                  {name: 'Ripple', id: 99, symbol: 'XRP'},
                  {name: 'Ada', id: 278, symbol: 'ADA'},
                  {name: 'Litecoin', id: 1, symbol: 'LTC'},
                  {name: 'NewEconomyMovement', id: 120, symbol: 'XEM'},
                  {name: 'Lumen', id: 156, symbol: 'XLM'}];
    }
      return (
        <ScrollView style={styles.coinIndex}>
          {
            dispCoins.map((coin, idx) => (
              <CoinIndexItemContainer
                key={idx}
                idx={idx}
                toggleChangeDisplay={this.toggleChangeDisplay.bind(this)}
                togglePriceDisplay={this.togglePriceDisplay.bind(this)}
                changeDisplay={this.state.changeDisplay}
                priceType={this.state.priceType}
                coin={coin} />
            ))
          }
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  coinIndex: {
    backgroundColor: colors.black,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    overflow: 'scroll',

  }
});

export default CoinIndex;
