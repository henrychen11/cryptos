import React from 'react';
import { View, Text } from 'react-native';


class Wallet extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Wallet',
  }

  render() {
    return(

        <Text>The Wallet</Text>
    );
  }
}

export default Wallet;
