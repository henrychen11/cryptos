import React from 'react';
import { View, Text, WebView } from 'react-native';


class Wallet extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Wallet',
  }

  render() {
    return(

      <WebView
        source={{uri: 'https://buy.coinbase.com?code=0223524a-33bb-5bc0-ac22-ebbdd8a7d357'}}
        style={{marginTop: 20}} />
    );
  }
}

export default Wallet;
