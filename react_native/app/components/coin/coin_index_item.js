import React from 'react';
import { Text, View } from 'react-native';

class CoinIndexItem extends React.Component {
  render() {
    return(
      <View>
        <Text>{this.props.coin}</Text>
      </View>
    );
  }
}

export default CoinIndexItem;
