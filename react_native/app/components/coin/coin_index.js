import React from 'react';
import { Text, View } from 'react-native';
import CoinIndexItem from './coin_index_item';

class CoinIndex extends React.Component {
  render() {
    return (
      <View>
        <CoinIndexItem coin={"bitcoin"} />
        <CoinIndexItem coin={"etherium"} />
      </View>
    );
  }
}

export default CoinIndex;
