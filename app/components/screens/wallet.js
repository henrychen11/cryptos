import React from 'react';
import { View, Text, WebView } from 'react-native';


class Wallet extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Wallet',
  }

  render() {
    return(

      <WebView
        source={{uri: 'https://buy.coinbase.com?code=9023urn3f8934hg34&address=1JcssT2Cr2xhnfcYscLL1bZPbojg4rUC2X'}}
        style={{marginTop: 20}} />
    );
  }
}

export default Wallet;
