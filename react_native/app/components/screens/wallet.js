import React from 'react';
import { View, Text } from 'react-native';

class Wallet extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Wallet',
  }

  render() {
    return(
      <View>
        <Text>The Wallet</Text>
      </View>
    );
  }
}

export default Wallet;
